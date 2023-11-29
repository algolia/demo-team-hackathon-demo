import { X } from 'react-feather'

const CurrentRefinements = () => (
  <div className="py-2 px-3 bg-colorBp-refinementBadge rounded-admin-pill flex items-center justify-between w-32">
    <p className="text-colorBp-refinementBadgeTextColor font-semibold">
      <span className="text-gray-600 font-normal">Brand:</span> Nike
    </p>
    <X size={14} color="gray" />
  </div>
)
export default CurrentRefinements
