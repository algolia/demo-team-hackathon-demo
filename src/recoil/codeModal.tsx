import { atom } from "recoil";

export const codeModalState = atom({
  key: "codeModalState",
  default: false,
});

export const codeValueState = atom({
  key: "codeValueState",
  default: "",
});
