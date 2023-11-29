import algoliasearch from 'algoliasearch/lite'

import { InstantSearch } from 'react-instantsearch'
import Homepage from '@/pages/Homepage'

// To test replace with our own
function App() {
  const searchClient = algoliasearch(
    'Q6N17K5UHW',
    '5b40da503669ba0a30f39a990ff80a65'
  )

  return (
    <InstantSearch searchClient={searchClient} indexName="electronics_ns">
      <p className="text-2xl">Hello Mate Team</p>
      <Homepage />
    </InstantSearch>
  )
}

export default App
