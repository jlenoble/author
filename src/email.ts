import makeFormattedStringClass, { FormattedString } from "./formatted-string";

declare module "./formatted-string" {
  export enum Names {
    Email = "[^@]+@[^@]+"
  }

  export enum Formats {
    "[^@]+@[^@]+" = "Email"
  }
}

export const Email = makeFormattedStringClass("Email", "[^@]+@[^@]+");
export type Email = FormattedString<"Email", "[^@]+@[^@]+">;
