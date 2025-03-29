"use client";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <main className="min-h-screen flex flex-col items-center px-5 py-8">
            <div className="w-full max-w-md flex flex-col items-center">
                <div className="mb-10 w-64 h-64 relative">
                    <Image
                        src="/auth-illustration.svg"
                        alt="Authentication illustration"
                        fill
                        className="object-contain"
                    />
                </div>

                <h1 className="text-4xl font-bold mb-12 text-center">Let&apos;s you in</h1>

                <div className="w-full space-y-4">
                    <Link
                        href="/auth/login"
                        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-full py-4 px-6 font-medium text-center transition-colors flex items-center justify-center"
                    >
                        Sign in
                    </Link>

                    <div className="text-center mt-5">
                        <span className="text-gray-500 text-sm">Don&apos;t have an account?</span>{" "}
                        <Link href="/auth/signup" className="text-indigo-500 font-medium text-sm">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
