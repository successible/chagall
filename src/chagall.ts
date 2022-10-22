export const colors = {
  background: "#f7f7f7",
  black: "#333333",
  blue: "#ecf9f9",
  danger: "#ff5470",
  darkblue: "#c5ecec",
  darkgrey: "#666666",
  darkpurple: "#7341c7",
  green: "#ecf9ed",
  lightgrey: "#ededed",
  mediumgrey: "#cccccc",
  pink: "#ffe8e8",
  purple: "#ad90de",
  seashell: "#fff6ed",
  success: "#2cb67d",
  text: "#606c76",
  white: "#ffffff",
  yellow: "#fff6c2",
} as const;

export const xs = 320;
export const sm = 576;
export const md = 768;
export const lg = 992;
export const xlg = 1024;
export const xxlg = 1500;

export type Colors = keyof typeof colors;
