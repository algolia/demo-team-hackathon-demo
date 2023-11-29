import { useStats } from 'react-instantsearch'
import CodeRevealButton from '@/components/CodeRevealButton'

const statsCode = `
import React from 'react';
import { useStats } from 'react-instantsearch';

function CustomStats() {
  const { nbHits, processingTimeMS, query } = useStats();

  return (
    <span>
      {nbHits.toLocaleString()} results found in{' '}
      {processingTimeMS.toLocaleString()}ms for <q>{query}</q>.
    </span>
  );
}`

function CustomStats() {
  const { nbHits, processingTimeMS, query } = useStats()

  return (
    <div className="flex items-center gap-1 text-xs">
      <p>
        <span className="font-bold text-algolia-xenonDark">{nbHits.toLocaleString()}</span> results found in{' '}
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
      <CodeRevealButton jsCode={statsCode} openDirection="right" />
    </div>
  )
}

export default CustomStats
