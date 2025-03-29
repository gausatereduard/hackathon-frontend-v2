import { BottomNavigation } from "@/components/shared/bottom-navigation";
import { LatestTransactions, MainBalance, UserHeader } from "@/components/shared/by-page/main-page";
import { getMe, getTransactions } from "@/server/actions/auth";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import Link from "next/link";

export default async function Page() {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery({
		queryKey: ['getMe'],
		queryFn: getMe,
	})

	await queryClient.prefetchQuery({
		queryKey: ['transactions'],
		queryFn: getTransactions,
	})

	return (
		<>
			<section className={"pt-2 pb-6 space-y-4 px-4 bg-indigo-800"}>
				<HydrationBoundary state={dehydrate(queryClient)}>
					<UserHeader />
				</HydrationBoundary>

				<section>
					<HydrationBoundary state={dehydrate(queryClient)}>
						<MainBalance />
					</HydrationBoundary>
				</section>
			</section>
			<main className={"px-4"}>
				<section className={"my-6"}>
					<Link className={"relative overflow-hidden block bg-gradient-to-br from-slate-950 to-blue-950 text-white rounded-lg py-4 px-8"} href={"/ai-chat"}>
						<div className={"absolute top-0 right-0 w-48 h-48 bg-[#3C2A85] rounded-full -mr-24 -mt-24 opacity-50"}></div>
						<div className={"absolute bottom-0 left-0 w-32 h-32 bg-[#3C2A85] rounded-full -ml-16 -mb-16 opacity-50"}></div>
						<div className={"absolute top-1/2 -right-10 w-40 h-40 border border-[#F3A739] rounded-full opacity-50"}></div>

						<div className={"relative z-10"}>
							<h3 className={"text-lg font-semibold"}>Warren AI</h3>
							<p className={"text-sm italic"}>Ask Warren anything about your finances</p>
						</div>
					</Link>
				</section>
				{/* <section className={"my-6 space-y-4"}>
					<header className={"flex items-center justify-between"}>
						<h6 className={"text-sm font-semibold"}>
							Recent Transfers
						</h6>
					</header>
					<div className={"flex items-center gap-4 overflow-x-auto -mx-4"}>
						<Link className={"first:pl-4 last:pr-4 flex flex-col items-center gap-2"} href={"/transfer"}>
							<div className={"w-16 h-16 rounded-full flex items-center justify-center bg-indigo-100 text-indigo-700"}>
								<PlusIcon size={24} />
							</div>
							<p className={"text-xs"}>New</p>
						</Link>

						<div className={"first:pl-4 last:pr-4 flex flex-col items-center gap-2"}>
							<div className={"w-16 h-16 rounded-full bg-gray-200"}></div>
							<p className={"text-xs"}>Ali</p>
						</div>

						<div className={"first:pl-4 last:pr-4 flex flex-col items-center gap-2"}>
							<div className={"w-16 h-16 rounded-full bg-gray-200"}></div>
							<p className={"text-xs"}>Steve</p>
						</div>

						<div className={"first:pl-4 last:pr-4 flex flex-col items-center gap-2"}>
							<div className={"w-16 h-16 rounded-full bg-gray-200"}></div>
							<p className={"text-xs"}>Ahmed</p>
						</div>

						<div className={"first:pl-4 last:pr-4 flex flex-col items-center gap-2"}>
							<div className={"w-16 h-16 rounded-full bg-gray-200"}></div>
							<p className={"text-xs"}>Ali</p>
						</div>

						<div className={"first:pl-4 last:pr-4 flex flex-col items-center gap-2"}>
							<div className={"w-16 h-16 rounded-full bg-gray-200"}></div>
							<p className={"text-xs"}>Steve</p>
						</div>

						<div className={"first:pl-4 last:pr-4 flex flex-col items-center gap-2"}>
							<div className={"w-16 h-16 rounded-full bg-gray-200"}></div>
							<p className={"text-xs"}>Ahmed</p>
						</div>
					</div>
				</section> */}

				<HydrationBoundary state={dehydrate(queryClient)}>
					<LatestTransactions />
				</HydrationBoundary>
			</main >
			<BottomNavigation />
		</>
	);
}
