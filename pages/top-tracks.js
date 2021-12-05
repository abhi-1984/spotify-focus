import { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";
import Tracks from "../components/Tracks";
import useSpotify from "../hooks/useSpotify";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Player from "../components/Player";

export default function TopTracks({ session }) {
  const spotifyApi = useSpotify();

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
    }
  }, [session, spotifyApi]);

  console.log("top tracks are ", topTracks);

  return (
    <>
      <Nav />
      <Sidebar />
      <main className="">
        <section className="max-w-[520px] w-full mx-auto mt-[96px]">
          <div className="p-5 w-full">
            <h1 className="text-3xl leading-none font-bold tracking-tight mb-5">
              Top Tracks
            </h1>
            <div className="border-b border-solid border-black border-opacity-5" />
          </div>
          <Tracks songs={topTracks} />
        </section>
      </main>
      <Player />
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
