import { atom } from "recoil";

export const indexAtom = atom<IndexAtom>({
  key: "indexAtom",
  default: {
    isNeural: false,
    name: "mate_team_off_white",
  },
});

export interface IndexAtom {
  isNeural: boolean;
  name: string;
}
