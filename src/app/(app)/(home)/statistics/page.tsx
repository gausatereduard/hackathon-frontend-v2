import { BottomNavigation } from "@/components/shared/bottom-navigation";
import { AllTransactions } from "@/components/shared/by-page/main-page";
import { getTransactions } from "@/server/actions/auth";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { FilterIcon, SearchIcon } from "lucide-react";

export default async function Page() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ['transactions'],
        queryFn: getTransactions,
    })

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
                    <HydrationBoundary state={dehydrate(queryClient)}>
                        <AllTransactions />
                    </HydrationBoundary>
                </section>
            </main>

            <BottomNavigation />
        </>
    )
}