import defaultRaw from "./default.ts?raw";
import with_groupsRaw from "./with-groups.ts?raw";

export const imports = `import { Menu } from "@pisagor/vue";`;

export const sources = {
  Default: defaultRaw,
  WithGroups: with_groupsRaw,
} as const;

export { default as Default } from "./default";
export { default as WithGroups } from "./with-groups";
