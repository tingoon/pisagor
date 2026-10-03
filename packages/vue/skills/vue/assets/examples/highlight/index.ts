import { stripVueExample } from "@pisagor/utils";
import custom_styleRaw from "./custom-style.vue?raw";
import defaultRaw from "./default.vue?raw";
import multipleRaw from "./multiple.vue?raw";
import multiple_queriesRaw from "./multiple-queries.vue?raw";
import search_queryRaw from "./search-query.vue?raw";
import squiggleRaw from "./squiggle.vue?raw";

export const imports = `import { Highlight } from "@pisagor/vue/highlight";`;

export const sources = {
  CustomStyle: stripVueExample(custom_styleRaw),
  Default: stripVueExample(defaultRaw),
  Multiple: stripVueExample(multipleRaw),
  MultipleQueries: stripVueExample(multiple_queriesRaw),
  SearchQuery: stripVueExample(search_queryRaw),
  Squiggle: stripVueExample(squiggleRaw),
} as const;

export { default as CustomStyle } from "./custom-style.vue";
export { default as Default } from "./default.vue";
export { default as Multiple } from "./multiple.vue";
export { default as MultipleQueries } from "./multiple-queries.vue";
export { default as SearchQuery } from "./search-query.vue";
export { default as Squiggle } from "./squiggle.vue";
