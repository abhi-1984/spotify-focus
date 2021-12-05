import { useRecoilState } from "recoil";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import { formatTime } from "../lib/time";
import useSpotify from "../hooks/useSpotify";
import Image from "next/image";

export default function Track({ song }) {
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setPlaying] = useRecoilState(isPlayingState);
  const spotifyAPI = useSpotify();

  const PlayTrack = (song) => {
    setCurrentTrackId(song.id);
    setPlaying(true);
    spotifyAPI
      .play({
        uris: [song.uri],
      })
      .then(
        function () {
          console.log("Playback started");
        },
        function (err) {
          //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
          console.log("Something went wrong!", err);
        }
      );
  };

  return (
    <article
      onClick={() => PlayTrack(song)}
      className="p-5 w-full  rounded-lg flex items-center justify-start cursor-pointer transition duration-200 hover:bg-gray-100 space-x-4"
    >
      <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gray-200 overflow-hidden">
        <Image
          width="48px"
          height="48px"
          src={song.album.images[0].url}
          alt={song.name}
        />
      </div>
      <div className="flex-1 overflow-clip overflow-hidden">
        <p className="text-lg w-11/12 font-medium leading-normal whitespace-nowrap overflow-clip truncate overflow-hidden ...">
          {song.name}
        </p>
        <p className="text-sm opacity-60">{song.album.artists[0].name}</p>
      </div>
      <p className="text-lg opacity-40 flex-shrink-0">
        {formatTime(song.duration_ms)}
      </p>
    </article>
  );
}
