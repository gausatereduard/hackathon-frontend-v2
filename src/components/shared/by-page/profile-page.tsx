"use client"

import { logout } from "@/server/actions/auth"
import { ChevronRight, LogOutIcon, ShieldCheckIcon, ShieldIcon, MailIcon, SmartphoneIcon, UserIcon, BellIcon, LockIcon } from "lucide-react"
import Link from "next/link"

export function ProfileTop() {
    return (
        <div className={"flex flex-col items-center justify-center pt-4"}>
            <div className={"relative"}>
                <div className={"w-20 h-20 rounded-full bg-gray-200 overflow-hidden"}></div>
                <div className={"absolute bottom-0 right-0 bg-teal-500 rounded-full p-1"}>
                    <ShieldCheckIcon size={16} className={"fill-white text-teal-500"} />
                </div>
            </div>
            <div className={"mt-3 text-center"}>
                <h2 className={"text-base font-semibold"}>Abdullah Ghatashah</h2>
                <p className={"text-xs text-gray-500"}>Joined 2 years ago</p>
            </div>
        </div>
    )
}

export function ProfileInfo() {
    return (
        <div className={"flex flex-col divide-y divide-gray-100"}>
            <div className={"py-3 flex items-center justify-between"}>
                <div className={"flex items-center gap-3"}>
                    <div className={"w-10 h-10 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600"}>
                        <UserIcon size={18} />
                    </div>
                    <div>
                        <p className={"text-xs text-gray-500"}>Full name</p>
                        <p className={"text-sm font-medium"}>Abdullah Ghatashah</p>
                    </div>
                </div>
                <Link href={"#"} className={"text-indigo-600 text-sm"}>
                    Edit
                </Link>
            </div>

            <div className={"py-3 flex items-center justify-between"}>
                <div className={"flex items-center gap-3"}>
                    <div className={"w-10 h-10 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600"}>
                        <SmartphoneIcon size={18} />
                    </div>
                    <div>
                        <p className={"text-xs text-gray-500"}>Mobile</p>
                        <p className={"text-sm font-medium"}>+962 79 890 50 14</p>
                    </div>
                </div>
                <Link href={"#"} className={"text-indigo-600 text-sm"}>
                    Edit
                </Link>
            </div>

            <div className={"py-3 flex items-center justify-between"}>
                <div className={"flex items-center gap-3"}>
                    <div className={"w-10 h-10 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600"}>
                        <MailIcon size={18} />
                    </div>
                    <div>
                        <p className={"text-xs text-gray-500"}>Email</p>
                        <p className={"text-sm font-medium"}>abdgfx@gmail.com</p>
                    </div>
                </div>
                <Link href={"#"} className={"text-indigo-600 text-sm"}>
                    Edit
                </Link>
            </div>

            <Link href={"/profile/security"} className={"py-3 flex items-center justify-between"}>
                <div className={"flex items-center gap-3"}>
                    <div className={"w-10 h-10 rounded-md bg-red-50 flex items-center justify-center text-red-600"}>
                        <LockIcon size={18} />
                    </div>
                    <p className={"text-sm font-medium"}>Change password</p>
                </div>
                <ChevronRight size={18} className={"text-gray-400"} />
            </Link>

            <Link href={"/profile/notifications"} className={"py-3 flex items-center justify-between"}>
                <div className={"flex items-center gap-3"}>
                    <div className={"w-10 h-10 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600"}>
                        <BellIcon size={18} />
                    </div>
                    <p className={"text-sm font-medium"}>Notifications</p>
                </div>
                <ChevronRight size={18} className={"text-gray-400"} />
            </Link>

            <Link href={"/profile/privacy-policy"} className={"py-3 flex items-center justify-between"}>
                <div className={"flex items-center gap-3"}>
                    <div className={"w-10 h-10 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600"}>
                        <ShieldIcon size={18} />
                    </div>
                    <p className={"text-sm font-medium"}>Privacy Policy</p>
                </div>
                <ChevronRight size={18} className={"text-gray-400"} />
            </Link>

            <button className={"py-3 flex items-center justify-between cursor-pointer"} onClick={() => logout()}>
                <div className={"flex items-center gap-3"}>
                    <div className={"w-10 h-10 rounded-md bg-red-50 flex items-center justify-center text-red-600"}>
                        <LogOutIcon size={18} />
                    </div>
                    <p className={"text-sm font-medium text-red-600"}>Logout</p>
                </div>
            </button>
        </div>
    )
}