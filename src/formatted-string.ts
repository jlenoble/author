export enum Names {}
export enum Formats {}

function makeNameGetter<T extends keyof typeof Names>(name: T): () => T {
  return (): T => name;
}

function makeFormatGetter<T extends keyof typeof Formats>(format: T): () => T {
  return (): T => format;
}

function extendEnums<
  N extends keyof typeof Names,
  F extends keyof typeof Formats
>(name: N, format: F): void {
  if (Names[name] === undefined) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    Names[name] = format;
  } else {
    throw new Error(
      `Trying to redefine ${name} in enum Names with ${format} but is ${Names[name]}`
    );
  }

  if (Formats[format] === undefined) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    Formats[format] = name;
  } else {
    throw new Error(
      `Trying to redefine ${format} in enum Formats with ${name} but is ${Formats[format]}`
    );
  }
}

interface FormattedStringInterface<
  N extends keyof typeof Names,
  F extends keyof typeof Formats
> {
  name: N;
  format: F;
}

export type FormattedString<
  N extends keyof typeof Names,
  F extends keyof typeof Formats
  // eslint-disable-next-line @typescript-eslint/ban-types
> = String & FormattedStringInterface<N, F>;

export interface FormattedStringConstructor<
  N extends keyof typeof Names,
  F extends keyof typeof Formats
> {
  new (str: string): FormattedString<N, F>;
  prototype: FormattedString<N, F>;
}

export default function makeFormattedStringClass<
  N extends keyof typeof Names,
  F extends keyof typeof Formats
>(name: N, format: F): FormattedStringConstructor<N, F> {
  extendEnums(name, format);

  const nameGetter = makeNameGetter(name);
  const formatGetter = makeFormatGetter(format);

  class FormattedString extends String
    implements FormattedStringInterface<N, F> {
    public get [Symbol.toStringTag](): string {
      return nameGetter();
    }

    public get name(): N {
      return nameGetter();
    }

    public get format(): F {
      return formatGetter();
    }
  }

  Object.freeze(FormattedString);
  Object.freeze(FormattedString.prototype);

  return FormattedString;
}
