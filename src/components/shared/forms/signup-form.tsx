"use client";

import { EyeIcon, MailIcon, LockIcon, UserIcon, EyeOffIcon } from "lucide-react";
import { signUp } from "@/server/actions/auth";
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { useState } from "react";

export function SignupForm() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await signUp({ name, email, password });

        if (res.success) {
            router.push("/auth/login");
        }
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
                <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <UserIcon size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-gray-50 rounded-lg py-4 pl-10 pr-3 text-sm border border-gray-200"
                        required
                    />
                </div>

                <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <MailIcon size={20} />
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-gray-50 rounded-lg py-4 pl-10 pr-3 text-sm border border-gray-200"
                        required
                    />
                </div>

                <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <LockIcon size={20} />
                    </div>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-gray-50 rounded-lg py-4 pl-10 pr-10 text-sm border border-gray-200"
                        required
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                    </button>
                </div>
            </div>

            <button
                type="submit"
                className="w-full flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-sm font-semibold text-white py-4 px-6 leading-normal rounded-full transition-colors mt-8"
            >
                Sign up
            </button>

            <div className="mt-8 text-center text-sm">
                <span className="text-gray-500">Already have an account?</span>{" "}
                <Link href="/auth/login" className="text-indigo-500 font-medium">
                    Sign in
                </Link>
            </div>
        </form>
    )
}