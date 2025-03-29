import { SignupForm } from "@/components/shared/forms/signup-form";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {
	return (
		<>
			<main className="min-h-screen flex flex-col px-5 py-8">
				<header className="flex mb-16">
					<Link href="/auth" className="flex items-center gap-0.5 text-sm font-semibold">
						<ChevronLeft size={20} />
						Back
					</Link>
				</header>

				<section className="mb-12">
					<h1 className="text-4xl font-bold">Create Account</h1>
				</section>

				<SignupForm />
			</main>
		</>
	);
}
