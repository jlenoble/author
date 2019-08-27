import { expect } from "chai";
import Author from "../src/author";

describe("Testing Author", (): void => {
  const defaultArgs = [];

  it("Class Author can be instanciated", (): void => {
    expect((): void => {
      new Author(...defaultArgs);
    }).not.to.throw();
  });
});
