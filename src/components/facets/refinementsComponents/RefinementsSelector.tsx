import { useComponentVisible } from '@/hooks/useComponentVisible'

import CodeRevealButton from '@/components/CodeRevealButton'

import { ChevronDown, ChevronUp } from 'react-feather'
import { UseRefinementListProps, useRefinementList } from 'react-instantsearch'

const RefinementsSelector = ({
  label,
  jsCode,
  openDirection,
  ...props
}: UseRefinementListProps & { label: string; jsCode: string; openDirection?: 'left' | 'right' | 'center' | 'upLeft' }) => {
  const { items, refine } = useRefinementList(props)

  const handleItemClick = (value: string) => {
    refine(value)
  }

  const { ref, setIsComponentVisible, isComponentVisible } = useComponentVisible(false)

  return (
    <div
      className="relative items-start py-1.5 pl-3 pr-1.5 border border-gray-200 rounded cursor-pointer"
      onClick={() => setIsComponentVisible(!isComponentVisible)}
      ref={ref}
    >
      <div className="flex items-center gap-1 justify-between">
        <p className="text-xs font-semibold text-colorBp-refinementBadgeTextColor">{label}</p>
        <div className="flex items-center gap-4">
          {isComponentVisible ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          <CodeRevealButton jsCode={jsCode} openDirection={openDirection} />
        </div>
      </div>
      <div
        className={`absolute bg-white w-full z-30 p-2 left-0 top-full mt-1 border shadow-md rounded-md transition-opacity duration-300 ${
          isComponentVisible ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
        }`}
      >
        {items.map((item) => (
          <p
            key={item.label}
            onClick={() => handleItemClick(item.value)}
            className={`text-xs ${item?.isRefined ? 'bg-black text-white' : 'hover:bg-gray-200'} p-2`}
          >
            {item.label}
          </p>
        ))}
      </div>
    </div>
  )
}

export default RefinementsSelector
