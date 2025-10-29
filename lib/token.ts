import { StreamChat } from "stream-chat";

const serverClient = StreamChat.getInstance(
    process.env.NEXT_PUBLIC_STREAM_API_KEY!,
    process.env.STREAM_API_SECRET! // make sure this matches your .env key
);

export async function createStreamToken(userId: string) {
    try {
        const token = serverClient.createToken(userId);
        return token;
    } catch (error: any) {
        throw new Error("Failed to create Stream token: " + error.message);
    }
}
