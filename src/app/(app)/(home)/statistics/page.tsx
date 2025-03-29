import { BottomNavigation } from "@/components/shared/bottom-navigation";
import { Transaction } from "@/components/shared/transaction-item";
import { FilterIcon } from "lucide-react";
import { SearchIcon } from "lucide-react";

export default async function Page() {
    return (
        <>
            <main className="h-screen flex flex-col">
                <section className="pt-2 px-4 mb-4">
                    <header className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold">Statistics</h1>
                    </header>
                </section>

                <section className="px-4 mb-6">
                    <div className="flex items-center gap-2">
                        <div className="relative flex-1">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <SearchIcon size={16} />
                            </div>
                            <input
                                type="text"
                                placeholder="Ask AI ssistant"
                                className="w-full bg-gray-50 rounded-md py-2 pl-9 pr-3 text-sm border border-gray-100"
                            />
                        </div>
                        <button className="flex items-center gap-1 bg-gray-50 text-gray-700 border border-gray-100 py-2 px-3 rounded-md text-sm">
                            <FilterIcon size={16} />
                            Filter
                        </button>
                    </div>
                </section>

                <section className="px-4 space-y-6">
                    {/* Today's transactions */}
                    <div className="space-y-3">
                        <header className={"flex items-center justify-between"}>
                            <h2 className="text-sm text-gray-500">Today</h2>

                            <div className={"text-xs flex items-center gap-2"}>
                                <p className={"text-emerald-700"}>+3000</p>
                                <div className={"h-2 w-px bg-gray-300"} />
                                <p className={"text-red-700"}>-3000</p>
                            </div>
                        </header>

                        <div className="flex flex-col divide-y divide-gray-100">
                            <Transaction
                                id="1"
                                merchant="Walmart"
                                date="Today, 13:32"
                                amount="$35.53"
                                iconBgColor="bg-blue-100"
                                iconPath="/walmart-icon.png"
                            />

                            <Transaction
                                id="2"
                                merchant="Top up"
                                date="Yesterday, 03:10"
                                amount="$40.00"
                                isIncoming={true}
                                iconBgColor="bg-indigo-100"
                                iconPath="/topup-icon.png"
                            />

                            <Transaction
                                id="3"
                                merchant="Netflix"
                                date="Dec 26, 13:30"
                                amount="$12.00"
                                iconBgColor="bg-red-100"
                                iconPath="/netflix-icon.png"
                            />
                        </div>
                    </div>

                    {/* Yesterday's transactions */}
                    <div className="space-y-3">
                        <h2 className="text-sm text-gray-500">Yesterday</h2>

                        <div className="flex flex-col divide-y divide-gray-100">
                            <Transaction
                                id="4"
                                merchant="Amazon"
                                date="Today, 10:30"
                                amount="$12.23"
                                iconBgColor="bg-orange-100"
                                iconPath="/amazon-icon.png"
                            />

                            <Transaction
                                id="5"
                                merchant="Nike"
                                date="Yesterday, 03:12"
                                amount="$50.23"
                                iconBgColor="bg-gray-900"
                                iconPath="/nike-icon.png"
                            />

                            <Transaction
                                id="6"
                                merchant="The Home Depot"
                                date="Dec 26, 13:53"
                                amount="$129.00"
                                iconBgColor="bg-orange-500"
                                iconPath="/homedepot-icon.png"
                            />
                        </div>
                    </div>

                    {/* Thursday transactions */}
                    <div className="space-y-3">
                        <h2 className="text-sm text-gray-500">Thursday</h2>
                        <p className="text-xs text-gray-400">December 29, 2022</p>

                        <div className="flex flex-col divide-y divide-gray-100">
                            <Transaction
                                id="7"
                                merchant="Amazon"
                                date="Friday, 12:42"
                                amount="$35.53"
                                iconBgColor="bg-orange-100"
                                iconPath="/amazon-icon.png"
                            />
                        </div>
                    </div>
                </section>
            </main>

            <BottomNavigation />
        </>
    )
}