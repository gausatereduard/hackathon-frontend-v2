"use client"

import { getMe, getTransactions } from "@/server/actions/auth";
import { useQuery } from "@tanstack/react-query";
import { ArrowDownToLine, ArrowUpToLine, BellIcon, ReceiptCentIcon } from "lucide-react";
import Link from "next/link";
import { Transaction } from "../transaction-item";
import Image from "next/image";

export function UserHeader() {
    const { data } = useQuery({
        queryKey: ['getMe'],
        queryFn: () => getMe(),
    })

    return (
        <header className={"flex items-center justify-between"}>
            <div>
                <Link className={"flex items-center gap-2"} href={"/profile"}>
                    <div className={"w-12 h-12 rounded-full bg-gray-200 overflow-hidden"}>
                        <Image src="/john-doe.jpeg" alt="John Doe" width={48} height={48} />
                    </div>
                    <div className={"text-sm font-semibold text-white"}>
                        <p>Hello,</p>
                        <p>{data?.name || 'User'}</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link className={"text-white"} href={"/notifications"}>
                    <BellIcon size={20} />
                </Link>
            </div>
        </header>
    )
}

export function MainBalance() {
    const { data } = useQuery({
        queryKey: ['getMe'],
        queryFn: () => getMe(),
    })

    const totalBalance = data?.total_balance || 0;
    const balanceParts = totalBalance.toFixed(2).split(".");

    return (
        <article className={"bg-gradient-to-tr from-indigo-600/50 to-indigo-400/80 text-white rounded-lg p-4 space-y-6 py-6 px-8"}>
            <div className={"text-center"}>
                <p className={"text-xs leading-normal"}>Main balance</p>
                <div className={"leading-normal flex items-baseline justify-center"}>
                    <h1 className={"text-2xl font-semibold"}>MDL {balanceParts[0]}</h1>
                    <h4 className={"text-sm"}>.{balanceParts[1]}</h4>
                </div>
            </div>

            <div className={"flex items-center justify-between gap-2"}>
                <Link className={"grow flex flex-col items-center justify-center gap-1.5 text-center text-xs"} href={"/request"}>
                    <ArrowDownToLine size={16} />
                    Request
                </Link>
                <div className={"h-12 w-px bg-gray-200"} />
                <Link className={"grow flex flex-col items-center justify-center gap-1.5 text-center text-xs"} href={"/transfer"}>
                    <ArrowUpToLine size={16} />
                    Transfer
                </Link>
                <div className={"h-12 w-px bg-gray-200"} />
                <Link className={"grow flex flex-col items-center justify-center gap-1.5 text-center text-xs"} href={"/pay"}>
                    <ReceiptCentIcon size={16} />
                    Pay bills
                </Link>
            </div>
        </article>
    )
}

export function LatestTransactions() {
    const { data, isLoading } = useQuery({
        queryKey: ['transactions'],
        queryFn: () => getTransactions(),
    })

    return (
        <section className={"my-6 space-y-4"}>
            <header className={"flex items-center justify-between"}>
                <h6 className={"text-sm font-semibold"}>
                    Latest Transactions
                </h6>
                <Link href={"/statistics"} className={"text-xs"}>View all</Link>
            </header>
            {isLoading && <div className="p-4 text-center">Loading transactions...</div>}
            {!isLoading && data && data.length > 0 && (
                <div className={"flex flex-col divide-y divide-gray-200"}>
                    {data.slice(0, 5).map((transaction: {
                        id: string,
                        merchant: string,
                        date: string,
                        amount: string,
                        type: string
                    }) => (
                        <Transaction
                            key={transaction.id}
                            id={transaction.id}
                            merchant={transaction.merchant}
                            date={transaction.date}
                            amount={transaction.amount}
                            isIncoming={transaction.type !== "expense"}
                        />
                    ))}
                </div>
            )}
            {!isLoading && (!data || data.length === 0) && (
                <div className="p-4 text-center">No transactions found</div>
            )}
        </section>
    )
}

export function AllTransactions() {
    const { data, isLoading } = useQuery({
        queryKey: ['transactions'],
        queryFn: () => getTransactions(),
    })

    return (
        <>
            {isLoading && <div className="p-4 text-center">Loading transactions...</div>}
            {!isLoading && data && data.length > 0 && (
                <div className={"flex flex-col divide-y divide-gray-200"}>
                    {data.map((transaction: {
                        id: string,
                        merchant: string,
                        date: string,
                        amount: string,
                        type: string
                    }) => (
                        <Transaction
                            key={`${transaction.id}-${transaction.date}`}
                            id={transaction.id}
                            merchant={transaction.merchant}
                            date={transaction.date}
                            amount={transaction.amount}
                            isIncoming={transaction.type !== "expense"}
                        />
                    ))}
                </div>
            )}
            {!isLoading && (!data || data.length === 0) && (
                <div className="p-4 text-center">No transactions found</div>
            )}
        </>
    )
}