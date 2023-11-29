import { useStats } from 'react-instantsearch'

function CustomStats() {
  const { nbHits, processingTimeMS, query } = useStats()

  return (
    <div className="flex items-center gap-1 text-xs">
      <p>
        <span className="font-bold text-algolia-xenonDark">
          {nbHits.toLocaleString()}
        </span>{' '}
        results found in{' '}
      </p>
      <p>
        {processingTimeMS.toLocaleString()}ms
        {query ? (
          <span>
            {' '}
            for <q className="font-bold text-algolia-xenonDark">{query}</q>
          </span>
        ) : (
          ''
        )}
      </p>
    </div>
  )
}

export default CustomStats
