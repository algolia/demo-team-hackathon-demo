import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'
import { useSortBy, UseSortByProps } from 'react-instantsearch'

type OptionType = {
  value: string
  label: string
}

const CustomSortBy = (props: UseSortByProps) => {
  const { currentRefinement, options, refine } = useSortBy(props)
  const [isOpened, setIsOpened] = useState<boolean>(false)

  return (
    <div className="border-[1px] border-gray-200 p-2 w-1/5 items-start cursor-pointer relative">
      <div
        className="flex justify-between"
        onClick={() => setIsOpened(!isOpened)}
      >
        <p className="text-base font-medium text-colorBp-refinementBadgeTextColor">
          {currentRefinement.label}
        </p>
        {isOpened ? <ChevronUp /> : <ChevronDown />}
      </div>
      <div
        className={`absolute bg-white w-full p-2 left-0 top-12 transition-opacity duration-300 ${
          isOpened ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {options.map((optionString: string, index: number) => {
          const option: OptionType = JSON.parse(optionString)
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
