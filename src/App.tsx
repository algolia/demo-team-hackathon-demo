
import algoliasearch from "algoliasearch/lite";
import "@algolia/satellite/satellite.min.css";
import { Configure, InstantSearch } from "react-instantsearch";
import Homepage from "@/pages/Homepage";
import { RecoilRoot } from "recoil";


function App() {
  const searchClient = algoliasearch(
    'O7KBN4GOML',
    '5fd33be39e68c5459847843dbda5fa7c'
  )

  return (
    <RecoilRoot>
      <InstantSearch
        searchClient={searchClient}
        indexName="mate_team_off_white"
      >
      <Configure hitsPerPage={12} />
        <Homepage />
      </InstantSearch>
    </RecoilRoot>
  )
}

export default App
