import makeFormattedStringClass, { FormattedString } from "./formatted-string";

declare module "./formatted-string" {
  export enum Names {
    Name = ".*"
  }

  export enum Formats {
    ".*" = "Name"
  }
}

export const Name = makeFormattedStringClass("Name", ".*");
export type Name = FormattedString<"Name", ".*">;
