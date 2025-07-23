import { writable } from "svelte/store";

const isBrowser = typeof window !== "undefined" && typeof localStorage !== "undefined";
const storedSession = isBrowser ? localStorage.getItem("session") : null;

export const session = writable<string | null>(storedSession);

if (isBrowser) {
  session.subscribe((value) => {
    if (value) {
      localStorage.setItem("session", value);
    } else {
      localStorage.removeItem("session");
    }
  });
}