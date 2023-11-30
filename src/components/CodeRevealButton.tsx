import { useComponentVisible } from "@/hooks/useComponentVisible";
import { Code } from "react-feather";
import CodeBlock from "./CodeBlock";

interface Props {
  jsCode: string;
  openDirection?: "left" | "right" | "center" | "upLeft";
}

const CodeRevealButton = ({ jsCode, openDirection = "right" }: Props) => {
  const { ref, setIsComponentVisible, isComponentVisible } =
    useComponentVisible(false);

  const revealModal = (e: any) => {
    e.stopPropagation();
    setIsComponentVisible(!isComponentVisible);
  };

  return (
    <div className="relative self-center" ref={ref}>
      <button
        onClick={revealModal}
        className={`code-btn z-20 relative rounded w-[20px] flex justify-center h-[20px] items-center transition-all ease-in-out ${
          isComponentVisible
            ? `bg-[#002451]  self-end ${
                openDirection === "upLeft"
                  ? "rounded-tr-none rounded-tl-none"
                  : "rounded-br-none rounded-bl-none"
              }`
            : "hover:bg-[#002451]  bg-algolia-xenon rounded-[36px]"
        }`}
      >
        <Code color={isComponentVisible ? "white" : "white"} size={12} />
      </button>

      <div
        className={`bg-[#002451] rounded-md shadow-xl p-4 z-[100] absolute  ${
          isComponentVisible ? "block" : "hidden"
        } ${
          openDirection === "left" ? "right-0 rounded-tr-none top-full" : ""
        } ${
          openDirection === "right" ? "left-0 rounded-tl-none top-full" : ""
        } ${openDirection === "center" ? "-ml-[254px] " : ""} ${
          openDirection === "upLeft"
            ? "right-0 bottom-full rounded-br-none"
            : ""
        }`}
      >
        <CodeBlock value={jsCode} />
      </div>
    </div>
  );
};

export default CodeRevealButton;
