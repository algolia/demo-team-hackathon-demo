// COMPONENTS
import CustomHits from '@/components/Hits'
import CustomStats from '@/components/CustomStats'
import Facets from './facets/Facets'

const ResultsContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full">
        <div className="flex justify-between my-4">
          <Facets />
          <CustomStats />
        </div>
      </div>
      <div className="w-full">
        <CustomHits />
      </div>
    </div>
  )
}

export default ResultsContainer
