import CurrentRefinements from './refinementsComponents/CurrentRefinements'
import ClearRefinements from './refinementsComponents/ClearRefinements'
import RefinementsSelector from './refinementsComponents/RefinementsSelector'

const Facets = () => (
  <div className="w-2/3 p-4 rounded-card m-auto">
    <div className="flex justify-between pb-4">
      <div className="flex flex-wrap justify-start gap-2 items-center w-full">
        <CurrentRefinements />
        <CurrentRefinements />
        <CurrentRefinements />
        <CurrentRefinements />
        <CurrentRefinements />
        <CurrentRefinements />
        <CurrentRefinements />
        <CurrentRefinements />
        <CurrentRefinements />
        <CurrentRefinements />
      </div>
      <div className="flex justify-start items-start">
        <ClearRefinements />
      </div>
    </div>
    <div className="flex gap-2">
      <RefinementsSelector />
      <RefinementsSelector />
      <RefinementsSelector />
      <RefinementsSelector />
      <RefinementsSelector />
      {/* <div className="border-r-[1px] border-gray-200 p-2 flex justify-between w-1/5 items-start cursor-pointer">
        <p className="text-base font-medium text-colorBp-refinementBadgeTextColor">
          Brand
        </p>
        <ChevronDown />
      </div>
      <div className="border-r-[1px] border-gray-200 p-2 flex justify-between w-1/5 items-start cursor-pointer">
        <p className="text-base font-medium text-colorBp-refinementBadgeTextColor">
          Brand
        </p>
        <ChevronDown />
      </div>
      <div className="border-r-[1px] border-gray-200 p-2 flex justify-between w-1/5 cursor-pointer">
        <p className="text-base font-medium text-colorBp-refinementBadgeTextColor">
          Brand
        </p>
        <ChevronDown />
      </div>
      <div className="p-2 flex justify-between w-1/5 cursor-pointer border-r-[1px] border-gray-200">
        <p className="text-base font-medium text-colorBp-refinementBadgeTextColor">
          Brand
        </p>
        <ChevronDown />
      </div>
      <div className="p-2 flex justify-between w-1/5 cursor-pointer">
        <p className="text-base font-medium text-colorBp-refinementBadgeTextColor">
          Brand
        </p>
        <ChevronDown />
      </div> */}
    </div>
  </div>
)

export default Facets
