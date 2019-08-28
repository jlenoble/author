export default interface Author {
  name: string;
  email?: string;
  url?: string;
}

export default class Author {
  public constructor(author: Author) {
    this.name = author.name;
    this.email = author.email;
    this.url = author.url;
  }
}
