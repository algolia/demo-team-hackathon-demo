import { useRecoilState } from "recoil";
import { Modal } from "@algolia/satellite";
import CodeBlock from "./CodeBlock";
import { codeModalState, codeValueState } from "../recoil/codeModal";
interface CodeSnippetProps {}
const CodeModal = ({}: CodeSnippetProps) => {
  const [open, setOpen] = useRecoilState<boolean>(codeModalState);
  const [codeValue, setCodeValue] = useRecoilState<string>(codeValueState);
  const dismissModal = () => {
    setOpen(false);
    setCodeValue("");
  };

  return (
    <Modal open={open} size="large" animate onDismiss={dismissModal}>
      <CodeBlock value={codeValue} />
    </Modal>
  );
};

export default CodeModal;
