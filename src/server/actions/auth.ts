"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signIn({ username, password }: { username: string, password: string }) {
    const cookieStore = await cookies()

    const formData = new URLSearchParams();
    formData.append('grant_type', 'password');
    formData.append('username', username);
    formData.append('password', password);
    formData.append('scope', '');
    formData.append('client_id', 'string');
    formData.append('client_secret', 'string');

    const res = await fetch(process.env.API_URL + "/api/auth/login", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
    })

    if (!res.ok) {
        console.log(JSON.stringify(await res.json(), null, 2));
        throw new Error("Failed to sign in");
    }

    const data = await res.json();

    cookieStore.set({
        name: 'access_token',
        value: data.access_token,
        httpOnly: true,
        path: '/',
    })

    return { success: true };
}

export async function signUp({ email, name, password }: { email: string, name: string, password: string }) {
    const res = await fetch(process.env.API_URL + "/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, name, password }),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    })

    if (!res.ok) {
        console.log(JSON.stringify(await res.json(), null, 2));
        throw new Error("Failed to sign up");
    }

    return { success: true };
}

export async function getMe() {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('access_token')?.value;

    if (!accessToken) {
        return null;
    }

    const res = await fetch(process.env.API_URL + "/api/auth/financial-info", {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        },
    })

    if (!res.ok) {
        console.log(JSON.stringify(await res.json(), null, 2));
        return null;
    }

    return await res.json();
}

export async function getTransactions() {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('access_token')?.value;

    if (!accessToken) {
        return null;
    }

    const res = await fetch(process.env.API_URL + "/api/transactions", {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        },
    })

    if (!res.ok) {
        console.log(JSON.stringify(await res.json(), null, 2));
        return null;
    }

    return await res.json();
}

export async function logout() {
    const cookieStore = await cookies()
    cookieStore.delete('access_token')

    redirect('/auth/login')

    return { success: true };
}