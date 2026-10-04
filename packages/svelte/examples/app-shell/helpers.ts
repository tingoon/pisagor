const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export function loremParagraphs(count: number): string[] {
  return Array.from({ length: count }, () => LOREM);
}
