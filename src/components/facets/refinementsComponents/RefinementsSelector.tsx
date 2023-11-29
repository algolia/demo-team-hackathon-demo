import { ChevronDown } from 'react-feather'

const RefinementsSelector = () => (
  <div className="border-[1px] border-gray-200 p-2 flex justify-between w-1/5 items-start cursor-pointer">
    <p className="text-base font-medium text-colorBp-refinementBadgeTextColor">
      Brand
    </p>
    <ChevronDown />
  </div>
)

export default RefinementsSelector
