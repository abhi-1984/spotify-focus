import React, { useEffect, useState } from "react";
import useSpotify from "../hooks/useSpotify";
import PlayerView from "../components/PlayerView";
import ContentView from "../components/ContentView";
import { getSession } from "next-auth/react";
import { usePalette } from "react-palette";

export default function Home({ session }) {
  const [topTracks, setTopTracks] = useState([]);

  const { data, loading, error } = usePalette(
    "https://i1.sndcdn.com/artworks-000063664660-wum57a-t500x500.jpg"
  );

  console.log("colors data is ", data);

  //hooks
  const spotifyApi = useSpotify();
  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      console.log("i am here???");
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
    <main
      className={`relative bg-black bg-opacity-70 text-white grid grid-cols-page min-h-screen`}
    >
      <PlayerView />
      <ContentView topTracks={topTracks} />

      <div
        className="absolute inset-0  w-full h-full"
        style={{
          zIndex: -1,
          background: `linear-gradient(to right,  ${data.darkMuted} 0%, #000 100%)`,
        }}
      />
    </main>
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
