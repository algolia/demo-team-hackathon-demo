import { useComponentVisible } from '@/hooks/useComponentVisible'
import { ChevronDown, ChevronUp } from 'react-feather'
import { UseRefinementListProps, useRefinementList } from 'react-instantsearch'

const RefinementsSelector = ({
  label,
  ...props
}: UseRefinementListProps & { label: string }) => {
  const { items, refine } = useRefinementList(props)

  const handleItemClick = (value: string) => {
    refine(value)
  }

  const { ref, setIsComponentVisible, isComponentVisible } =
    useComponentVisible(false)

  return (
    <div
      className="relative z-20 items-start w-1/5 p-2 border border-gray-200 rounded cursor-pointer"
      onClick={() => setIsComponentVisible(!isComponentVisible)}
      ref={ref}
    >
      <div className="flex justify-between">
        <p className="text-base font-medium text-colorBp-refinementBadgeTextColor">
          {label}
        </p>
        {isComponentVisible ? <ChevronUp /> : <ChevronDown />}
      </div>
      <div
        className={`absolute bg-white w-full p-2 left-0 top-12 transition-opacity duration-300 ${
          isComponentVisible ? 'opacity-100' : 'opacity-0'
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
