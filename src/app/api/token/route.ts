import { NextResponse } from "next/server";
import { serverClient } from "@/lib/stream-server";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
    const { userId } = auth();

    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = serverClient.createToken(userId);
    return NextResponse.json({ token });
}
