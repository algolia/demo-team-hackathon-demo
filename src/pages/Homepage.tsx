import { useRef, useEffect } from 'react'

// ASSETS
// import home1 from '@/assets/images/home1.png'
// import home2 from '@/assets/images/home2.png'
// import home3 from '@/assets/images/home3.png'
// import home4 from '@/assets/images/home4.png'
// import home5 from '@/assets/images/home5.png'
// // import home6 from '@/assets/images/home6.png'
// import home7 from '@/assets/images/home7.png'
// import home8 from '@/assets/images/home8.png'
// import footer from '@/assets/images/footer.png'
import CodeModal from '../components/CodeModal'
import SearchBox from '@/components/SearchBox'
import ResultsContainer from '@/components/resultsContainer'
import Carousel from '@/components/Carousel'
import { Toggle } from '@algolia/satellite'
import { IndexAtom, indexAtom } from '@/recoil/neuralToggle'
import { useRecoilState } from 'recoil'
import CtaButton from '@/components/CtaButton'

const Homepage = () => {
  const [activeIndex, setActiveIndex] = useRecoilState<IndexAtom>(indexAtom)

  const recoRef = useRef<HTMLDivElement>(null)

  const handleToggleChange = (value: boolean) => {
    setActiveIndex({
      isNeural: value,
      name: value ? 'mate_team_off_white_ns' : 'mate_team_off_white',
    })
  }

  useEffect(() => {
    const recoElement = recoRef.current
    if (recoElement) {
      recoElement.style.height = activeIndex.isNeural
        ? `${recoElement.scrollHeight}px`
        : '0px'
    }
  }, [activeIndex.isNeural])

  return (
    <div className="h-screen">
      <CodeModal />
      {/* <img className="w-full" src={home1} alt="home1" /> */}
      <section className="flex flex-col items-center justify-center h-full bg-[#000034]">
        <div className="w-[90%] shadow-custom bg-white rounded-[16px] py-12 px-12 gap-12 grid grid-cols-2 max-w-[1440px] items-center">
          <div className="xl:px-4">
            <p className="text-4xl leading-tight text-[#36395a] font-medium mb-4">
              AI Search That Understands
            </p>
            <p className="text-xl text-[#5a5e9a] mb-8">
              Enterprises and developers use Algolia's AI search infrastructure
              to understand users and show them what they need.
            </p>
            <div className="flex gap-2">
              <button className="uppercase rounded-l-[60px] text-[#36395a] rounded-r-[16px]  tracking-wider text-xs font-bold border-colorBp-300 leading-none pl-8 pr-6 py-3.5 border-2">
                Contact Sales
              </button>
              <button className="algolia-button uppercase rounded-r-[60px] rounded-l-[16px] tracking-wider text-xs font-bold leading-none pr-8 pl-6 py-3.5">
                Start Now
              </button>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <SearchBox />
              <div className="flex items-center gap-2">
                <Toggle
                  onChange={(e) => handleToggleChange(e.target.checked)}
                  checked={activeIndex.isNeural}
                  color="#013EFF"
                />
                <p className="text-sm font-bold text-aloglia-xenonDark">AI</p>
              </div>
            </div>
            <div
              ref={recoRef}
              className={`overflow-hidden transition-all ease-in-out ${
                activeIndex.isNeural ? '' : 'h-0'
              }`}
            >
              <Carousel />
            </div>
            <ResultsContainer />
          </div>
        </div>
        <CtaButton />
      </section>

      {/* <img className="w-full" src={home2} alt="home2" />
      <img className="w-full" src={home3} alt="home3" />
      <img className="w-full" src={home4} alt="home4" />
      <img className="w-full" src={home5} alt="home5" /> */}
      {/* <img src={home6} alt="home6" /> */}
      {/* <img className="w-full" src={home7} alt="home7" />
      <img className="w-full" src={home8} alt="home8" /> */}
      {/* <footer>
        <img className="w-full" src={footer} alt="" />
      </footer> */}
    </div>
  )
}

export default Homepage
