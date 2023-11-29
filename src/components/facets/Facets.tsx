import CurrentRefinements from './refinementsComponents/CurrentRefinements'
import ClearRefinements from './refinementsComponents/ClearRefinements'
import RefinementsSelector from './refinementsComponents/RefinementsSelector'

const Facets = () => (
  <div className="w-2/3 p-4 rounded-lg m-auto">
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
    <div className="flex gap-2 w-full">
      <RefinementsSelector />
      <RefinementsSelector />
      <RefinementsSelector />
      <RefinementsSelector />
      <RefinementsSelector />
    </div>
  </div>
)

export default Facets
