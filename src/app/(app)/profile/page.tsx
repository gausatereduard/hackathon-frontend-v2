import { BottomNavigation } from "@/components/shared/bottom-navigation";
import { ProfileInfo, ProfileTop } from "@/components/shared/by-page/profile-page";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function Page() {
	return (
		<>
			<section className={"pt-2 pb-6 space-y-4 px-4 bg-white"}>
				<header className={"flex items-center justify-between"}>
					<Link className={"flex items-center gap-0.5 text-sm font-semibold"} href={"/"}>
						<ChevronLeft size={20} />
						Back
					</Link>
					<h1 className={"text-base font-semibold"}>Profile Settings</h1>
					<div className={"w-5"}></div>
				</header>

				<ProfileTop />
			</section>

			<main className={"px-4 py-2"}>
				<ProfileInfo />
			</main>

			<BottomNavigation />
		</>
	);
}
