import type { ClassValue, VariantProps } from "tailwind-variants";

type SlotClassProps = {
  class?: ClassValue;
};

type SlotFn = (slotProps?: SlotClassProps) => string;

export type SlotRecipeFn = ((
  props?: Record<string, unknown>,
) => Record<string, SlotFn>) & {
  defaultVariants?: Record<string, unknown>;
  variantKeys?: ReadonlyArray<string | number>;
  variants?: Record<string, unknown>;
};

export interface SlotRecipeStyles<
  Slots extends Record<string, SlotFn>,
  Variants,
> {
  slots: Slots;
  variants: Variants;
}

type RecipeVariantProps<R extends SlotRecipeFn> =
  string extends keyof VariantProps<R> ? Record<never, never> : VariantProps<R>;

export interface WithSlotRecipeOptions<Slot extends string = string> {
  /** PascalCase part name (`Alert.Title`). */
  name: string;
  /** Recipe slot; defaults to kebab-case of `name` (`Root` → `base`). */
  slot?: Slot;
  /** Attributes applied before consumer props (consumer wins); `class` merges. */
  defaultProps?: Record<string, unknown>;
}

/** Attributes a styled part spreads onto its host element. */
export type SlotHostProps<P> = Omit<P, "class" | "recipe"> & {
  class: string;
  "data-part": string;
  "data-scope": string;
};

/** Host attributes returned by `withProvider` / `withContext`. */
export interface SlotHost<P> {
  props: SlotHostProps<P>;
}

export interface CreateSlotRecipeContextOptions<
  Name extends string,
  R extends SlotRecipeFn,
> {
  /** PascalCase component name (kebab-cased for `data-scope`). */
  name: Name;
  recipe: R;
}

function variantKeysOf(recipe: SlotRecipeFn) {
  return (recipe.variantKeys ?? Object.keys(recipe.variants ?? {})).map(String);
}

function toKebabCase(value: string) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

function dataPartOf(slot: string) {
  return slot === "base" ? "root" : slot;
}

/**
 * Slot-recipe helper for compound Astro components — same `{ name, recipe }`
 * / `withProvider` / `withContext` / `useStyles` surface as React / Solid /
 * Vue / Svelte `createSlotRecipeContext`, so every part emits the same
 * `data-scope` / `data-part` / variant `data-*` and recipe classes.
 *
 * Astro has no component context (parents cannot pass values to slotted
 * children), so there is no runtime provider: `withProvider` resolves the
 * root's variants and `recipe` override for the root element only, and
 * `withContext` / `useStyles` read the recipe's default-variant slots.
 * Shared recipes keep variant styling on the root slot (descendant slots are
 * variant-independent, or take their own variant prop such as `Card.Media`),
 * so the emitted classes match the context-backed frameworks.
 *
 * Call once in the part frontmatter with `Astro.props` and spread the result:
 *
 * ```astro
 * ---
 * const root = withProvider(Astro.props, { name: "Root", slot: "base" });
 * ---
 * <div {...root.props}><slot /></div>
 * ```
 */
export function createSlotRecipeContext<
  const Name extends string,
  R extends SlotRecipeFn,
>({ name, recipe: defaultRecipe }: CreateSlotRecipeContextOptions<Name, R>) {
  type Slots = ReturnType<R>;
  type Variants = RecipeVariantProps<R>;
  type Styles = SlotRecipeStyles<Slots, Variants>;
  type Slot = keyof Slots & string;

  const dataScope = toKebabCase(name);
  const variantKeys = new Set(variantKeysOf(defaultRecipe));
  const defaultVariants = { ...defaultRecipe.defaultVariants } as Variants;
  const defaultStyles: Styles = {
    slots: defaultRecipe(defaultVariants as never) as Slots,
    variants: defaultVariants,
  };

  function slotOf(options: WithSlotRecipeOptions<Slot>): Slot {
    return (options.slot ??
      (options.name === "Root" ? "base" : toKebabCase(options.name))) as Slot;
  }

  /** Default-variant styles for hand-written parts (no runtime context). */
  function useStyles(): Styles {
    return defaultStyles;
  }

  function hostProps<P extends object>(
    input: P,
    slot: Slot,
    slots: Slots,
    options: WithSlotRecipeOptions<Slot>,
    dataAttrs: Record<string, unknown> = {},
  ): SlotHostProps<P> {
    const rest: Record<string, unknown> = {};

    for (const [prop, value] of Object.entries(input)) {
      if (prop === "class" || prop === "recipe") continue;
      rest[prop] = value;
    }

    const className = (input as { class?: ClassValue }).class;
    const { class: defaultClass, ...defaultProps } = options.defaultProps ?? {};

    return {
      "data-part": dataPartOf(slot),
      "data-scope": dataScope,
      ...dataAttrs,
      ...defaultProps,
      ...rest,
      class: (slots[slot] as SlotFn)({
        class: [defaultClass as ClassValue, className],
      }),
    } as SlotHostProps<P>;
  }

  /**
   * Styled root: consumes variant props and `recipe`, emits variant `data-*`.
   * Returns the root's resolved `styles` for hand-written markup in the same
   * component.
   */
  function withProvider<P extends object>(
    props: P,
    options: WithSlotRecipeOptions<Slot>,
  ): SlotHost<Omit<P, keyof Variants>> & { styles: Styles } {
    const recipe = ((props as { recipe?: R }).recipe ?? defaultRecipe) as R;
    const variants: Record<string, unknown> = {
      ...defaultRecipe.defaultVariants,
      ...recipe.defaultVariants,
    };
    const rest: Record<string, unknown> = {};

    for (const [prop, value] of Object.entries(props)) {
      if (prop === "recipe") continue;
      if (variantKeys.has(prop)) {
        if (value !== undefined) variants[prop] = value;
      } else {
        rest[prop] = value;
      }
    }

    const slots = recipe(variants as never) as Slots;
    const dataAttrs: Record<string, unknown> = {};

    for (const [prop, value] of Object.entries(variants)) {
      if (value !== undefined) dataAttrs[`data-${toKebabCase(prop)}`] = value;
    }

    return {
      props: hostProps(
        rest as Omit<P, keyof Variants>,
        slotOf(options),
        slots,
        options,
        dataAttrs,
      ),
      styles: { slots, variants: variants as Variants },
    };
  }

  /** Styled descendant part (recipe default-variant slot classes). */
  function withContext<P extends object>(
    props: P,
    options: WithSlotRecipeOptions<Slot>,
  ): SlotHost<P> {
    return {
      props: hostProps(props, slotOf(options), defaultStyles.slots, options),
    };
  }

  return {
    useStyles,
    withContext,
    withProvider,
  };
}
