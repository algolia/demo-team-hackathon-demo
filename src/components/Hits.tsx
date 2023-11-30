import { useHits, UseHitsProps } from 'react-instantsearch'
import { BaseHit } from 'instantsearch.js/es/types/results'

import { IndexAtom, indexAtom } from '@/recoil/neuralToggle'
import { useRecoilState } from 'recoil'

import CodeRevealButton from './CodeRevealButton'
import { NeuralBadge } from './NeuralBadge'
import { useState } from 'react'

const statsCode = `
function CustomHits() {
  const { hits } = useHits(props)

  return (
    <div>
      {hits.map(hit => (
        <div key={hit.objectID}>
          <HitComponent hit={hit} />
        </div>
      ))}
    </div>
  )
}

export default CustomHits
`

export const Hit = ({ hit }: { hit: BaseHit }) => {
  const [neuralBorder, setNeuralBorder] = useState(false)
  const [activeIndex, setActiveIndex] = useRecoilState<IndexAtom>(indexAtom)
  return (
    <div className={`rounded-[9px] relative  p-0 ${activeIndex.isNeural && neuralBorder && `background-animate`}`}>
      <div className="relative">
        <NeuralBadge rankingInfo={hit._rankingInfo} setNeuralBorder={setNeuralBorder} />
        <div className={`mx-auto w-full ${activeIndex.isNeural && neuralBorder && 'p-[2px]'}`}>
          <img
            className={`w-full aspect-[9/12] rounded-lg bg-white object-cover ${activeIndex.isNeural && neuralBorder && 'border-[2px] border-white'}`}
            src={hit.image_link as string}
            alt={hit.title as string}
            onError={(e) => {
              console.log(e)
            }}
          />
          <div className="absolute -translate-x-1/2 px-3 left-1/2 bottom-3 w-full">
            <h2 className="text-xs text-center p-1.5 bg-white border rounded-md w-auto border-gray font-semibold text-black">
              {(hit.title as string).split(' - ')[1]}
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

function CustomHits(props: UseHitsProps<BaseHit> | undefined) {
  const { hits } = useHits(props)

  return (
    <div className="hits-view w-full">
      <div className="hits-scroll relative grid grid-cols-4 gap-4 w-full h-[30rem] overflow-y-auto pr-2">
        {hits.map((hit) => (
          <div key={hit.objectID} className="w-full">
            <Hit hit={hit} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 right-4">
        <CodeRevealButton jsCode={statsCode} openDirection="upLeft" />
      </div>
    </div>
  )
}

export default CustomHits
