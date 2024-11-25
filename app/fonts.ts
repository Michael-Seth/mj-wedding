import { Cookie, Roboto_Mono, Chilanka, Agbalumo } from "next/font/google";

export const cookie = Cookie({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

export const oleo = Agbalumo({
  weight: "400",
  subsets: ["cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});

export const chilanka = Chilanka({
  weight: "400",
  subsets: ["latin", "latin-ext", "malayalam"],
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});
