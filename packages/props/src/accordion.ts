import type { AccordionItemRecipeFn } from "@pisagor/recipes/accordion";

export interface AccordionPresetItem {
  value: string;
  /** Panel title. */
  title: unknown;
  /** Panel body. */
  content: unknown;
  disabled?: boolean;
}

export interface AccordionProps {
  /** Shorthand items (Root + Item + Trigger + Content). */
  items?: AccordionPresetItem[];
  /** Uncontrolled open values. */
  defaultValue?: string[];
  /** Controlled open values. */
  value?: string[];
  /**
   * Allow more than one item open.
   * @defaultValue false
   */
  multiple?: boolean;
  /**
   * Allow closing the open item in single mode.
   * @defaultValue true
   */
  collapsible?: boolean;
  /**
   * Disable the accordion.
   * @defaultValue false
   */
  disabled?: boolean;
}

export interface AccordionItemProps {
  /**
   * Style recipe override.
   * @defaultValue accordionItemRecipe
   */
  recipe?: AccordionItemRecipeFn;
}
