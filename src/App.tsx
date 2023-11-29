
import algoliasearch from "algoliasearch/lite";
import "@algolia/satellite/satellite.min.css";
import { BaseHit } from "instantsearch.js/es/types/results";
import { InstantSearch, useHits, UseHitsProps } from "react-instantsearch";
import Homepage from "@/pages/Homepage";
import { RecoilRoot } from "recoil";

// To test replace with our own
function App() {
  const searchClient = algoliasearch(
    'Q6N17K5UHW',
    '5b40da503669ba0a30f39a990ff80a65'
  )

  return (
    <RecoilRoot>
      <InstantSearch searchClient={searchClient} indexName="electronics_ns">
        <CustomHits />
      </InstantSearch>
    </RecoilRoot>
  );
}

export default App
