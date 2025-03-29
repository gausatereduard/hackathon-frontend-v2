import { ChevronLeft, ChevronRight } from "lucide-react";
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
					<h2 className={"text-2xl"}>Pay for</h2>
				</section>
			</section>

			<section className={"mb-4 px-4"}>
				<div>
					<input className={"w-full border border-gray-200 py-2 px-3 text-sm rounded-md"} type={"text"} placeholder={"Search"} />
				</div>
			</section>

			<main className={"space-y-6 px-4"}>
				<section className={"space-y-4"}>
					<header>
						<p className={"text-xs"}>Mobile</p>
					</header>
					<div className={"flex flex-col divide-y divide-gray-200"}>
						<Link className={"first:pt-0 last:pb-0 py-3 flex items-center justify-between"} href={"/pay/orange"}>
							<div className={"flex items-center gap-2"}>
								<div className={"w-12 h-12 rounded-full bg-gray-200"}></div>
								<div>
									<p className={"text-xs font-semibold"}>Orange</p>
								</div>
							</div>

							<div>
								<ChevronRight size={16} />
							</div>
						</Link>

						<Link className={"first:pt-0 last:pb-0 py-3 flex items-center justify-between"} href={"/pay/moldcell"}>
							<div className={"flex items-center gap-2"}>
								<div className={"w-12 h-12 rounded-full bg-gray-200"}></div>
								<div>
									<p className={"text-xs font-semibold"}>Moldcell</p>
								</div>
							</div>

							<div>
								<ChevronRight size={16} />
							</div>
						</Link>

						<Link className={"first:pt-0 last:pb-0 py-3 flex items-center justify-between"} href={"/transfer/make-transfer"}>
							<div className={"flex items-center gap-2"}>
								<div className={"w-12 h-12 rounded-full bg-gray-200"}></div>
								<div>
									<p className={"text-xs font-semibold"}>Unite 3G</p>
								</div>
							</div>

							<div>
								<ChevronRight size={16} />
							</div>
						</Link>
					</div>
				</section>

				<section className={"space-y-4"}>
					<header>
						<p className={"text-xs"}>Internet & TV</p>
					</header>
					<div className={"flex flex-col divide-y divide-gray-200"}>
						<Link className={"first:pt-0 last:pb-0 py-3 flex items-center justify-between"} href={"/pay/star-net"}>
							<div className={"flex items-center gap-2"}>
								<div className={"w-12 h-12 rounded-full bg-gray-200"}></div>
								<div>
									<p className={"text-xs font-semibold"}>StarNet</p>
								</div>
							</div>

							<div>
								<ChevronRight size={16} />
							</div>
						</Link>

						<Link className={"first:pt-0 last:pb-0 py-3 flex items-center justify-between"} href={"/pay/arax-zebra-tv"}>
							<div className={"flex items-center gap-2"}>
								<div className={"w-12 h-12 rounded-full bg-gray-200"}></div>
								<div>
									<p className={"text-xs font-semibold"}>ARAX / ZebraTV</p>
								</div>
							</div>

							<div>
								<ChevronRight size={16} />
							</div>
						</Link>

						<Link className={"first:pt-0 last:pb-0 py-3 flex items-center justify-between"} href={"/pay/chebur-net"}>
							<div className={"flex items-center gap-2"}>
								<div className={"w-12 h-12 rounded-full bg-gray-200"}></div>
								<div>
									<p className={"text-xs font-semibold"}>CheburNET</p>
								</div>
							</div>

							<div>
								<ChevronRight size={16} />
							</div>
						</Link>
					</div>
				</section>

				<section className={"space-y-4"}>
					<header>
						<p className={"text-xs"}>Insurance</p>
					</header>
					<div className={"flex flex-col divide-y divide-gray-200"}>
						<Link className={"first:pt-0 last:pb-0 py-3 flex items-center justify-between"} href={"/pay/carauto"}>
							<div className={"flex items-center gap-2"}>
								<div className={"w-12 h-12 rounded-full bg-gray-200"}></div>
								<div>
									<p className={"text-xs font-semibold"}>CarAuto</p>
								</div>
							</div>

							<div>
								<ChevronRight size={16} />
							</div>
						</Link>

						<Link className={"first:pt-0 last:pb-0 py-3 flex items-center justify-between"} href={"/pay/motocar"}>
							<div className={"flex items-center gap-2"}>
								<div className={"w-12 h-12 rounded-full bg-gray-200"}></div>
								<div>
									<p className={"text-xs font-semibold"}>MotoCar</p>
								</div>
							</div>

							<div>
								<ChevronRight size={16} />
							</div>
						</Link>

						<Link className={"first:pt-0 last:pb-0 py-3 flex items-center justify-between"} href={"/pay/tractor300-saver"}>
							<div className={"flex items-center gap-2"}>
								<div className={"w-12 h-12 rounded-full bg-gray-200"}></div>
								<div>
									<p className={"text-xs font-semibold"}>Tractor300Saver</p>
								</div>
							</div>

							<div>
								<ChevronRight size={16} />
							</div>
						</Link>
					</div>
				</section>
			</main>
		</>
	);
}
