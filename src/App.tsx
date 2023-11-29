import algoliasearch from "algoliasearch/lite";
import "@algolia/satellite/satellite.min.css";
import { Configure, InstantSearch } from "react-instantsearch";
import Homepage from "@/pages/Homepage";

// To test replace with our own
function App() {
  const searchClient = algoliasearch(
    "Q6N17K5UHW",
    "5b40da503669ba0a30f39a990ff80a65"
  );

  return (
    <RecoilRoot>
      <InstantSearch searchClient={searchClient} indexName="electronics_ns">
        <Configure hitsPerPage={12} />
        <Homepage />
      </InstantSearch>
    </RecoilRoot>
  );
}

export default App;
