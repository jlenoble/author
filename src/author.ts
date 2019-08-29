import { NormalizedAuthor } from "./interfaces";
import { AuthorInput, Name, Email, Url } from "./types";

export const authorRegExp = /^\s*([^(<]+)(?:\s+<(.+)>)?(?:\s+\((.+)\))?\s*$/;

export class Author implements NormalizedAuthor {
  public get name(): string {
    return this._name.toString();
  }
  public set name(name: string) {
    this._name = new Name(name);
  }

  public get email(): string {
    return this._email.toString();
  }
  public set email(email: string) {
    this._email = new Email(email);
  }

  public get url(): string {
    return this._url.toString();
  }
  public set url(url: string) {
    this._url = new Url(url);
  }

  private _name: Name;
  private _email: Email;
  private _url: Url;

  public constructor(author: AuthorInput) {
    if (typeof author === "string") {
      const match = author.match(authorRegExp);

      if (match) {
        this._name = new Name(match[1]);
        this._email = new Email(match[2] || "");
        this._url = new Url(match[3] || "");
      } else {
        throw new Error(`Invalid input string ${author}`);
      }
    } else {
      this._name = new Name(author.name);
      this._email = new Email(author.email || "");
      this._url = new Url(author.url || "");
    }

    Object.defineProperty(this, "_name", { enumerable: false });
    Object.defineProperty(this, "_email", { enumerable: false });
    Object.defineProperty(this, "_url", { enumerable: false });
  }
}
