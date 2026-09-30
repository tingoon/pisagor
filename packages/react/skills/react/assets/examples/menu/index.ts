import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import with_groupsRaw from "./with-groups.tsx?raw";

export const imports = `import { Menu } from "@pisagor/react/menu";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  WithGroups: stripTsxExample(with_groupsRaw),
} as const;

export { Default } from "./default";
export { WithGroups } from "./with-groups";
