import { BottomNavigation } from "@/components/shared/bottom-navigation";
import { ArrowDownToLine, ArrowUpToLine, BellIcon, ChevronRight, PlusIcon, ReceiptCentIcon } from "lucide-react";
import Link from "next/link";

export default async function Page() {
	return (
		<>
			<section className={"pt-2 pb-6 space-y-4 px-4 bg-indigo-800"}>
				<header className={"flex items-center justify-between"}>
					<div>
						<Link className={"flex items-center gap-2"} href={"/profile"}>
							<div className={"w-12 h-12 rounded-full bg-gray-200"}></div>
							<div className={"text-sm font-semibold text-white"}>
								<p>Hello,</p>
								<p>Muhammad</p>
							</div>
						</Link>
					</div>
					<div>
						<Link className={"text-white"} href={"/notifications"}>
							<BellIcon size={20} />
						</Link>
					</div>
				</header>

				<section>
					<article className={"bg-gradient-to-tr from-indigo-600/50 to-indigo-400/80 text-white rounded-lg p-4 space-y-6 py-6 px-8"}>
						<div className={"text-center"}>
							<p className={"text-xs leading-normal"}>Main balance</p>
							<div className={"leading-normal flex items-baseline justify-center"}>
								<h1 className={"text-2xl font-semibold"}>MDL 14,235</h1>
								<h4 className={"text-sm"}>.34</h4>
							</div>
						</div>

						<div className={"flex items-center justify-between gap-2"}>
							<Link className={"grow flex flex-col items-center justify-center gap-1.5 text-center text-xs"} href={"/request"}>
								<ArrowDownToLine size={16} />
								Request
							</Link>
							<div className={"h-12 w-px bg-gray-200"} />
							<Link className={"grow flex flex-col items-center justify-center gap-1.5 text-center text-xs"} href={"/transfer"}>
								<ArrowUpToLine size={16} />
								Transfer
							</Link>
							<div className={"h-12 w-px bg-gray-200"} />
							<Link className={"grow flex flex-col items-center justify-center gap-1.5 text-center text-xs"} href={"/pay"}>
								<ReceiptCentIcon size={16} />
								Pay bills
							</Link>
						</div>
					</article>
				</section>
			</section>
			<main className={"px-4"}>
				<section className={"my-6 space-y-4"}>
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
				</section>

				<section className={"my-6 space-y-4"}>
					<header className={"flex items-center justify-between"}>
						<h6 className={"text-sm font-semibold"}>
							Latest Transactions
						</h6>
						<Link href={"/in-out"} className={"text-xs"}>View all</Link>
					</header>
					<div className={"flex flex-col divide-y divide-gray-200"}>
						<article className={"first:pt-0 last:pb-0 py-3 flex items-center justify-between"}>
							<div className={"flex items-center gap-2"}>
								<div className={"w-8 h-8 rounded-md bg-gray-200"}></div>
								<div>
									<p className={"text-xs font-semibold"}>Walmart</p>
									<div className={"flex items-center gap-1"}>
										<p className={"text-xs"}>Today</p>
										<p className={"text-xs"}>12:34</p>
									</div>
								</div>
							</div>

							<div className={"flex items-center gap-2"}>
								<p className={"text-right text-xs"}>- MDL 14,235</p>
								<ChevronRight size={16} />
							</div>
						</article>

						<article className={"first:pt-0 last:pb-0 py-3 flex items-center justify-between"}>
							<div className={"flex items-center gap-2"}>
								<div className={"w-8 h-8 rounded-md bg-gray-200"}></div>
								<div>
									<p className={"text-xs font-semibold"}>Walmart</p>
									<div className={"flex items-center gap-1"}>
										<p className={"text-xs"}>Today</p>
										<p className={"text-xs"}>12:34</p>
									</div>
								</div>
							</div>

							<div className={"flex items-center gap-1"}>
								<p className={"text-right text-xs"}>- MDL 14,235</p>
								<ChevronRight size={16} />
							</div>
						</article>

						<article className={"first:pt-0 last:pb-0 py-3 flex items-center justify-between"}>
							<div className={"flex items-center gap-2"}>
								<div className={"w-8 h-8 rounded-md bg-gray-200"}></div>
								<div>
									<p className={"text-xs font-semibold"}>Walmart</p>
									<div className={"flex items-center gap-1"}>
										<p className={"text-xs"}>Today</p>
										<p className={"text-xs"}>12:34</p>
									</div>
								</div>
							</div>

							<div className={"flex items-center gap-1"}>
								<p className={"text-right text-xs"}>- MDL 14,235</p>
								<ChevronRight size={16} />
							</div>
						</article>

						<article className={"first:pt-0 last:pb-0 py-3 flex items-center justify-between"}>
							<div className={"flex items-center gap-1"}>
								<div className={"w-8 h-8 rounded-md bg-gray-200"}></div>
								<div>
									<p className={"text-xs font-semibold"}>Walmart</p>
									<div className={"flex items-center gap-1"}>
										<p className={"text-xs"}>Today</p>
										<p className={"text-xs"}>12:34</p>
									</div>
								</div>
							</div>

							<div className={"flex items-center gap-1"}>
								<p className={"text-right text-xs"}>- MDL 14,235</p>
								<ChevronRight size={16} />
							</div>
						</article>

						<article className={"first:pt-0 last:pb-0 py-3 flex items-center justify-between"}>
							<div className={"flex items-center gap-1"}>
								<div className={"w-8 h-8 rounded-md bg-gray-200"}></div>
								<div>
									<p className={"text-xs font-semibold"}>Walmart</p>
									<div className={"flex items-center gap-1"}>
										<p className={"text-xs"}>Today</p>
										<p className={"text-xs"}>12:34</p>
									</div>
								</div>
							</div>

							<div className={"flex items-center gap-1"}>
								<p className={"text-right text-xs"}>- MDL 14,235</p>
								<ChevronRight size={16} />
							</div>
						</article>
					</div>
				</section>
			</main>
			<BottomNavigation />
		</>
	);
}
