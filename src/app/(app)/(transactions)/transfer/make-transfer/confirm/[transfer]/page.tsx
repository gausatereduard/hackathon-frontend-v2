import { ConfirmByHandshake } from "@/components/shared/confirm-by-handshake";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
	return (
		<>
			<main className={"h-screen flex flex-col"}>
				<section className={"grow pt-2 px-4 mb-10 space-y-14"}>
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
						<p className={"text-sm"}>Amount</p>
						<div className={"max-w-[200px] mx-auto flex items-center justify-center"}>
							<p className={"w-full text-center text-3xl leading-normal py-2 border-b-2 border-gray-200"}>
								MDL 1000
							</p>
						</div>
					</section>
				</section>

				<section className={"px-4 pb-4"}>
					<section className={"flex flex-col gap-2"}>
						<Link className={"w-full flex items-center justify-center bg-indigo-700 text-sm font-semibold text-white py-3 px-6 leading-normal rounded-md"} href={"/transfer/make-transfer/confirm/uuid"}>
							Boring confirm (SMS or Email)
						</Link>
						<Link className={"w-full flex items-center justify-center bg-indigo-700 text-sm font-semibold text-white py-3 px-6 leading-normal rounded-md"} href={"/transfer/make-transfer/confirm/uuid"}>
							Confirm by Noseprint
						</Link>
						<ConfirmByHandshake />
						<Link className={"w-full flex items-center justify-center bg-indigo-100 text-sm font-semibold text-indigo-700 py-3 px-6 leading-normal rounded-md"} href={"/transfer"}>
							Cancel
						</Link>
					</section>
				</section>
			</main>
		</>
	);
}
