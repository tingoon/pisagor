import { stripSvelteExample } from "@pisagor/utils";
import defaultRaw from "./default.svelte?raw";
import with_groupsRaw from "./with-groups.svelte?raw";

export const imports = `import { Menu } from "@pisagor/svelte";`;

export const sources = {
  Default: stripSvelteExample(defaultRaw),
  WithGroups: stripSvelteExample(with_groupsRaw),
} as const;

export { default as Default } from "./default.svelte";
export { default as WithGroups } from "./with-groups.svelte";
