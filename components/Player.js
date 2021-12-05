import { NextIcon, PlayIcon, PreviousIcon } from "./Icons";

export default function Player() {
  const iconWrapperClass =
    "w-8 h-8 flex items-center justify-center cursor-pointer";

  return (
    <footer className="w-[320px] fixed right-10 bottom-0 p-3 rounded-t-md bg-white shadow-subtle flex items-center justify-between">
      <div className="space-x-2 flex items-center">
        <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
        <p>Origin</p>
      </div>

      <div className="flex items-center space-x-3">
        <div className={iconWrapperClass}>
          <PreviousIcon />
        </div>
        <div className={iconWrapperClass}>
          <PlayIcon />
        </div>
        <div className={iconWrapperClass}>
          <NextIcon />
        </div>
      </div>
    </footer>
  );
}
