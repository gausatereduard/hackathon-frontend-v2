import { CheckCircle2, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <main className={"h-screen flex flex-col"}>
                <section className={"grow pt-2 px-4 mb-10 space-y-8"}>
                    <header>
                        <Link className={"flex items-center gap-0.5 text-sm font-semibold"} href={"/"}>
                            <ChevronLeft size={20} />
                            Back to home
                        </Link>
                    </header>

                    <section className={"text-center"}>
                        <div className="flex justify-center mb-4">
                            <CheckCircle2 className="text-green-500 w-16 h-16" />
                        </div>
                        <h2 className={"text-2xl font-bold"}>Handshake confirmed!</h2>
                        <p className="text-gray-500 mt-2">Your funds have been successfully transferred</p>
                    </section>

                    <section className={"flex gap-3 items-center justify-center"}>
                        <div className={"w-18 h-18 rounded-full bg-gray-200 overflow-hidden"}>
                            <Image src="/3.jpeg" alt="Image" width={72} height={72} />
                        </div>
                        <div>
                            <p className={"font-semibold"}>Edward D Vandenberg</p>
                            <p className={"text-sm"}>+1-300-555-0161</p>
                        </div>
                    </section>

                    <section className={"text-center"}>
                        <p className={"text-sm"}>Amount transferred</p>
                        <div className={"max-w-[200px] mx-auto flex items-center justify-center"}>
                            <p className={"w-full text-center text-3xl leading-normal py-2"}>
                                MDL 1000
                            </p>
                        </div>
                    </section>

                    <section className="px-4 py-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-500">Transaction ID</span>
                            <span className="font-medium">TRX129845762</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-500">Date & Time</span>
                            <span className="font-medium">{new Date().toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Status</span>
                            <span className="text-green-500 font-medium">Completed</span>
                        </div>
                    </section>
                </section>

                <section className={"px-4 pb-4"}>
                    <Link 
                        className={"w-full flex items-center justify-center bg-indigo-700 text-sm font-semibold text-white py-3 px-6 leading-normal rounded-md"} 
                        href={"/"}
                    >
                        Back to Home
                    </Link>
                </section>
            </main>
        </>
    );
}
