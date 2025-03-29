"use client"

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function ConfirmByHandshake() {
    const router = useRouter();

    const mutation = useMutation({
        mutationFn: () => fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/transfer/confirm/uuid/handshake`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    });

    const handleConfirm = () => {
        mutation.mutate();
        router.push(`/transfer/make-transfer/confirm/uuid/handshake`);
    }

    return (
        <button className={"w-full flex items-center justify-center bg-indigo-700 text-sm font-semibold text-white py-3 px-6 leading-normal rounded-md"} onClick={() => handleConfirm}>
            Confirm by Handshake
        </button>
    )
}