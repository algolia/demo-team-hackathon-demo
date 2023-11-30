import CurrentRefinements from "./refinementsComponents/CurrentRefinements";
import ClearRefinements from "./refinementsComponents/ClearRefinements";
import RefinementsSelector from "./refinementsComponents/RefinementsSelector";
import {
  CurrentRefinementsProps,
  useCurrentRefinements,
} from "react-instantsearch";

const Facets = (props: CurrentRefinementsProps) => {
  const { items, refine } = useCurrentRefinements(props);

  const brandJsCode = `import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, RefinementList } from 'react-instantsearch';

const searchClient = algoliasearch('O7KBN4GOML', 'SEARCH_API_KEY');

function App() {
  return (
    <InstantSearch indexName="instant_search" searchClient={searchClient}>
      <RefinementList attribute="brand" />
    </InstantSearch>
  );
}
`;

  const genderJsCode = `import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, RefinementList } from 'react-instantsearch';

const searchClient = algoliasearch('O7KBN4GOML', 'SEARCH_API_KEY');

function App() {
  return (
    <InstantSearch indexName="instant_search" searchClient={searchClient}>
      <RefinementList attribute="gender" />
    </InstantSearch>
  );
}
`;

  const ageJsCode = `import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, RefinementList } from 'react-instantsearch';

const searchClient = algoliasearch('O7KBN4GOML', 'SEARCH_API_KEY');

function App() {
  return (
    <InstantSearch indexName="instant_search" searchClient={searchClient}>
      <RefinementList attribute="age" />
    </InstantSearch>
  );
}
`;

  return (
    <div className="flex flex-col gap-y-2">
      {items?.length > 0 && (
        <div className="flex justify-between">
          <div className="flex flex-wrap items-center justify-start w-full gap-2">
            {items.map((item) => (
              <CurrentRefinements item={item} refine={refine} />
            ))}
          </div>
          {items.length > 0 && (
            <div className="flex items-start justify-start">
              <ClearRefinements />
            </div>
          )}
        </div>
      )}
      <div className="flex w-full gap-2">
        <RefinementsSelector
          attribute="brand"
          label="Brand"
          openDirection={"center"}
          jsCode={brandJsCode}
        />
        <RefinementsSelector
          attribute="gender"
          label="Gender"
          openDirection={"center"}
          jsCode={genderJsCode}
        />
        {/* <RefinementsSelector attribute="material" label="Material" limit={5} openDirection={'center'} jsCode={materialJsCode} /> */}
        <RefinementsSelector
          attribute="age_group"
          label="Age"
          openDirection={"left"}
          jsCode={ageJsCode}
        />
      </div>
    </div>
  );
};

export default Facets;
