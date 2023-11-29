import algoliasearch from 'algoliasearch/lite'
import { BaseHit } from 'instantsearch.js/es/types/results'
import {
  InstantSearch,
  SearchBox,
  useHits,
  UseHitsProps,
} from 'react-instantsearch'

import Facets from './components/facets/Facets'
import Homepage from './pages/Homepage'

// To test Hits
function CustomHits(props: UseHitsProps<BaseHit> | undefined) {
  const { hits } = useHits(props)

  return (
    <div>
      <Homepage />
      {hits.map((hit) => (
        <div key={hit.objectID}>
          <p className="text-lg text-cyan-500">{hit?.name as undefined}</p>
        </div>
      ))}
    </div>
  )
}

// To test replace with our own
function App() {
  const searchClient = algoliasearch(
    'O7KBN4GOML',
    '5fd33be39e68c5459847843dbda5fa7c'
  )

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="mate_team_off_white_ns"
    >
      <p className="text-2xl">Hello Mate Team</p>
      <Facets />
      <SearchBox />
      <CustomHits />
      <Homepage />
    </InstantSearch>
  )
}

export default App
