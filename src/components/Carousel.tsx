import { Configure, Index, useHits } from 'react-instantsearch'
import { Hit } from './Hits'
import { HorizontalSlider } from '@algolia/ui-components-horizontal-slider-react'
import '@algolia/ui-components-horizontal-slider-theme'

interface HitProps {
  item: any
}

const CarouselHit = ({ item }: HitProps) => {
  return <Hit hit={item} />
}

const CarouselHits = () => {
  const { hits } = useHits()

  return <HorizontalSlider itemComponent={CarouselHit} items={hits} />
}

const Carousel = () => {
  return (
    <Index indexName={'mate_team_off_white_ns'} indexId={'recommend-carousel'}>
      <Configure query="" hitsPerPage={8} />
      <div className="bg-colorBp-100 px-3 rounded-md my-4 mb-0 pb-4 pt-2.5 md:px-4">
        <div className="mx-auto w-full max-w-screen-2xl">
          <h2 className="mb-2 text-center text-sm font-semibold leading-none text-[#000034] lg:text-base">Recommended for you</h2>
          <CarouselHits />
        </div>
      </div>
    </Index>
  )
}

export default Carousel
