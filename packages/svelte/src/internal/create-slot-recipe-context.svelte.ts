import { cn } from "@pisagor/utils";
import { getContext, hasContext, setContext } from "svelte";
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

/**
 * Styles exposed through context. Provide getters (derived-backed) and read
 * them in markup / tracked scopes (do not destructure once) to stay reactive.
 */
export interface SlotRecipeStyles<
  Slots extends Record<string, SlotFn>,
  Variants,
> {
  readonly slots: Slots;
  readonly variants: Partial<Variants>;
}

/** `Context.set` input — `variants` is optional for hand-written roots. */
export interface SlotRecipeStylesInput<
  Slots extends Record<string, SlotFn>,
  Variants,
> {
  readonly slots: Slots;
  readonly variants?: Partial<Variants>;
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
export type SlotHostProps<P> = Omit<P, "class" | "children" | "recipe"> & {
  class: string;
  "data-part": string;
  "data-scope": string;
};

/** Reactive host attributes returned by `withProvider` / `withContext`. */
export interface SlotHost<P> {
  readonly props: SlotHostProps<P>;
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
 * Slot-recipe styles context for compound Svelte components (same model as
 * React / Solid `createSlotRecipeContext`).
 *
 * Call `withProvider(() => rest, { name: "Root" })` / `withContext(() => rest,
 * { name: "Title" })` once in the part `<script>` with a getter over `$props()`
 * (typically after peeling `children`). The returned `host.props` spreads onto
 * a native or Ark host and emits `data-scope` / `data-part` + variant `data-*`.
 * Hand-written parts use `Context.set` / `useStyles`.
 */
export function createSlotRecipeContext<
  const Name extends string,
  R extends SlotRecipeFn,
>({ name, recipe: defaultRecipe }: CreateSlotRecipeContextOptions<Name, R>) {
  type Styles = SlotRecipeStyles<ReturnType<R>, RecipeVariantProps<R>>;
  type Slot = keyof ReturnType<R> & string;
  type Variants = RecipeVariantProps<R>;
  type Slots = ReturnType<R>;

  const key = Symbol(`${name}Context`);
  const dataScope = toKebabCase(name);
  const variantKeys = variantKeysOf(defaultRecipe);

  function slotOf(options: WithSlotRecipeOptions<Slot>): Slot {
    return (options.slot ??
      (options.name === "Root" ? "base" : toKebabCase(options.name))) as Slot;
  }

  /**
   * Low-level access: `Context.set(styles)` provides (pass getters to stay
   * reactive); `Context.get()` is an optional read (`undefined` outside).
   */
  const Context = {
    get(): Styles | undefined {
      return hasContext(key) ? getContext<Styles>(key) : undefined;
    },
    set(value: SlotRecipeStylesInput<Slots, Variants>): Styles {
      return setContext<Styles>(key, {
        get slots() {
          return value.slots;
        },
        get variants() {
          return value.variants ?? {};
        },
      });
    },
  };

  function useStyles(): Styles {
    const styles = Context.get();

    if (styles === undefined) {
      throw new Error(`use${name} must be used within ${name}Context.`);
    }

    return styles;
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
      if (prop === "class" || prop === "children" || prop === "recipe")
        continue;
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
        class: cn(defaultClass as ClassValue, className),
      }),
    } as SlotHostProps<P>;
  }

  /**
   * Styled root: provides styles to descendants. Pass a getter over the part's
   * `$props()` (minus `children`); variant keys and `recipe` are consumed.
   */
  function withProvider<P extends object>(
    props: () => P,
    options: WithSlotRecipeOptions<Slot>,
  ): SlotHost<Omit<P, keyof Variants | "recipe">> & {
    readonly styles: Styles;
  } {
    const slot = slotOf(options);

    const split = $derived.by(() => {
      const variants: Record<string, unknown> = {};
      const rest: Record<string, unknown> = {};

      for (const [prop, value] of Object.entries(props())) {
        if (prop === "recipe") continue;
        if (variantKeys.includes(prop)) {
          if (value !== undefined) variants[prop] = value;
        } else {
          rest[prop] = value;
        }
      }

      return {
        rest: rest as Omit<P, keyof Variants | "recipe">,
        variants,
      };
    });
    const recipe = $derived(
      ((props() as { recipe?: R }).recipe ?? defaultRecipe) as R,
    );
    const variants = $derived({
      ...defaultRecipe.defaultVariants,
      ...recipe.defaultVariants,
      ...split.variants,
    } as Variants);
    const slots = $derived(recipe(variants as never) as Slots);
    const dataAttrs = $derived.by(() => {
      const attrs: Record<string, unknown> = {};

      for (const [prop, value] of Object.entries(
        variants as Record<string, unknown>,
      )) {
        if (value !== undefined) attrs[`data-${toKebabCase(prop)}`] = value;
      }

      return attrs;
    });
    const host = $derived(
      hostProps(split.rest, slot, slots, options, dataAttrs),
    );

    const styles = Context.set({
      get slots() {
        return slots;
      },
      get variants() {
        return variants;
      },
    });

    return {
      get props() {
        return host;
      },
      styles,
    };
  }

  /** Styled descendant part reading `slot` from the nearest provider. */
  function withContext<P extends object>(
    props: () => P,
    options: WithSlotRecipeOptions<Slot>,
  ): SlotHost<P> {
    const styles = useStyles();
    const slot = slotOf(options);
    const host = $derived(hostProps(props(), slot, styles.slots, options));

    return {
      get props() {
        return host;
      },
    };
  }

  return {
    Context,
    useStyles,
    withContext,
    withProvider,
  };
}
