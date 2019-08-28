import { expect } from "chai";
import Author from "../src/author";

describe("class Author", (): void => {
  const name = "Barney Rubble";
  const email = "b@rubble.com";
  const url = "http://barnyrubble.tumblr.com/";

  describe("can be instanciated from", (): void => {
    it("{ name }", (): void => {
      const author = new Author({ name });
      expect(author.name).to.equal(name);
      expect(author.email).to.be.undefined;
      expect(author.url).to.be.undefined;
    });

    it("{ name, email }", (): void => {
      const author = new Author({ name, email });
      expect(author.name).to.equal(name);
      expect(author.email).to.equal(email);
      expect(author.url).to.be.undefined;
    });

    it("{ name, url }", (): void => {
      const author = new Author({ name, url });
      expect(author.name).to.equal(name);
      expect(author.email).to.be.undefined;
      expect(author.url).to.equal(url);
    });

    it("{ name, email, url }", (): void => {
      const author = new Author({ name, email, url });
      expect(author.name).to.equal(name);
      expect(author.email).to.equal(email);
      expect(author.url).to.equal(url);
    });

    it("name", (): void => {
      const author = new Author(name);
      expect(author.name).to.equal(name);
      expect(author.email).to.be.undefined;
      expect(author.url).to.be.undefined;
    });

    it("name <email>", (): void => {
      const author = new Author(`${name} <${email}>`);
      expect(author.name).to.equal(name);
      expect(author.email).to.equal(email);
      expect(author.url).to.be.undefined;
    });

    it("name (url)", (): void => {
      const author = new Author(`${name} (${url})`);
      expect(author.name).to.equal(name);
      expect(author.email).to.be.undefined;
      expect(author.url).to.equal(url);
    });

    it("name <email> (url)", (): void => {
      const author = new Author(`${name} <${email}> (${url})`);
      expect(author.name).to.equal(name);
      expect(author.email).to.equal(email);
      expect(author.url).to.equal(url);
    });
  });

  describe("throws on", (): void => {
    it("<email> name", (): void => {
      expect(() => new Author(`<${email}> ${name}`)).to.throw();
    });

    it("<email> (url)", (): void => {
      expect(() => new Author(`<${email}> (${url})`)).to.throw();
    });
  });
});
