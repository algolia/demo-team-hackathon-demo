import { ChevronDown, ChevronUp } from 'react-feather'
import { useSortBy, UseSortByProps } from 'react-instantsearch'
import { useComponentVisible } from '@/hooks/useComponentVisible'

import CodeRevealButton from '@/components/CodeRevealButton'

const sortByCode = `
import React from 'react';
import { useSortBy } from 'react-instantsearch';

function SortBy(props) {
  const { currentRefinement, options, refine } = useSortBy(props);

  return (
    <select
      onChange={(event) => refine(event.target.value)}
      value={currentRefinement}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
`

const CustomSortBy = (props: UseSortByProps) => {
  const { currentRefinement, options, refine } = useSortBy(props)

  const { ref, setIsComponentVisible, isComponentVisible } =
    useComponentVisible(false)

  return (
    <div
      className="relative z-30 items-start w-1/5 p-2 border border-gray-200 rounded cursor-pointer"
      ref={ref}
    >
      <div
        className="flex justify-between"
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        <p className="text-base font-medium text-colorBp-refinementBadgeTextColor">
          {currentRefinement === 'mate_team_off_white'
            ? 'Featured'
            : currentRefinement === 'mate_team_off_white_price_asc'
            ? 'Price (asc)'
            : 'Price (desc)'}
        </p>
        <div className="flex items-center gap-2">
          <CodeRevealButton jsCode={sortByCode} />
          {isComponentVisible ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>
      <div
        className={`absolute bg-white w-full p-2 left-0 top-12 transition-opacity  duration-300 ${
          isComponentVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {options.map((option, index: number) => {
          return (
            <li
              onClick={() => {
                refine(option.value)
              }}
              key={`${option.value}-${index}`}
              className={`whitespace-nowrap rounded-button p-3 text-sm leading-none transition-all last:mb-0 ${
                currentRefinement === option.value
                  ? 'bg-colorBp-700 text-colorBp-white'
                  : 'cursor-pointer bg-colorBp-100 text-colorBp-800 hover:bg-colorBp-100'
              }`}
            >
              <p className="font-semibold leading-none">{option.label}</p>
            </li>
          )
        })}
      </div>
    </div>
  )
}

export default CustomSortBy
