import { songs } from "../utils/data";
import Track from "./Track";

export default function Tracks({ songs }) {
  return (
    <>
      {songs &&
        songs.map((song) => {
          return <Track song={song} key={song.id} />;
        })}
    </>
  );
}
