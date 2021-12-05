import * as ScrollArea from "@radix-ui/react-scroll-area";
import { songs } from "../utils/data";
import Track from "./Track";

export default function Tracks({ songs, title }) {
  return (
    <section className="max-w-[520px] mx-auto">
      <div className="px-5 w-full">
        <h1 className="text-3xl leading-none font-bold tracking-tight mb-5">
          {title}
        </h1>
        <div className="border-b border-solid border-black border-opacity-5" />
      </div>
      <div className="overflow-y-auto scroll-area">
        {songs &&
          songs.map((song) => {
            return (
              <ScrollArea.Root>
                <ScrollArea.Viewport>
                  <Track song={song} key={song.id} />
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="vertical">
                  <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
              </ScrollArea.Root>
            );
          })}
      </div>
    </section>
  );
}
