import { ChevronLeft, SendIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className="bg-gradient-to-b from-slate-950 to-blue-950 text-white flex flex-col h-screen">
                {/* Header */}
                <div className="flex items-center p-4 border-b">
                    <Link href="/" className="flex items-center gap-2">
                        <ChevronLeft size={24} />
                        <span className="font-medium">Back</span>
                    </Link>
                </div>

                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    <div className="flex flex-col gap-4">
                        {/* AI Message */}
                        <div className="flex gap-2">
                            <div className="bg-black text-white rounded-lg p-3 max-w-[80%]">
                                <p>Hello! How can I help you today?</p>
                            </div>
                        </div>

                        {/* User Message */}
                        <div className="flex gap-2 flex-row-reverse">
                            <div className="bg-indigo-700 text-white rounded-lg p-3 max-w-[80%]">
                                <p>Hi! I have a question about my finances.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Input Area */}
                <div className="bg-slate-950 p-4">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="flex-1 rounded-full px-4 py-2 text-sm focus:outline-none bg-slate-800"
                        />
                        <button className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                            <SendIcon size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
