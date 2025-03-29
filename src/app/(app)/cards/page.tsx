import Link from "next/link";
import { Card } from "@/components/shared/user-card";
import { BottomNavigation } from "@/components/shared/bottom-navigation";

export default async function Page() {
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

					<section className={"space-y-3"}>
					<Card
							name="Abdullah Ghatashah"
							cardNumber="4242 4242 4242 2345"
							balance="$2,354"
						/>
						<Card
							name="Abdullah Ghatashah"
							cardNumber="4242 4242 4242 6432"
							balance="$1,845"
						/>
						<Card
							name="Abdullah Ghatashah"
							cardNumber="4242 4242 4242 3245"
							balance="$954"
						/>
					</section>
				</section>
			</main>

			<BottomNavigation />
		</>
	);
}
