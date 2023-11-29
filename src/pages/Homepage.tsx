// ASSETS
import home1 from '@/assets/images/home1.png'
import home2 from '@/assets/images/home2.png'
import home3 from '@/assets/images/home3.png'
import home4 from '@/assets/images/home4.png'
import home5 from '@/assets/images/home5.png'
import home6 from '@/assets/images/home6.png'
import home7 from '@/assets/images/home7.png'
import home8 from '@/assets/images/home8.png'
import footer from '@/assets/images/footer.png'
import SearchBox from '@/components/SearchBox'
import ResultsContainer from '@/components/resultsContainer'

const Homepage = () => {
  return (
    <div>
      <img src={home1} alt="home1" />
      <section className="flex flex-col items-center py-32 bg-[#000034]">
        <div className="w-[90%] shadow-custom bg-white rounded-[16px] py-12 px-8">
          <SearchBox />
          <ResultsContainer />
        </div>
      </section>

      <img src={home2} alt="home2" />
      <img src={home3} alt="home3" />
      <img src={home4} alt="home4" />
      <img src={home5} alt="home5" />
      <img src={home6} alt="home6" />
      <img src={home7} alt="home7" />
      <img src={home8} alt="home8" />
      <footer>
        <img src={footer} alt="" />
      </footer>
    </div>
  )
}

export default Homepage
