import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function Page() {
	return (
		<>
			<section className={"pt-2 pb-6 space-y-4 px-4"}>
				<header className={"flex items-center justify-between"}>
					<Link className={"flex items-center gap-0.5 text-sm font-semibold"} href={"/"}>
						<ChevronLeft size={20} />
						Back
					</Link>
					<h1 className={"text-base font-semibold"}>Privacy Policy</h1>
					<div className={"w-5"}></div>
				</header>

				<div className={"space-y-6"}>
					<section>
						<h2 className={"text-lg font-semibold mb-3"}>1. Types of Data We Collect</h2>
						<p className={"text-sm text-gray-600 leading-relaxed"}>
							We collect various types of information to provide and improve our services. This includes personal information you provide directly, such as your name, email address, and phone number, as well as information automatically collected through your use of our services, including device information and transaction data.
						</p>
					</section>

					<section>
						<h2 className={"text-lg font-semibold mb-3"}>2. Use of Your Personal Data</h2>
						<p className={"text-sm text-gray-600 leading-relaxed"}>
							We use your personal data to provide our financial services, process transactions, communicate with you about your account, improve our services, and comply with legal obligations. We may also use your data to detect and prevent fraud and ensure the security of your account.
						</p>
					</section>

					<section>
						<h2 className={"text-lg font-semibold mb-3"}>3. Data Security</h2>
						<p className={"text-sm text-gray-600 leading-relaxed"}>
							We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. We regularly review and update our security practices to maintain the safety of your information.
						</p>
					</section>

					<section>
						<h2 className={"text-lg font-semibold mb-3"}>4. Your Rights</h2>
						<p className={"text-sm text-gray-600 leading-relaxed"}>
							You have the right to access, correct, or delete your personal data. You can also request a copy of your data or restrict its processing. Contact our support team to exercise any of these rights or learn more about how we handle your data.
						</p>
					</section>

					<section>
						<h2 className={"text-lg font-semibold mb-3"}>5. Updates to This Policy</h2>
						<p className={"text-sm text-gray-600 leading-relaxed"}>
							We may update this privacy policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any material changes and obtain your consent where required by law.
						</p>
					</section>
				</div>
			</section>
		</>
	);
}
