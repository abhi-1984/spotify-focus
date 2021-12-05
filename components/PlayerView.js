import { signOut, useSession } from "next-auth/react";
import * as Avatar from "@radix-ui/react-avatar";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import {
  MoreIcon,
  NextIcon,
  PlayIcon,
  PreviousIcon,
  SettingsIcon,
  SpeakerIcon,
  SpotifyLogo,
} from "./Icons";
import Search from "./Search";
import { usePalette } from "react-palette";

function PlayerView() {
  const { data: session } = useSession();

  const avatar = session?.user?.image;
  return (
    <section className="flex flex-col items-center justify-between">
      <header className="relative px-6 py-5 w-full flex items-center justify-between">
        <SpotifyLogo />
        <Search />
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
      </header>

      <article className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold leading-normal">Viva La Vida</h1>
          <p className="opacity-60">Coldplay</p>
        </div>
        <div className="rounded-lg overflow-hidden">
          <Image
            src={
              "https://i1.sndcdn.com/artworks-000063664660-wum57a-t500x500.jpg"
            }
            alt=""
            width={400}
            height={400}
            quality={100}
          />
        </div>
        <div className="relative w-full h-1 bg-white bg-opacity-10 overflow-hidden rounded-full">
          <div className="absolute left-0 inset-y-0 w-[40px] bg-white" />
        </div>

        <div className="flex items-center justify-between leading-tight opacity-60">
          <div>1:10</div>
          <div>4:34</div>
        </div>
      </article>

      <footer className="py-8 w-full max-w-[400px] space-x-6 flex items-center justify-between">
        <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
          <MoreIcon />
        </div>
        <div className="flex items-center space-x-6">
          <div className="w-12 h-12">
            <PreviousIcon />
          </div>
          <div className="w-12 h-12">
            <PlayIcon />
          </div>
          <div className="w-12 h-12">
            <NextIcon />
          </div>
        </div>
        <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
          <SpeakerIcon />
        </div>
      </footer>
    </section>
  );
}

export default PlayerView;
