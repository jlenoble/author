export default interface Author {
  name: string;
  email?: string;
  url?: string;
}

export type AuthorInput = string | Author;

export const authorRegExp = /^\s*([^(<]+)(?:\s+<(.+)>)?(?:\s+\((.+)\))?\s*$/;

export default class Author {
  public constructor(author: AuthorInput) {
    if (typeof author === "string") {
      const match = author.match(authorRegExp);

      if (match) {
        this.name = match[1];
        this.email = match[2];
        this.url = match[3];
      }
    } else {
      this.name = author.name;
      this.email = author.email;
      this.url = author.url;
    }
  }
}
