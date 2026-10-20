import {
  type TreeCollection,
  createTreeCollection as arkCreateTreeCollection,
} from "@ark-ui/svelte";
import type { Component } from "svelte";

export interface TreeNodeType<T = unknown> {
  children?: TreeNodeType<T>[] | undefined;
  /** Open-folder icon for the shorthand (`null` hides it). */
  expandedIcon?: Component | null;
  /** Node icon for the shorthand (`null` hides it). */
  icon?: Component | null;
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

export const createFileIcons = (
  args: Record<`.${string}`, Component | null>,
) => ({ ...args });
