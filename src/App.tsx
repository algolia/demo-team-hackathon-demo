import algoliasearch from 'algoliasearch/lite'
import '@algolia/satellite/satellite.min.css'
import { Configure, InstantSearch } from 'react-instantsearch'
import Homepage from '@/pages/Homepage'
import { RecoilRoot } from 'recoil'
import { indexAtom } from './recoil/neuralToggle'
import { useRecoilValue } from 'recoil'

const searchClient = algoliasearch('O7KBN4GOML', '5fd33be39e68c5459847843dbda5fa7c')

const Main = () => {
  const index = useRecoilValue(indexAtom)
  return (
    <InstantSearch searchClient={searchClient} indexName={index.name}>
      <Configure hitsPerPage={12} getRankingInfo />
      <Homepage />
    </InstantSearch>
  )
}

function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  )
}

export default App
