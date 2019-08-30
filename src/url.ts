import makeFormattedStringClass, { FormattedString } from "./formatted-string";

declare module "./formatted-string" {
  export enum Names {
    Url = "w+(?:\\.w+)+"
  }

  export enum Formats {
    "w+(?:\\.w+)+" = "Url"
  }
}

export const Url = makeFormattedStringClass("Url", "w+(?:\\.w+)+");
export type Url = FormattedString<"Url", "w+(?:\\.w+)+">;
