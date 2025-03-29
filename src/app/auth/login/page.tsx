import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { SignInForm } from "@/components/shared/forms/signin-form";

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
					<h1 className="text-4xl font-bold mb-1">Login to your</h1>
					<h1 className="text-4xl font-bold">Account</h1>
				</section>

				<SignInForm />

				<div className="text-center mt-10">
					<span className="text-gray-500 text-sm">Don&apos;t have an account?</span>{" "}
					<Link href="/auth/signup" className="text-blue-500 font-medium text-sm">
						Sign up
					</Link>
				</div>
			</main>
		</>
	);
}
