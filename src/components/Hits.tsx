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
    <div className={`w-4/5 rounded-[9px] relative  p-0 mt-8 ${activeIndex.isNeural && neuralBorder && `background-animate`}`}>
      <div className="relative">
        <NeuralBadge rankingInfo={hit._rankingInfo} setNeuralBorder={setNeuralBorder} />
        <div className="mx-auto w-full p-[2px] ">
          <img
            className="w-full aspect-[5/7] rounded-lg object-cover border-[3px] border-white"
            src={hit.image_link as string}
            alt={hit.title as string}
            onError={(e) => {
              console.log(e)
            }}
          />
          <div className="absolute  -translate-x-1/2 left-1/2 bottom-2 w-auto px-4 py-2 bg-white border border-gray">
            <h2 className="text-sm text-center font-semibold text-black">{(hit.title as string).split(' - ')[1]}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

function CustomHits(props: UseHitsProps<BaseHit> | undefined) {
  const { hits } = useHits(props)

  return (
    <div className="hits-scroll relative flex flex-wrap w-full h-[30rem] overflow-auto">
      <div className="absolute top-0 right-4">
        <CodeRevealButton jsCode={statsCode} openDirection="left" />
      </div>
      {hits.map((hit) => (
        <div key={hit.objectID} className="w-1/4 p-2">
          <Hit hit={hit} />
        </div>
      ))}
    </div>
  )
}

export default CustomHits
