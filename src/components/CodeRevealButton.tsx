import { codeModalState, codeValueState } from "@/recoil/codeModal";
import { Code } from "react-feather";
import { useSetRecoilState } from "recoil";
interface Props {
  jsCode: string;
}

const CodeRevealButton = ({ jsCode }: Props) => {
  const setModalOpen = useSetRecoilState<boolean>(codeModalState);
  const setCodeValue = useSetRecoilState<string>(codeValueState);

  const revealModal = () => {
    setCodeValue(jsCode);
    setModalOpen(true);
  };

  return (
    <button
      onClick={revealModal}
      className="code-btn bg-slate-200 px-3 rounded hover:bg-[#000035] transition-all ease-in-out"
    >
      <Code />
    </button>
  );
};

export default CodeRevealButton;
