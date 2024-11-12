import Image from "next/image";
import Chat from "./chat";

export default function Home() {
  return (
    <div className="container mx-auto p-4 h-[100%]">      
      <Chat />
    </div>
  );
}
