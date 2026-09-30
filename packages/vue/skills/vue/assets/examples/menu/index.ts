import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.ts?raw";
import with_groupsRaw from "./with-groups.ts?raw";

export const imports = `import { Menu } from "@pisagor/vue/menu";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
  WithGroups: stripVueExample(with_groupsRaw),
} as const;

export { default as Default } from "./default";
export { default as WithGroups } from "./with-groups";
