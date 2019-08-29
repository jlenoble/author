"use strict";

export { Name } from "./name";
export { Email } from "./email";
export { Url } from "./url";

import { Author } from "./interfaces";

export type AuthorInput = string | Author;
