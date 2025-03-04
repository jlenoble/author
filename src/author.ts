import {
  Author as RawAuthor,
  NormalizedAuthor,
  AuthorInput,
  Name,
  Email,
  Url
} from "./interfaces";

import { Name as NameClass } from "./name";
import { Email as EmailClass } from "./email";
import { Url as UrlClass } from "./url";

export const authorRegExp = /^\s*([^(<]+)(?:\s+<(.+)>)?(?:\s+\((.+)\))?\s*$/;

export class Author implements NormalizedAuthor {
  public get name(): string {
    return this._name.toString();
  }
  public set name(name: string) {
    this._name = new NameClass(name);
  }

  public get email(): string {
    return this._email.toString();
  }
  public set email(email: string) {
    this._email = new EmailClass(email);
  }

  public get url(): string {
    return this._url.toString();
  }
  public set url(url: string) {
    this._url = new UrlClass(url);
  }

  public get author(): RawAuthor {
    const author: RawAuthor = { name: this.name };

    if (this.email) {
      author.email = this.email;
    }

    if (this.url) {
      author.url = this.url;
    }

    return author;
  }
  public set author(author: RawAuthor) {
    this._name = new NameClass(author.name);
    this._email = new EmailClass(author.email || "");
    this._url = new UrlClass(author.url || "");
  }

  private _name: Name;
  private _email: Email;
  private _url: Url;

  public constructor(author: AuthorInput) {
    if (typeof author === "string") {
      const match = author.match(authorRegExp);

      if (match) {
        this._name = new NameClass(match[1]);
        this._email = new EmailClass(match[2] || "");
        this._url = new UrlClass(match[3] || "");
      } else {
        throw new Error(`Invalid input string ${author}`);
      }
    } else {
      this._name = new NameClass(author.name);
      this._email = new EmailClass(author.email || "");
      this._url = new UrlClass(author.url || "");
    }

    Object.defineProperty(this, "_name", {
      enumerable: false,
      configurable: false
    });
    Object.defineProperty(this, "_email", {
      enumerable: false,
      configurable: false
    });
    Object.defineProperty(this, "_url", {
      enumerable: false,
      configurable: false
    });
  }
}

Object.freeze(Author);
Object.freeze(Author.prototype);
