/**
 * Docs-only stand-in for `@faker-js/faker` inside live examples (wired by the
 * `pisagor:faker-lite` plugin in astro.config.ts). Examples only use
 * `faker.lorem`, but the real package ships its full English locale (~400 KB
 * minified) into the preview chunk. Same call signatures, tiny word list,
 * seeded so previews are stable between renders.
 */

const WORDS =
  "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure in reprehenderit voluptate velit esse cillum fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum".split(
    " ",
  );

let seed = 20_260_101;

function random(): number {
  // mulberry32
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;

  return ((t ^ (t >>> 14)) >>> 0) / 4_294_967_296;
}

type Count = number | { min: number; max: number };

function count(value: Count | undefined, fallback: Count): number {
  const v = value ?? fallback;
  if (typeof v === "number") return v;

  return v.min + Math.floor(random() * (v.max - v.min + 1));
}

function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const lorem = {
  lines(lineCount?: Count): string {
    return Array.from({ length: count(lineCount, { max: 5, min: 1 }) }, () =>
      lorem.sentence(),
    ).join("\n");
  },
  paragraph(sentenceCount?: Count): string {
    return lorem.sentences(sentenceCount ?? 3, " ");
  },
  paragraphs(paragraphCount?: Count, separator = "\n"): string {
    return Array.from({ length: count(paragraphCount, 3) }, () =>
      lorem.paragraph(),
    ).join(separator);
  },
  sentence(wordCount?: Count): string {
    return `${capitalize(lorem.words(wordCount ?? { max: 10, min: 3 }))}.`;
  },
  sentences(sentenceCount?: Count, separator = " "): string {
    return Array.from(
      { length: count(sentenceCount, { max: 6, min: 2 }) },
      () => lorem.sentence(),
    ).join(separator);
  },
  slug(wordCount?: Count): string {
    return lorem.words(wordCount ?? 3).replaceAll(" ", "-");
  },
  text(): string {
    return lorem.paragraphs({ max: 3, min: 1 });
  },
  word(): string {
    return WORDS[Math.floor(random() * WORDS.length)] ?? "lorem";
  },
  words(wordCount?: Count): string {
    return Array.from({ length: count(wordCount, 3) }, () => lorem.word()).join(
      " ",
    );
  },
};

export const faker = { lorem };
