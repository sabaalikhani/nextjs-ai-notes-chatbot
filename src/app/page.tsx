import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) redirect("/notes");

  return (
    <main className="flex flex-col h-screen items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        {/* TODO: Place logo here */}
        {/* <Image src = {Logo} width={100} height={100}/> */}
        <span className="font-extrabold tracking-tight txt-4xl lg:text-5xl">
          My app
        </span>
      </div>
      <p className="max-w-prose text-center">
        An intelligent note taking app with AI integration
      </p>
      <Button size={"lg"} asChild>
        <Link href={"/notes"}>Open</Link>
      </Button>
    </main>
  );
}
