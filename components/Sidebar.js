import { useRecoilState } from "recoil";
import { tabState } from "../atoms/tabItem";
import { useRouter } from "next/router";

export default function Sidebar() {
  const tabClass = `text-xl leading-normal cursor-pointer`;
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useRecoilState(tabState);
  const tabs = [
    {
      id: 1,
      label: "For You",
      path: "/",
    },
    {
      id: 2,
      label: "Top Tracks",
      path: "/top-tracks",
    },
    {
      id: 3,
      label: "Favorites",
      path: "/favorites",
    },
    {
      id: 4,
      label: "Recently Played",
      path: "/recently-played",
    },
  ];

  const handleTabSelection = (tab) => {
    setSelectedTab(tab.label);
    router.push(`${tab.path}`);
  };

  return (
    <section className="relative">
      <aside className="sticky top-0 flex flex-col items-start justify-end space-y-6">
        {tabs.map((tab) => {
          return (
            <div
              key={tab.id}
              className={`${tabClass} ${
                selectedTab === tab.label
                  ? "opacity-100 font-medium"
                  : "opacity-60"
              }`}
              onClick={() => handleTabSelection(tab)}
            >
              <p>{tab.label}</p>
            </div>
          );
        })}
      </aside>
    </section>
  );
}
