import { StreamChat } from "stream-chat";
import { useEffect, useState } from "react";

export default function useStreamClient() {
    const [client, setClient] = useState<StreamChat | null>(null);

    useEffect(() => {
        async function connect() {
            const response = await fetch("/api/token");
            const data = await response.json();

            if (data.token) {
                const chatClient = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_API_KEY!);
                await chatClient.connectUser(
                    { id: "your-clerk-user-id" },
                    data.token
                );
                setClient(chatClient);
            }
        }
        connect();

        return () => {
            if (client) client.disconnectUser();
        };
    }, []);

    return client;
}
