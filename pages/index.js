import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Tracks from "../components/Tracks";
import useSpotify from "../hooks/useSpotify";

export default function Home() {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [topTracks, setTopTracks] = useState(null);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getMyTopTracks().then(
        function (data) {
          let topTracks = data.body.items;
          console.log(topTracks);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );
    }
  }, [session, spotifyApi]);

  console.log("for you tracks are ");

  return (
    <main className="">
      <section className="max-w-[520px] mx-auto mt-[96px]">
        <Tracks />
      </section>
    </main>
  );
}
