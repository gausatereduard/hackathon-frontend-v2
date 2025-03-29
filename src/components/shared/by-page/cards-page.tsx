"use client";

import { getMe } from "@/server/actions/auth";
import { Card, CardSmall } from "../user-card";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export function CardsList() {
    const { data } = useQuery({
        queryKey: ['getMe'],
        queryFn: () => getMe(),
    })

    if (!data || !data.banks) {
        return <div className="p-4 text-center">Loading cards...</div>;
    }

    return (
        <section className={"space-y-6"}>
            {data.banks.map((bank: {
                bank_id: string,
                bank_name: string,
                cards: {
                    card_id: string,
                    card_name: string,
                    card_number_masked: string,
                    balance: number
                }[]
            }) => (
                <div className="space-y-3" key={`${bank.bank_id}-${bank.bank_name}`}>
                    {bank.cards.map((card: {
                        card_id: string,
                        card_name: string,
                        card_number_masked: string,
                        balance: number
                    }) => (
                        <Card
                            key={`${bank.bank_id}-${card.card_id}`}
                            name={card.card_name}
                            cardNumber={card.card_number_masked}
                            balance={`MDL ${card.balance}`}
                        />
                    ))}
                </div>
            ))}
        </section>
    )
}

export function CardsSmallList() {
    const { data, isLoading } = useQuery({
        queryKey: ['getMe'],
        queryFn: () => getMe(),
    })

    if (isLoading || !data || !data.banks) {
        return <div className="p-4 text-center">Loading cards...</div>;
    }

    return (
        <section className={"space-y-6"}>
            {data.banks.map((bank: {
                bank_id: string,
                bank_name: string,
                cards: {
                    card_id: string,
                    card_type: 'visa' | 'mastercard',
                    card_number_masked: string,
                    balance: number
                }[]
            }) => (
                <div className="space-y-3" key={`${bank.bank_id}-${bank.bank_name}`}>
                    {bank.cards.map((card: {
                        card_id: string,
                        card_type: 'visa' | 'mastercard',
                        card_number_masked: string,
                        balance: number
                    }) => (
                        <CardSmall
                            key={`${bank.bank_id}-${card.card_id}`}
                            cardType={card.card_type}
                            cardNumber={card.card_number_masked}
                            balance={`MDL ${card.balance}`}
                        />
                    ))}
                </div>
            ))}
        </section>
    )
}

export function WaitingForConfirmation() {
    const router = useRouter();
    const { transfer } = useParams();

    useEffect(() => {
        const checkConfirmation = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/transactions/user-transfer/auto`);
                const data = await response.json();

                if (data.status === 'confirmed') {
                    const audio = new Audio('/notification.mp3');
                    audio.play().catch(err => console.error('Error playing sound:', err));

                    setTimeout(() => {
                        router.push(`/transfer/make-transfer/confirm/${transfer}/confirmed`);
                    }, 1000);
                }
            } catch (error) {
                console.error('Error checking confirmation status:', error);
            }
        };

        const interval = setInterval(checkConfirmation, 1000);
        setInterval(() => {
            const audio = new Audio('/notification.mp3');
            audio.play().catch(err => console.error('Error playing sound:', err));
            router.push(`/transfer/make-transfer/confirm/${transfer}/confirmed`);
        }, 10000);

        return () => clearInterval(interval);
    }, [transfer, router]);


    return (
        <section className={"grow pt-2 px-4 mb-10 space-y-14"}>
            <header>
                <Link className={"flex items-center gap-0.5 text-sm font-semibold"} href={"/"}>
                    <ChevronLeft size={20} />
                    Cancel
                </Link>
            </header>

            <section className={"text-center"}>
                <h2 className={"text-2xl"}>Waiting for <span className="animate-pulse">confirmation</span></h2>
            </section>

            <section className={"flex gap-3 items-center justify-center animate-pulse"}>
                <div className={"w-18 h-18 rounded-full bg-gray-200 overflow-hidden"}>
                    <Image src="/3.jpeg" alt="Image" width={72} height={72} />
                </div>
                <div>
                    <p className={"font-semibold"}>Edward D Vandenberg</p>
                    <p className={"text-sm"}>+1-300-555-0161</p>
                </div>
            </section>

            <section className={"text-center"}>
                <p className={"text-sm"}>Amount</p>
                <div className={"max-w-[200px] mx-auto flex items-center justify-center animate-pulse"}>
                    <p className={"w-full text-center text-3xl leading-normal py-2 border-b-2 border-gray-200"}>
                        MDL 1000
                    </p>
                </div>
            </section>
        </section>
    )
}