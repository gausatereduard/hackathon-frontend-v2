import Link from "next/link";
import { BottomNavigation } from "@/components/shared/bottom-navigation";
import { CardsList } from "@/components/shared/by-page/cards-page";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { getMe } from "@/server/actions/auth";

export default async function Page() {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery({
		queryKey: ['getMe'],
		queryFn: getMe,
	})

	return (
		<>
			<main>
				<section className={"pt-2 px-4 mb-10 space-y-6"}>
					<header className={"flex items-center justify-between"}>
						<h2 className={"text-2xl"}>My Cards</h2>
						<Link
							href={"/cards/add"}
							className={"text-sm text-indigo-700 font-medium flex items-center gap-1"}
						>
							Add card
						</Link>
					</header>

					<HydrationBoundary state={dehydrate(queryClient)}>
						<CardsList />
					</HydrationBoundary>
				</section>
			</main>

			<BottomNavigation />
		</>
	);
}
