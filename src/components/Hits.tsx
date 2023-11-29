import { useHits, UseHitsProps } from 'react-instantsearch'
import { BaseHit } from 'instantsearch.js/es/types/results'

// To test Hits
function CustomHits(props: UseHitsProps<BaseHit> | undefined) {
  const { hits } = useHits(props)
  return (
    <div>
      {hits.map((hit) => (
        <div key={hit.objectID}>
          <p className="text-lg text-cyan-500">{hit?.name as undefined}</p>
        </div>
      ))}
    </div>
  )
}

export default CustomHits
