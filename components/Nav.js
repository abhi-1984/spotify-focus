import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import Link from "next/link";
import { SettingsIcon, SpotifyLogo } from "./Icons";
import Search from "./Search";
import { signOut, useSession } from "next-auth/react";

export default function Nav() {
  const { data: session, status } = useSession();

  const avatar = session?.user?.image;

  return (
    <nav className="px-10 bg-white z-10 py-6 w-full flex items-center justify-between fixed top-0 inset-x-0">
      <Link href="/">
        <a>
          <SpotifyLogo />
        </a>
      </Link>

      <Search />

      <div className="flex items-center space-x-6">
        <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
          <SettingsIcon />
        </div>
        <Avatar.Root
          onClick={() => signOut()}
          className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden"
        >
          <Avatar.Image
            alt={session?.user?.name}
            className="w-full h-full"
            src={avatar}
          />
          <Avatar.Fallback delayMs={600}>
            {session?.user?.name.substring(0, 2)}
          </Avatar.Fallback>
        </Avatar.Root>
      </div>
    </nav>
  );
}
