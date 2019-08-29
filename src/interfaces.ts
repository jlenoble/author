"use strict";

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
