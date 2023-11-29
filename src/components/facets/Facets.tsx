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

// facet.tsx
import React from 'react';
import { useRefinementList } from 'react-instantsearch';

function CustomRefinementList(props) {
  const {
    items,
    refine,
    searchForItems,
    canToggleShowMore,
    isShowingMore,
    toggleShowMore,
  } = useRefinementList(props);

  return (
    <>
      <input
        type="search"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        maxLength={512}
        onChange={(event) => searchForItems(event.currentTarget.value)}
      />
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <label>
              <input
                type="checkbox"
                checked={item.isRefined}
                onChange={() => refine(item.value)}
              />
              <span>{item.label}</span>
              <span>({item.count})</span>
            </label>
          </li>
        ))}
      </ul>
      <button onClick={toggleShowMore} disabled={!canToggleShowMore}>
        {isShowingMore ? 'Show less' : 'Show more'}
      </button>
    </>
  );
}
`

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

// facet.tsx
import React from 'react';
import { useRefinementList } from 'react-instantsearch';

function CustomRefinementList(props) {
  const {
    items,
    refine,
    searchForItems,
    canToggleShowMore,
    isShowingMore,
    toggleShowMore,
  } = useRefinementList(props);

  return (
    <>
      <input
        type="search"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        maxLength={512}
        onChange={(event) => searchForItems(event.currentTarget.value)}
      />
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <label>
              <input
                type="checkbox"
                checked={item.isRefined}
                onChange={() => refine(item.value)}
              />
              <span>{item.label}</span>
              <span>({item.count})</span>
            </label>
          </li>
        ))}
      </ul>
      <button onClick={toggleShowMore} disabled={!canToggleShowMore}>
        {isShowingMore ? 'Show less' : 'Show more'}
      </button>
    </>
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

// facet.tsx
import React from 'react';
import { useRefinementList } from 'react-instantsearch';

function CustomRefinementList(props) {
  const {
    items,
    refine,
    searchForItems,
    canToggleShowMore,
    isShowingMore,
    toggleShowMore,
  } = useRefinementList(props);

  return (
    <>
      <input
        type="search"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        maxLength={512}
        onChange={(event) => searchForItems(event.currentTarget.value)}
      />
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <label>
              <input
                type="checkbox"
                checked={item.isRefined}
                onChange={() => refine(item.value)}
              />
              <span>{item.label}</span>
              <span>({item.count})</span>
            </label>
          </li>
        ))}
      </ul>
      <button onClick={toggleShowMore} disabled={!canToggleShowMore}>
        {isShowingMore ? 'Show less' : 'Show more'}
      </button>
    </>
  );
}

`

  return (
    <div className="w-2/3 p-4 m-auto rounded-lg">
      <div className="flex justify-between pb-4">
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
      <div className="flex w-full gap-2">
        <RefinementsSelector
          attribute="brand"
          label="Brand"
          jsCode={brandJsCode}
        />
        <RefinementsSelector
          attribute="gender"
          label="Gender"
          jsCode={genderJsCode}
        />
        <RefinementsSelector
          attribute="material"
          label="Material"
          jsCode={materialJsCode}
        />
        <RefinementsSelector
          attribute="age_group"
          label="Age"
          jsCode={ageJsCode}
        />
      </div>
    </div>
  )
}

export default Facets
