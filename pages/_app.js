import "../global.css";
import "../fonts.css";
import "tailwindcss/tailwind.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Player from "../components/Player";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
