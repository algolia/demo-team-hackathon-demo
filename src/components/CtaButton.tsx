import { Zap } from 'react-feather'

const CtaButton = () => {
  return (
    <button
      type="button"
      className=" px-6 py-4 mt-12 bg-white border-gray-400 rounded-l-full cursor-pointer rounded-r-[50rem] shadow-cta hover:-translate-y-1 ease-in-out duration-100 "
    >
      <a
        href="https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/"
        target="_blank"
        className="flex items-center justify-center gap-2 no-underline"
      >
        <p className="font-bold no-underline">Build it under 5'</p>
        <Zap />
      </a>
    </button>
  )
}

export default CtaButton
