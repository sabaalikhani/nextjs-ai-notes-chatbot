import { useState } from "react";
import CahatBox from "./chat-box";
import ChatBox from "./chat-box";
import { Button } from "./ui/button";
import { Bot } from "lucide-react";

export default function ChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setChatBoxOpen(true)}>
        <Bot size={20} className="mr-2" />
        AI Chat{" "}
      </Button>
      <ChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}
