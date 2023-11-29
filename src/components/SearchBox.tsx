import { useState } from "react";
import { useSearchBox } from "react-instantsearch";

const SearchBox = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const { query, refine } = useSearchBox();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const addSearch = (query: string) => {
    refine(query);
  };

  return (
    <div
      className={`flex w-full border p-2 pl-4 md:p-1.5 md:pl-4 rounded ${
        isFocused
          ? "border-neutral-400 ring-1 ring-inset ring-neutral-800"
          : "border-x-transparent border-y-slate-300 md:border-neutral-400"
      }`}
    >
      <input
        className="w-full text-sm leading-none text-neutral-800 focus:outline-none"
        placeholder={"Search here..."}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={query}
        onChange={(e) => {
          refine(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addSearch(query);
          }
        }}
      />
    </div>
  );
};

export default SearchBox;
