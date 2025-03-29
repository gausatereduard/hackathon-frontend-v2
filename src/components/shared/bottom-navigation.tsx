"use client";

import { ChartAreaIcon, CreditCardIcon, HomeIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomNavigation() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className={"fixed bottom-0 left-0 w-full right-0 bg-white shadow-t-md px-4 border-t border-gray-200 z-50"}>
            <div className={"max-w-md mx-auto flex items-center justify-between"}>
                <Link href={"/"} className={`h-full px-3 py-4 grow -mt-px text-sm flex flex-col items-center justify-center ${isActive("/") ? "text-indigo-700 border-t border-indigo-700" : ""}`}>
                    <HomeIcon size={16} />
                    Home
                </Link>
                <Link href={"/statistics"} className={`h-full px-3 py-4 grow -mt-px text-sm flex flex-col items-center justify-center ${isActive("/statistics") ? "text-indigo-700 border-t border-indigo-700" : ""}`}>
                    <ChartAreaIcon size={16} />
                    Statistics
                </Link>
                <Link href={"/cards"} className={`h-full px-3 py-4 grow -mt-px text-sm flex flex-col items-center justify-center ${isActive("/cards") ? "text-indigo-700 border-t border-indigo-700" : ""}`}>
                    <CreditCardIcon size={16} />
                    Cards
                </Link>
                <Link href={"/profile"} className={`h-full px-3 py-4 grow -mt-px text-sm flex flex-col items-center justify-center ${isActive("/profile") ? "text-indigo-700 border-t border-indigo-700" : ""}`}>
                    <UserIcon size={16} />
                    Profile
                </Link>
            </div>
        </nav>
    )
}