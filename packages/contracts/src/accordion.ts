import type {
  AccordionItemRecipeFn,
  AccordionItemRecipeSlot,
  AccordionItemVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

export interface AccordionPresetItem {
  value: string;
  /** Panel title. */
  title: unknown;
  /** Panel body. */
  content: unknown;
  disabled?: boolean;
}

/**
 * Shared Accordion root contract: visual variants. Used by compound roots;
 * excludes host DOM attributes. (Item recipe owns the style override.)
 */
export type AccordionRootContract = AccordionItemVariantProps;

/**
 * Accordion shorthand content contract. Compose with `AccordionRootContract` /
 * framework `AccordionRootProps` — do not extend the root here so root fields
 * are not applied twice. Content fields stay `unknown` so consumers can narrow
 * them.
 */
export interface AccordionContract {
  /** Shorthand items (Root + Item + Trigger + Content). */
  items?: AccordionPresetItem[];
}

/**
 * Shared AccordionItem root contract: visual variants and recipe override. Used
 * by compound roots; excludes host DOM attributes.
 */
export interface AccordionItemRootContract extends AccordionItemVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue accordionItemRecipe
   */
  recipe?: AccordionItemRecipeFn;
}

/**
 * AccordionItem shorthand content contract. Compose with
 * `AccordionItemRootContract` / framework `AccordionItemRootProps` — do not
 * extend the root here so root fields are not applied twice.
 */
export interface AccordionItemContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<AccordionItemRecipeSlot>;
}
