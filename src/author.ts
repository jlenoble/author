import { Author as AuthorInterface } from "./interfaces";
import { AuthorInput } from "./types";

export const authorRegExp = /^\s*([^(<]+)(?:\s+<(.+)>)?(?:\s+\((.+)\))?\s*$/;

export class Author implements AuthorInterface {
  readonly name: string;
  readonly email?: string;
  readonly url?: string;

  public constructor(author: AuthorInput) {
    if (typeof author === "string") {
      const match = author.match(authorRegExp);

      if (match) {
        this.name = match[1];
        this.email = match[2];
        this.url = match[3];
      } else {
        throw new Error(`Invalid input string ${author}`);
      }
    } else {
      this.name = author.name;
      this.email = author.email;
      this.url = author.url;
    }
  }
}
