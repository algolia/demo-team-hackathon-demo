import { useComponentVisible } from '@/hooks/useComponentVisible'

import CodeRevealButton from '@/components/CodeRevealButton'

import { ChevronDown, ChevronUp } from 'react-feather'
import { UseRefinementListProps, useRefinementList } from 'react-instantsearch'

const RefinementsSelector = ({ label, jsCode, ...props }: UseRefinementListProps & { label: string; jsCode: string }) => {
  const { items, refine } = useRefinementList(props)

  const handleItemClick = (value: string) => {
    refine(value)
  }

  const { ref, setIsComponentVisible, isComponentVisible } = useComponentVisible(false)

  return (
    <div
      className="relative items-start p-2 border border-gray-200 rounded cursor-pointer"
      onClick={() => setIsComponentVisible(!isComponentVisible)}
      ref={ref}
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-colorBp-refinementBadgeTextColor">{label}</p>
        <div className="flex items-center gap-4">
          {isComponentVisible ? <ChevronUp /> : <ChevronDown />}
          <CodeRevealButton jsCode={jsCode} openDirection="center" />
        </div>
      </div>
      <div
        className={`absolute bg-white w-full z-30 p-2 left-0 top-12 transition-opacity duration-300 ${
          isComponentVisible ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
        }`}
      >
        {items.map((item) => (
          <p
            key={item.label}
            onClick={() => handleItemClick(item.value)}
            className={`text-sm ${item?.isRefined ? 'bg-black text-white' : 'hover:bg-gray-200'} p-2`}
          >
            {item.label}
          </p>
        ))}
      </div>
    </div>
  )
}

export default RefinementsSelector
