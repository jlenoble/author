"use strict";

import { FormattedString } from "./formatted-string";

export interface Author {
  name: string;
  email?: string;
  url?: string;
}

export interface NormalizedAuthor extends Author {
  name: string;
  email: string;
  url: string;
}

export type AuthorInput = string | Author;

export type Name = FormattedString<"Name", ".*">;
export type Email = FormattedString<"Email", "[^@]+@[^@]+">;
export type Url = FormattedString<"Url", "w+(?:\\.w+)+">;
