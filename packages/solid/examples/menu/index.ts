import defaultRaw from "./default.tsx?raw";
import with_groupsRaw from "./with-groups.tsx?raw";

export const imports = `import { Menu } from "@pisagor/solid";`;

export const sources = {
  Default: defaultRaw,
  WithGroups: with_groupsRaw,
} as const;

export * from "./default";
export * from "./with-groups";
