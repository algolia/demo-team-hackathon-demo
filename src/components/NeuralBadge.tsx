import { useEffect, useState } from 'react'

export const NeuralBadge = ({ rankingInfo, setNeuralBorder }: any) => {
  const [label, setLabel] = useState('')
  const [keywordScore, setKeywordScore] = useState(null)
  const [semanticScore, setSemanticScore] = useState(null)
  const [isScoreActive, setIsScoreActive] = useState(false)

  const scoreClassNames = isScoreActive ? 'block' : 'hidden pointer-events-none'

  // Neural badge
  useEffect(() => {
    if (rankingInfo !== undefined) {
      const neuralOnly = rankingInfo.hasOwnProperty('semanticScore') && !rankingInfo.hasOwnProperty('keywordScore')

      const keywordOnly = !rankingInfo.hasOwnProperty('semanticScore') && rankingInfo.hasOwnProperty('keywordScore')

      const combination = rankingInfo.hasOwnProperty('semanticScore') && rankingInfo.hasOwnProperty('keywordScore')

      if (neuralOnly) {
        setLabel('Vector')
        setNeuralBorder(true)
      } else if (keywordOnly) {
        setLabel('Keyword')
        setNeuralBorder(false)
      } else if (combination) {
        setLabel('Keyword & Vector')
        setNeuralBorder(true)
      } else {
        setLabel('')
        setNeuralBorder(false)
      }
    }
  }, [rankingInfo])

  // Neural scores
  useEffect(() => {
    if (rankingInfo?.keywordScore) {
      setKeywordScore(rankingInfo.keywordScore.toFixed(2))
    }
    if (rankingInfo?.semanticScore) {
      setSemanticScore(rankingInfo.semanticScore.toFixed(2))
    }
  }, [rankingInfo])

  if (rankingInfo != undefined) {
    return (
      <>
        <div
          className={`absolute inset-0 z-[21] flex flex-col items-center justify-center gap-2 rounded-card bg-black transition-all ${scoreClassNames} bg-opacity-80 px-2 py-1 text-sm leading-none`}
        >
          {keywordScore && (
            <div className="flex gap-1 rounded-admin-pill bg-rose-500  bg-opacity-100 px-4 py-2 text-sm leading-none text-white">
              <p>Keyword score:</p>
              <p className="font-bold">{keywordScore}</p>
            </div>
          )}

          {semanticScore && (
            <div className="flex gap-1 rounded-admin-pill bg-sky-500  bg-opacity-100 px-4 py-2 text-sm leading-none text-white">
              <p>Semantic score:</p>
              <p className="font-bold">{semanticScore}</p>
            </div>
          )}
        </div>

        {label !== '' && !isScoreActive && (
          <div
            onClick={() => setIsScoreActive(!isScoreActive)}
            className={`absolute right-3 top-3 z-[22] flex cursor-pointer items-center gap-1 rounded-admin-pill border px-2 py-1 text-sm leading-none transition ${
              label === 'Keyword' && 'border-rose-500 bg-rose-100 text-rose-500 hover:bg-rose-500 hover:text-white'
            } ${label === 'Vector' && 'border-sky-500 bg-sky-100 text-sky-500 hover:bg-sky-500 hover:text-white'} ${
              label === 'Keyword & Vector' && 'border-violet-500 bg-violet-100 text-violet-500 hover:bg-violet-500 hover:text-white'
            }`}
          >
            <span className="text-xs font-medium leading-none">{label}</span>
          </div>
        )}

        {label !== '' && isScoreActive && (
          <div
            onClick={() => setIsScoreActive(!isScoreActive)}
            className={`absolute right-3 top-3 z-[22] flex h-6 w-6 cursor-pointer items-center justify-center rounded-admin-pill border-2 border-white text-sm leading-none text-white transition hover:bg-white hover:text-black`}
          ></div>
        )}
      </>
    )
  }
}
