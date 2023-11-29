import algoliasearch from 'algoliasearch/lite'
import { BaseHit } from 'instantsearch.js/es/types/results'
import {
  InstantSearch,
  SearchBox,
  useHits,
  UseHitsProps,
} from 'react-instantsearch'
import Homepage from '@/pages/Homepage'

// To test Hits
function CustomHits(props: UseHitsProps<BaseHit> | undefined) {
  const { hits } = useHits(props)
  console.log(hits)

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
    'Q6N17K5UHW',
    '5b40da503669ba0a30f39a990ff80a65'
  )

  return (
    <InstantSearch searchClient={searchClient} indexName="electronics_ns">
      <p className="text-2xl">Hello Mate Team</p>
      <SearchBox />
      <CustomHits />
    </InstantSearch>
  )
}

export default App
