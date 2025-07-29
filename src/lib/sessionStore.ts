import { writable } from "svelte/store";

const isBrowser = typeof window !== "undefined" && typeof localStorage !== "undefined";
const storedSession = isBrowser ? localStorage.getItem("session") : null;
const storedExpiration = isBrowser ? localStorage.getItem("expiration_time") : null;

export const session = writable<string | null>(storedSession);
export const expiration_time = writable<string | null>(storedExpiration);

if (isBrowser) {
  session.subscribe((value) => {
    if (value) {
      localStorage.setItem("session", value);
    } else {
      localStorage.removeItem("session");
    }
  });
  expiration_time.subscribe((value) => {
    if (value) {
      localStorage.setItem("expiration_time", value);
    } else {
      localStorage.removeItem("expiration_time");
    }
  });

  window.addEventListener("storage", (event) => {
    if (event.key === "session") {
      session.set(event.newValue);
    }
    if (event.key === "expiration_time") {
      expiration_time.set(event.newValue);
    }
  });
}