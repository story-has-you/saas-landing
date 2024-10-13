import { atom, useAtom } from "jotai";

export const usePending = () => useAtom(atom<boolean>(false));
