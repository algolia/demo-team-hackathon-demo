import { ClearRefinementsProps, useClearRefinements } from 'react-instantsearch'

const ClearRefinements = (props: ClearRefinementsProps) => {
  const { canRefine, refine } = useClearRefinements(props)
  return (
    <div className="border-colorBp-clearRefinementButtonColor text-xs border-2 rounded-3xl px-4 py-1">
      <button disabled={!canRefine} className="text-colorBp-clearRefinementButtonColor" onClick={() => refine()}>
        Clear
      </button>
    </div>
  )
}

export default ClearRefinements
