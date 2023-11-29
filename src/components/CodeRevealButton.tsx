import { useComponentVisible } from '@/hooks/useComponentVisible'

// import { codeModalState, codeValueState } from '@/recoil/codeModal'
import { Code } from 'react-feather'
import CodeBlock from './CodeBlock'
// import { useSetRecoilState } from 'recoil'
interface Props {
  jsCode: string
  openDirection?: 'left' | 'right'
}

const CodeRevealButton = ({ jsCode, openDirection = 'center' }: Props) => {
  // const setModalOpen = useSetRecoilState<boolean>(codeModalState)
  // const setCodeValue = useSetRecoilState<string>(codeValueState)

  const { ref, setIsComponentVisible, isComponentVisible } = useComponentVisible(false)

  const revealModal = (e) => {
    e.stopPropagation()
    setIsComponentVisible(!isComponentVisible)
  }

  return (
    <div className="relative flex z-[100]" ref={ref}>
      <button
        onClick={revealModal}
        className={`code-btn z-20 relative rounded px-2 transition-all ease-in-out ${
          isComponentVisible ? 'bg-colorBp-600 rounded-br-none rounded-bl-none' : 'hover:bg-colorBp-200 '
        }`}
      >
        <Code color={isComponentVisible ? 'white' : 'black'} />
      </button>
      {/* {isComponentVisible && <div className="h-4 w-4 absolute left-1/2 z-10 bg-colorBp-600 -translate-x-1/2 -bottom-1.5 rotate-45"></div>} */}
      <div
        className={`bg-colorBp-600 rounded-md rounded-tl-none p-4 z-[100] absolute top-full ${isComponentVisible ? 'block' : 'hidden'} ${
          openDirection === 'left' ? 'right-0' : ''
        } ${openDirection === 'right' ? 'left-0' : ''}`}
      >
        <CodeBlock value={jsCode} />
      </div>
    </div>
  )
}

export default CodeRevealButton
