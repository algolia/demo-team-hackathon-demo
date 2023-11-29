import CurrentRefinements from './refinementsComponents/CurrentRefinements'
import ClearRefinements from './refinementsComponents/ClearRefinements'
import RefinementsSelector from './refinementsComponents/RefinementsSelector'
import {
  CurrentRefinementsProps,
  useCurrentRefinements,
} from 'react-instantsearch'

const Facets = (props: CurrentRefinementsProps) => {
  const { items, refine } = useCurrentRefinements(props)
  
  const brandJsCode = `
  import React from 'react';
  import algoliasearch from 'algoliasearch/lite';
  import { InstantSearch, RefinementList } from 'react-instantsearch';

  const searchClient = algoliasearch('O7KBN4GOML', '5fd33be39e68c5459847843dbda5fa7c');

  function App() {
    return (
      <InstantSearch indexName="instant_search" searchClient={searchClient}>
        <RefinementList attribute="brand" />
      </InstantSearch>
    );
}
`;

const genderJsCode = `
import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, RefinementList } from 'react-instantsearch';

const searchClient = algoliasearch('O7KBN4GOML', '5fd33be39e68c5459847843dbda5fa7c');

function App() {
  return (
    <InstantSearch indexName="instant_search" searchClient={searchClient}>
      <RefinementList attribute="gender" />
    </InstantSearch>
  );
}
`


const materialJsCode = `
import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, RefinementList } from 'react-instantsearch';

const searchClient = algoliasearch('O7KBN4GOML', '5fd33be39e68c5459847843dbda5fa7c');

function App() {
  return (
    <InstantSearch indexName="instant_search" searchClient={searchClient}>
      <RefinementList attribute="material" />
    </InstantSearch>
  );
}
`

const ageJsCode = `
import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, RefinementList } from 'react-instantsearch';

const searchClient = algoliasearch('O7KBN4GOML', '5fd33be39e68c5459847843dbda5fa7c');

function App() {
  return (
    <InstantSearch indexName="instant_search" searchClient={searchClient}>
      <RefinementList attribute="age_group" />
    </InstantSearch>
  );
}
`

  return (
    <div className="w-2/3 p-4 rounded-lg m-auto">
      <div className="flex justify-between pb-4">
        <div className="flex flex-wrap justify-start gap-2 items-center w-full">
          {items.map((item) => (
            <CurrentRefinements item={item} refine={refine} />
          ))}
        </div>
        {items.length > 0 && (
          <div className="flex justify-start items-start">
            <ClearRefinements />
          </div>
        )}
      </div>
      <div className="flex gap-2 w-full">
        <RefinementsSelector attribute="brand" label="Brand" jsCode={brandJsCode}/>
        <RefinementsSelector attribute="gender" label="Gender" jsCode={genderJsCode}/>
        <RefinementsSelector attribute="material" label="Material" jsCode={materialJsCode}/>
        <RefinementsSelector attribute="age_group" label="Age" jsCode={ageJsCode}/>
      </div>
    </div>
  )
}

export default Facets
