import { X } from 'react-feather'

interface IRefinement {
  type: 'facet' | 'exclude' | 'disjunctive' | 'hierarchical' | 'numeric' | 'query' | 'tag'
  attribute: string
  value: string | number
  label: string
}

interface Item {
  indexName: string
  indexId: string
  attribute: string
  label: string
  refinements: IRefinement[]
}

const CurrentRefinements = ({ item, refine }: { item: Item; refine: (refinement: IRefinement) => void }) => {
  return (
    <>
      {item.refinements.map((it: IRefinement) => (
        <div
          onClick={() => refine(it)}
          key={it.value}
          className="py-2 px-3 bg-colorBp-refinementBadge gap-2 rounded flex items-center justify-between cursor-pointer"
        >
          <p className="text-colorBp-refinementBadgeTextColor text-xs font-semibold">
            <span className="text-gray-600 font-normal">{it.attribute.charAt(0).toUpperCase() + it.attribute.slice(1)}:</span> {it.value}
          </p>
          <div>
            <X size={14} color="gray" />
          </div>
        </div>
      ))}
    </>
  )
}

export default CurrentRefinements
