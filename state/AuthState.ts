import { atom } from "recoil";
import { AUTH } from "../types/AUTH";

export const AuthState = atom<AUTH>({
  key: "AuthState",
  default: {
    logedIn: false,
  },
});
