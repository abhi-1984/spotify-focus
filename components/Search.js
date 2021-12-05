import { SearchIcon } from "./Icons";

export default function Search() {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 max-w-[400px] h-12 w-full rounded-lg bg-white bg-opacity-5">
      <input
        type="text"
        className="w-full h-full bg-transparent p-3 focus:outline-none text-lg"
        placeholder="Search Songs, Artists"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <SearchIcon />
      </div>
    </div>
  );
}
