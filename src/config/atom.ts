import { User } from "@prisma/client";
import { atom, useAtom } from "jotai";

export const useUser = () => useAtom(atom<User | null>(null));
