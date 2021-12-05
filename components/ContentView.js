import { Tab } from "@headlessui/react";
import SongView from "./SongView";

export default function ContentView({ topTracks }) {
  //classes
  const tabs = ["Top Tracks", "For You", "Liked", "Recents"];

  return (
    <aside className="bg-white bg-opacity-5">
      <Tab.Group>
        <Tab.List className="text-lg px-8 h-[88px] flex items-center justify-between">
          {tabs.map((tab) => {
            return (
              <Tab
                key={tab}
                className={({ selected }) =>
                  selected ? "opacity-100" : "opacity-60"
                }
              >
                {tab}
              </Tab>
            );
          })}
        </Tab.List>
        <Tab.Panels className="px-4 pb-6 scroll-area overflow-y-auto">
          <Tab.Panel>
            {topTracks &&
              topTracks.map((track) => {
                return <SongView key={track.id} song={track} />;
              })}
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
          <Tab.Panel>Content 4</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </aside>
  );
}
