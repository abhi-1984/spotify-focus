import Image from "next/image";
import React from "react";
import { formatTime } from "../lib/time";

function SongView({ song }) {
  return (
    <article className="p-4 flex items-center justify-between cursor-pointer hover:bg-white hover:bg-opacity-5 rounded-lg">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gray-200 overflow-hidden">
          <Image
            width="48px"
            height="48px"
            src={song.album.images[0].url}
            alt={song.name}
          />
        </div>
        <div>
          <p className="text-lg leading-snug">{song.name}</p>
          <p className="opacity-60 text-sm leading-relaxed">
            {" "}
            {song.album.artists[0].name}
          </p>
        </div>
      </div>
      <p className="text-sm opacity-40">{formatTime(song.duration_ms)}</p>
    </article>
  );
}

export default SongView;
