import { useStats } from "react-instantsearch";
import CodeRevealButton from "@/components/CodeRevealButton";

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
}`;

function CustomStats() {
  const { nbHits, processingTimeMS } = useStats();

  return (
    <div className="flex items-center gap-1 text-xs">
      <p>
        <span className="font-bold text-algolia-xenonDark">
          {nbHits.toLocaleString()}
        </span>{" "}
        results in{" "}
      </p>
      <p className="font-bold">{processingTimeMS.toLocaleString()}ms</p>
      <div className="ml-1">
        <CodeRevealButton jsCode={statsCode} openDirection="left" />
      </div>
    </div>
  );
}

export default CustomStats;
