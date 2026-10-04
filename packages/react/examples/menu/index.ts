import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import with_groupsRaw from "./with-groups.tsx?raw";

export const imports = `import { Menu } from "@pisagor/react";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  WithGroups: stripTsxExample(with_groupsRaw),
} as const;

export * from "./default";
export * from "./with-groups";
