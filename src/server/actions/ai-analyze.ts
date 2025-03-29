"use server";

import { cookies } from "next/headers";

export async function analyzeQuery(query: string) {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access_token')?.value;

    if (!accessToken) {
      return {
        success: false,
        error: "Authentication token not found. Please log in again."
      };
    }

    const response = await fetch("http://bank-api-env.eba-rvahpffs.us-east-1.elasticbeanstalk.com/api/ai/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`
      },
      body: JSON.stringify({ query }),
      cache: 'no-store'
    });

    if (!response.ok) {
      return {
        success: false,
        error: `Error ${response.status}: ${response.statusText}`
      };
    }

    const data = await response.json();
    
    return {
      success: true,
      data: data.analysis
    };
  } catch (error) {
    console.error("AI analysis error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred"
    };
  }
} 