import { Author as AuthorInterface } from "./interfaces";
import { AuthorInput, Name, Email, Url } from "./types";

export const authorRegExp = /^\s*([^(<]+)(?:\s+<(.+)>)?(?:\s+\((.+)\))?\s*$/;

export class Author implements AuthorInterface {
  public get name(this: Author): string {
    return this._name.toString();
  }

  public get email(this: Author): string | undefined {
    return this._email && this._email.toString();
  }

  public get url(this: Author): string | undefined {
    return this._url && this._url.toString();
  }

  private _name: Name;
  private _email?: Email;
  private _url?: Url;

  public constructor(author: AuthorInput) {
    if (typeof author === "string") {
      const match = author.match(authorRegExp);

      if (match) {
        this._name = new Name(match[1]);
        this._email = match[2] && new Email(match[2]);
        this._url = match[3] && new Url(match[3]);
      } else {
        throw new Error(`Invalid input string ${author}`);
      }
    } else {
      this._name = new Name(author.name);
      this._email = author.email && new Email(author.email);
      this._url = author.url && new Url(author.url);
    }

    Object.defineProperty(this, "_name", { enumerable: false });
    Object.defineProperty(this, "_email", { enumerable: false });
    Object.defineProperty(this, "_url", { enumerable: false });
  }
}
