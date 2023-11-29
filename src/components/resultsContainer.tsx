// COMPONENTS
import CustomHits from '@/components/Hits'
import CustomStats from '@/components/CustomStats'
import Facets from './facets/Facets'

const ResultsContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center m-2">
      <div className="w-full">
        <div className="flex justify-end ">
          <CustomStats />
        </div>
        <div>
          <Facets />
        </div>
      </div>
      <div>
        <CustomHits />
      </div>
    </div>
  )
}

export default ResultsContainer
