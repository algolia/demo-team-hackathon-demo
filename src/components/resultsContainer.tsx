// COMPONENTS
import CustomHits from '@/components/Hits'
import CustomStats from '@/components/CustomStats'
import Facets from './facets/Facets'
import CustomSortBy from '@/components/CustomSortBy'

const ResultsContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center my-2">
      <div className="w-full">
        <div className="flex items-center justify-between ">
          <CustomSortBy
            items={[
              { label: 'Featured', value: 'mate_team_off_white' },
              { label: 'Price (asc)', value: 'mate_team_off_white_price_asc' },
              {
                label: 'Price (desc)',
                value: 'mate_team_off_white_price_desc',
              },
            ]}
          />
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
