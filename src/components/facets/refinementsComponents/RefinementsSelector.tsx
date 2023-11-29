import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'
import { UseRefinementListProps, useRefinementList } from 'react-instantsearch'

const RefinementsSelector = ({
  label,
  ...props
}: UseRefinementListProps & { label: string }) => {
  const { items, refine } = useRefinementList(props)
  const [isOpened, setIsOpened] = useState<boolean>(false)

  const handleItemClick = (value: string) => {
    refine(value)
    setIsOpened(false)
  }

  return (
    <div
      className="border-[1px] border-gray-200 p-2 w-1/5 items-start cursor-pointer relative"
      onClick={() => setIsOpened(!isOpened)}
    >
      <div className="flex justify-between">
        <p className="text-base font-medium text-colorBp-refinementBadgeTextColor">
          {label}
        </p>
        {isOpened ? <ChevronUp /> : <ChevronDown />}
      </div>
      <div
        className={`absolute bg-white w-full p-2 left-0 top-12 transition-opacity duration-300 ${
          isOpened ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {items.map((item) => (
          <p
            key={item.label}
            onClick={() => handleItemClick(item.value)}
            className={`${
              item?.isRefined ? 'bg-black text-white' : 'hover:bg-gray-200'
            } p-2`}
          >
            {item.label}
          </p>
        ))}
      </div>
    </div>
  )
}

export default RefinementsSelector
