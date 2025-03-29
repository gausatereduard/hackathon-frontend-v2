import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CardsSmallList } from "@/components/shared/by-page/cards-page";

export default async function Page() {
	return (
		<>
			<main className={"h-screen flex flex-col"}>
				<section className={"grow pt-2 px-4 mb-10 space-y-6"}>
					<header>
						<Link className={"flex items-center gap-0.5 text-sm font-semibold"} href={"/"}>
							<ChevronLeft size={20} />
							Back
						</Link>
					</header>

					<section className={"text-center"}>
						<h2 className={"text-2xl"}>Transfer to</h2>
					</section>

					<section className={"flex gap-3 items-center justify-center"}>
						<div className={"w-18 h-18 rounded-full bg-gray-200 overflow-hidden"}>
							<Image src="/3.jpeg" alt="Image" width={72} height={72} />
						</div>
						<div>
							<p className={"font-semibold"}>Edward D Vandenberg</p>
							<p className={"text-sm"}>+1-300-555-0161</p>
						</div>
					</section>

					<section className={"text-center"}>
						<p className={"text-sm"}>Enter Amount</p>
						<div className={"max-w-[200px] mx-auto flex items-center justify-center"}>
							<input
								type="text"
								placeholder="MDL 00.00"
								className={"w-full text-center text-3xl leading-normal focus:outline-none py-2 border-b-2 border-gray-200 focus:border-indigo-700"}
							/>
						</div>
					</section>

					<section className={"px-4 flex flex-col gap-2"}>
						<CardsSmallList />
					</section>
				</section>

				<section className={"px-4 pb-4"}>
					<section className={"flex gap-4"}>
						<Link className={"w-full flex items-center justify-center bg-indigo-100 text-sm font-semibold text-indigo-700 py-3 px-6 leading-normal rounded-md"} href={"/transfer"}>
							Cancel
						</Link>
						<Link className={"w-full flex items-center justify-center bg-indigo-700 text-sm font-semibold text-white py-3 px-6 leading-normal rounded-md"} href={"/transfer/make-transfer/confirm/uuid"}>
							Continue
						</Link>
					</section>
				</section>
			</main>
		</>
	);
}
