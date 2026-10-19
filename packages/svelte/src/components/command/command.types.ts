import type { Component } from "svelte";

export interface CommandItem {
  /** Optional group heading. */
  group?: string;
  /** Leading icon component. */
  icon?: Component;
  /** Item label. */
  label: string;
  /** Keyboard shortcut hint. */
  shortcut?: string;
  /** Unique value. */
  value: string;
}
