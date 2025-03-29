import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function Page() {
	return (
		<>
			<main className={"h-screen flex flex-col"}>
				<section className={"grow space-y-10"}>
					<section className={"pt-2 px-4 mb-10 space-y-10"}>
						<header>
							<Link className={"flex items-center gap-0.5 text-sm font-semibold"} href={"/"}>
								<ChevronLeft size={20} />
								Back
							</Link>
						</header>

						<section>
							<h2 className={"text-2xl"}>New contact</h2>
						</section>
					</section>

					<section className={"px-4 space-y-4"}>
						<div className={"space-y-2"}>
							<p className={"text-xs"}>Name</p>
							<input className={"w-full border border-gray-200 py-2 px-3 text-sm rounded-md"} type={"text"} placeholder={"Name"} />
						</div>

						<div className={"space-y-2"}>
							<p className={"text-xs"}>Phone</p>
							<input className={"w-full border border-gray-200 py-2 px-3 text-sm rounded-md"} type={"text"} placeholder={"Phone"} />
						</div>

						<div className={"space-y-2"}>
							<p className={"text-xs"}>Email</p>
							<input className={"w-full border border-gray-200 py-2 px-3 text-sm rounded-md"} type={"text"} placeholder={"Email"} />
						</div>
					</section>
				</section>

				<section className={"px-4 pb-4"}>
					<section className={"flex gap-4"}>
						<Link className={"w-full flex items-center justify-center bg-indigo-100 text-sm font-semibold text-indigo-700 py-3 px-6 leading-normal rounded-md"} href={"/transfer"}>
							Cancel
						</Link>
						<button className={"w-full flex items-center justify-center bg-indigo-700 text-sm font-semibold text-white py-3 px-6 leading-normal rounded-md"}>
							Create
						</button>
					</section>
				</section>
			</main>
		</>
	);
}
