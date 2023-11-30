import { useComponentVisible } from '@/hooks/useComponentVisible'

// import { codeModalState, codeValueState } from '@/recoil/codeModal'
import { Code } from 'react-feather'
import CodeBlock from './CodeBlock'
// import { useSetRecoilState } from 'recoil'
interface Props {
  jsCode: string
  openDirection?: 'left' | 'right' | 'center'
}

const CodeRevealButton = ({ jsCode, openDirection = 'right' }: Props) => {
  // const setModalOpen = useSetRecoilState<boolean>(codeModalState)
  // const setCodeValue = useSetRecoilState<string>(codeValueState)

  const { ref, setIsComponentVisible, isComponentVisible } = useComponentVisible(false)

  const revealModal = (e) => {
    e.stopPropagation()
    setIsComponentVisible(!isComponentVisible)
  }

  return (
    <div className="relative self-center" ref={ref}>
      <button
        onClick={revealModal}
        className={`code-btn z-20 relative rounded w-[24px] flex justify-center h-[24px] items-center transition-all ease-in-out ${
          isComponentVisible ? 'bg-[#002451] rounded-br-none rounded-bl-none self-end' : 'hover:bg-[#002451]  bg-algolia-xenon rounded-[36px]'
        }`}
      >
        <Code color={isComponentVisible ? 'white' : 'white'} />
      </button>
      {/* {isComponentVisible && <div className="h-4 w-4 absolute left-1/2 z-10 bg-colorBp-600 -translate-x-1/2 -bottom-1.5 rotate-45"></div>} */}
      <div
        className={`bg-[#002451] rounded-md shadow-xl p-4 z-[100] absolute top-full ${isComponentVisible ? 'block' : 'hidden'} ${
          openDirection === 'left' ? 'right-0 rounded-tr-none' : ''
        } ${openDirection === 'right' ? 'left-0 rounded-tl-none' : ''} ${openDirection === 'center' ? '-ml-[254px] ' : ''}`}
      >
        <CodeBlock value={jsCode} />
      </div>
    </div>
  )
}

export default CodeRevealButton
