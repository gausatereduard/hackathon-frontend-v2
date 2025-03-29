import { ChevronLeft, PlusIcon } from "lucide-react";
import Link from "next/link";

export default async function Page() {
	return (
		<>
			<section className={"pt-2 px-4 mb-10 space-y-10"}>
				<header>
					<Link className={"flex items-center gap-0.5 text-sm font-semibold"} href={"/"}>
						<ChevronLeft size={20} />
						Back
					</Link>
				</header>

				<section>
					<h2 className={"text-2xl"}>Request from</h2>
				</section>
			</section>

			<section className={"mb-4 px-4"}>
				<Link className={"flex items-center gap-2"} href={"/new-contact"}>
					<div className={"w-12 h-12 rounded-full flex items-center justify-center bg-indigo-100 text-indigo-700"}>
						<PlusIcon size={24} />
					</div>
					<p className={"text-xs"}>New contact</p>
				</Link>
				<div className={"my-4 flex items-center gap-2"}>
					<hr className={"flex-1"} />
					<p className={"text-xs"}>or</p>
					<hr className={"flex-1"} />
				</div>
				<div>
					<input className={"w-full border border-gray-200 py-2 px-3 text-sm rounded-md"} type={"text"} placeholder={"Search"} />
				</div>
			</section>

			<main className={"space-y-6 px-4"}>
				<section className={"space-y-4"}>
					<header>
						<p className={"text-xs"}>Frequent contacts</p>
					</header>
					<div className={"flex flex-col divide-y divide-gray-200"}>
						<Link className={"first:pt-0 last:pb-0 py-3 flex items-center justify-between"} href={"/request/make-request"}>
							<div className={"flex items-center gap-2"}>
								<div className={"w-12 h-12 rounded-full bg-gray-200"}></div>
								<div>
									<p className={"text-xs font-semibold"}>Ali Ahmed</p>
									<p className={"text-xs"}>+1-300-555-0161</p>
								</div>
							</div>

							<div>

							</div>
						</Link>

						<Link className={"first:pt-0 last:pb-0 py-3 flex items-center justify-between"} href={"/request/make-request"}>
							<div className={"flex items-center gap-2"}>
								<div className={"w-12 h-12 rounded-full bg-gray-200"}></div>
								<div>
									<p className={"text-xs font-semibold"}>Ali Ahmed</p>
									<p className={"text-xs"}>+1-300-555-0161</p>
								</div>
							</div>

							<div>

							</div>
						</Link>

						<Link className={"first:pt-0 last:pb-0 py-3 flex items-center justify-between"} href={"/request/make-request"}>
							<div className={"flex items-center gap-2"}>
								<div className={"w-12 h-12 rounded-full bg-gray-200"}></div>
								<div>
									<p className={"text-xs font-semibold"}>Ali Ahmed</p>
									<p className={"text-xs"}>+1-300-555-0161</p>
								</div>
							</div>

							<div>

							</div>
						</Link>
					</div>
				</section>

				<section className={"space-y-4"}>
					<header>
						<p className={"text-xs"}>All contacts</p>
					</header>
					<div className={"flex flex-col divide-y divide-gray-200"}>
						<Link className={"first:pt-0 last:pb-0 py-3 flex items-center justify-between"} href={"/request/make-request"}>
							<div className={"flex items-center gap-2"}>
								<div className={"w-12 h-12 rounded-full bg-gray-200"}></div>
								<div>
									<p className={"text-xs font-semibold"}>Ali Ahmed</p>
									<p className={"text-xs"}>+1-300-555-0161</p>
								</div>
							</div>

							<div>

							</div>
						</Link>

						<Link className={"first:pt-0 last:pb-0 py-3 flex items-center justify-between"} href={"/request/make-request"}>
							<div className={"flex items-center gap-2"}>
								<div className={"w-12 h-12 rounded-full bg-gray-200"}></div>
								<div>
									<p className={"text-xs font-semibold"}>Ali Ahmed</p>
									<p className={"text-xs"}>+1-300-555-0161</p>
								</div>
							</div>

							<div>

							</div>
						</Link>

						<Link className={"first:pt-0 last:pb-0 py-3 flex items-center justify-between"} href={"/request/make-request"}>
							<div className={"flex items-center gap-2"}>
								<div className={"w-12 h-12 rounded-full bg-gray-200"}></div>
								<div>
									<p className={"text-xs font-semibold"}>Ali Ahmed</p>
									<p className={"text-xs"}>+1-300-555-0161</p>
								</div>
							</div>

							<div>

							</div>
						</Link>
					</div>
				</section>
			</main>
		</>
	);
}
