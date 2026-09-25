import {
  createTreeCollection as arkCreateTreeCollection,
  type TreeCollection,
} from "@ark-ui/svelte/tree-view";

export interface TreeNodeType<T = unknown> {
  children?: TreeNodeType<T>[] | undefined;
  id: string;
  name: string;
}

export type { TreeCollection };

export const createTreeCollection = <T extends TreeNodeType>(
  options: Parameters<typeof arkCreateTreeCollection<T>>[0],
) =>
  arkCreateTreeCollection<T>({
    nodeToString: (node) => node.name,
    nodeToValue: (node) => node.id,
    ...options,
  });

export const createFileIcons = <T extends Record<`.${string}`, unknown>>(
  args: T,
) => ({ ...args });
