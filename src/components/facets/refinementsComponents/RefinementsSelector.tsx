import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'

const RefinementsSelector = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false)

  return (
    <div className="border-[1px] border-gray-200 p-2 w-1/5 items-start cursor-pointer relative">
      <div
        className="flex justify-between"
        onClick={() => setIsOpened(!isOpened)}
      >
        <p className="text-base font-medium text-colorBp-refinementBadgeTextColor">
          Brand
        </p>
        {isOpened ? <ChevronUp /> : <ChevronDown />}
      </div>
      <div
        className={`absolute bg-white w-full p-2 left-0 top-12 transition-opacity duration-300 ${
          isOpened ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="hover:bg-gray-200 p-2">Nike</p>
        <p className="hover:bg-gray-200 bg-colorBp-refinementBadgeTextColor text-white p-2">
          Nike
        </p>
        <p className="hover:bg-gray-200 p-2">Nike</p>
        <p className="hover:bg-gray-200 p-2">Nike</p>
        <p className="hover:bg-gray-200 p-2">Nike</p>
        <var></var>
      </div>
    </div>
  )
}

export default RefinementsSelector
