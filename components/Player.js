import Image from "next/image";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentTrackState } from "../atoms/songAtom";
import useSpotify from "../hooks/useSpotify";
import { NextIcon, PlayIcon, PreviousIcon } from "./Icons";

export default function Player() {
  const [currentTrack, setCurrentTrack] = useRecoilState(currentTrackState);
  const spotifyAPI = useSpotify();

  console.log("current track in player ", currentTrack);

  useEffect(() => {
    spotifyAPI.getMyDevices().then(
      function (data) {
        let availableDevices = data.body.devices;
        console.log(availableDevices);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  }, [spotifyAPI]);

  return (
    <section className="relative w-full flex items-center justify-center">
      <aside className="sticky top-[136px] w-full">
        <div className="cover-image-wrapper max-w-[70%]">
          <Image
            layout="fill"
            className="rounded-lg cover-image overflow-hidden"
            quality={100}
            src={currentTrack.album.images[0].url}
            alt={currentTrack.name}
          />
        </div>
        <div>
          <p className="font-bold">{currentTrack.name}</p>
          <p className="text-sm opacity-60">
            {currentTrack.album.artists[0].name}
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 flex items-center justify-center cursor-pointer">
            <PreviousIcon />
          </div>
          <div className="w-6 h-6 flex items-center justify-center cursor-pointer">
            <PlayIcon />
          </div>
          <div className="w-6 h-6 flex items-center justify-center cursor-pointer">
            <NextIcon />
          </div>
        </div>
      </aside>
    </section>
  );
}
