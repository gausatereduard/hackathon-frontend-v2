import { SearchIcon, FilterIcon } from "lucide-react";
import { Transaction } from "@/components/shared/transaction-item";
import { BottomNavigation } from "@/components/shared/bottom-navigation";

export default async function Page() {
	return (
		<>
			<main className="h-screen flex flex-col">
				<section className="pt-2 px-4 mb-4">
					<header className="flex items-center justify-between">
						<h1 className="text-xl font-semibold">History</h1>
					</header>
				</section>

				<section className="px-4 mb-6">
					<div className="flex items-center gap-2">
						<div className="relative flex-1">
							<div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
								<SearchIcon size={16} />
							</div>
							<input
								type="text"
								placeholder="Value goes here"
								className="w-full bg-gray-50 rounded-md py-2 pl-9 pr-3 text-sm border border-gray-100"
							/>
						</div>
						<button className="flex items-center gap-1 bg-gray-50 text-gray-700 border border-gray-100 py-2 px-3 rounded-md text-sm">
							<FilterIcon size={16} />
							Filter
						</button>
					</div>
				</section>

				<section className="px-4 space-y-6">
					{/* Today's transactions */}
					<div className="space-y-3">
						<h2 className="text-sm text-gray-500">Today</h2>

						<div className="flex flex-col divide-y divide-gray-100">
							<Transaction
								id="1"
								merchant="Walmart"
								date="Today, 13:32"
								amount="$35.53"
							/>

							<Transaction
								id="2"
								merchant="Top up"
								date="Yesterday, 03:10"
								amount="$40.00"
								isIncoming={true}
							/>

							<Transaction
								id="3"
								merchant="Netflix"
								date="Dec 26, 13:30"
								amount="$12.00"
							/>
						</div>
					</div>

					{/* Yesterday's transactions */}
					<div className="space-y-3">
						<h2 className="text-sm text-gray-500">Yesterday</h2>

						<div className="flex flex-col divide-y divide-gray-100">
							<Transaction
								id="4"
								merchant="Amazon"
								date="Today, 10:30"
								amount="$12.23"
							/>

							<Transaction
								id="5"
								merchant="Nike"
								date="Yesterday, 03:12"
								amount="$50.23"
							/>

							<Transaction
								id="6"
								merchant="The Home Depot"
								date="Dec 26, 13:53"
								amount="$129.00"
							/>
						</div>
					</div>

					{/* Thursday transactions */}
					<div className="space-y-3">
						<h2 className="text-sm text-gray-500">Thursday</h2>
						<p className="text-xs text-gray-400">December 29, 2022</p>

						<div className="flex flex-col divide-y divide-gray-100">
							<Transaction
								id="7"
								merchant="Amazon"
								date="Friday, 12:42"
								amount="$35.53"
							/>
						</div>
					</div>
				</section>
			</main>

			<BottomNavigation />
		</>
	);
}
