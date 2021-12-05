import { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";
import Tracks from "../components/Tracks";
import useSpotify from "../hooks/useSpotify";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Player from "../components/Player";
import { useRecoilState } from "recoil";
import { currentTrackState } from "../atoms/songAtom";

export default function TopTracks({ session }) {
  const spotifyApi = useSpotify();
  const [currentTrack, setCurrentTrack] = useRecoilState(currentTrackState);

  const [topTracks, setTopTracks] = useState(null);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getMyTopTracks().then(
        function (data) {
          setTopTracks(data.body.items);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );

      if (!currentTrack) {
        spotifyApi.getMyCurrentPlayingTrack().then(
          function (data) {
            if (data) {
              setCurrentTrack(data.body?.item);
            }
          },
          function (err) {
            console.log("Something went wrong!", err);
          }
        );
      }
    }
  }, [session, spotifyApi]);

  console.log("top tracks are ", topTracks);

  return (
    <>
      <Nav />
      <main className="mt-[96px] grid page-content overflow-hidden grid-cols-page gap-10 px-10 py-5">
        <Sidebar />

        <Tracks title={"Top Tracks"} songs={topTracks} />

        {currentTrack && <Player />}
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
