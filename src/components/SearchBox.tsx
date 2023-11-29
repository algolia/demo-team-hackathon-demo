import { useState } from "react";
import { useSearchBox } from "react-instantsearch";
import CodeRevealButton from "./CodeRevealButton";

const searchboxCode = `
  import React from 'react';
  import algoliasearch from 'algoliasearch/lite';
  import { InstantSearch, SearchBox } from 'react-instantsearch';

  const searchClient = algoliasearch('RSBCBF0EG8', '93d4799a0a09b81f450bfc2a2cbcb0f8');

  function App() {
    return (
      <InstantSearch indexName="instant_search" searchClient={searchClient}>
        <SearchBox />
      </InstantSearch>
    );
  }
`;

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
      className={`flex w-full border pl-4 md:p-1.5 md:pl-4 rounded ${
        isFocused
          ? "border-neutral-400 ring-1 ring-inset ring-neutral-800"
          : "border-x-transparent border-y-slate-300 md:border-neutral-400"
      }`}
    >
      <input
        className="w-full py-2 text-sm leading-none text-neutral-800 focus:outline-none"
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
      <CodeRevealButton jsCode={searchboxCode} />
    </div>
  );
};

export default SearchBox;
