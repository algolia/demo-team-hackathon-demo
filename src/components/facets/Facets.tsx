import CurrentRefinements from './refinementsComponents/CurrentRefinements'
import ClearRefinements from './refinementsComponents/ClearRefinements'
import RefinementsSelector from './refinementsComponents/RefinementsSelector'
import {
  CurrentRefinementsProps,
  useCurrentRefinements,
} from 'react-instantsearch'

const Facets = (props: CurrentRefinementsProps) => {
  const { items, refine } = useCurrentRefinements(props)
  return (
    <div className="w-2/3 p-4 rounded-lg m-auto">
      <div className="flex justify-between pb-4">
        <div className="flex flex-wrap justify-start gap-2 items-center w-full">
          {items.map((item) => (
            <CurrentRefinements item={item} refine={refine} />
          ))}
        </div>
        {items.length > 0 && (
          <div className="flex justify-start items-start">
            <ClearRefinements />
          </div>
        )}
      </div>
      <div className="flex gap-2 w-full">
        <RefinementsSelector attribute="brand" label="Brand" />
        <RefinementsSelector attribute="gender" label="Gender" />
        <RefinementsSelector attribute="material" label="Material" />
        <RefinementsSelector attribute="age_group" label="Age" />
      </div>
    </div>
  )
}

export default Facets
