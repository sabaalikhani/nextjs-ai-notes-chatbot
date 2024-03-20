"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import AddEditNoteDialog from "@/components/add-edit-note-dialog";
import ThemeToggleButton from "@/components/theme-toggle-button";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import ChatButton from "@/components/chat-button";
// import Logo from "@/assets/logo.png";

export default function NavBar() {
  const { theme } = useTheme();
  const [showAddEditNoteDialog, setShowAddEditNoteDialog] = useState(false);

  return (
    <>
      <div className="p-4 shadow">
        <div className="m-auto flex max-w-7xl flex-wrap gap-3 items-center justify-between">
          <Link href="/notes" className="flex items-center gap-1">
            <span className="font-bold">My note app</span>
            {/* <Image src={Logo} alt="my app logo" width={40} height={40} /> */}
          </Link>
          <div className="flex items-center gap-2">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
              }}
            />
            <ThemeToggleButton />
            <Button onClick={() => setShowAddEditNoteDialog(true)}>
              <Plus size={20} className="mr-2" />
              Add note
            </Button>
            <ChatButton />
          </div>
        </div>
      </div>
      <AddEditNoteDialog
        open={showAddEditNoteDialog}
        setOpen={setShowAddEditNoteDialog}
      />
    </>
  );
}
