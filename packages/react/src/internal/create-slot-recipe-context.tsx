import { createContext, createElement, use } from "react";
import type { ElementType, FunctionComponent } from "react";
import type { ClassValue, VariantProps } from "tailwind-variants";
import { useFormControlSurface } from "../components/surface/use-form-control-surface";

type SlotClassProps = {
  className?: ClassValue;
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
  /**
   * PascalCase part name (`Alert.Title`). Only required field — `slot` and
   * `part` are derived from this when omitted.
   */
  name: string;
  /**
   * Recipe slot. When omitted: `Root` → `base`, otherwise camelCase of `name`
   * (`ClearTrigger` → `clearTrigger`).
   */
  slot?: Slot;
  /**
   * `data-part` value. When omitted: `Root` → `root`, otherwise kebab-case of
   * `name` (`ClearTrigger` → `clear-trigger`).
   */
  part?: string;
  defaultProps?: Record<string, unknown>;
}

function variantKeysOf(recipe: SlotRecipeFn) {
  return (recipe.variantKeys ?? Object.keys(recipe.variants ?? {})).map(String);
}

function definedOnly(values: Record<string, unknown>) {
  const out: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(values)) {
    if (value !== undefined) out[key] = value;
  }

  return out;
}

function splitRecipeProps(
  props: Record<string, unknown>,
  recipe: SlotRecipeFn,
) {
  const keys = new Set(variantKeysOf(recipe));
  const variants: Record<string, unknown> = {};
  const rest: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(props)) {
    if (key === "recipe") continue;
    if (keys.has(key)) variants[key] = value;
    else rest[key] = value;
  }

  return { rest, variants: definedOnly(variants) };
}

export interface CreateSlotRecipeContextOptions<
  Name extends string,
  R extends SlotRecipeFn,
> {
  /** PascalCase component name (DevTools prefix; kebab-cased for `data-scope`). */
  name: Name;
  recipe: R;
}

function toKebabCase(value: string) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

/** PascalCase part name → recipe slot key (`ClearTrigger` → `clearTrigger`). */
function toCamelCase(value: string) {
  return value.charAt(0).toLowerCase() + value.slice(1);
}

export function createSlotRecipeContext<
  const Name extends string,
  R extends SlotRecipeFn,
>({ name, recipe: defaultRecipe }: CreateSlotRecipeContextOptions<Name, R>) {
  type Slots = ReturnType<R>;
  type Variants = RecipeVariantProps<R>;
  type Styles = SlotRecipeStyles<Slots, Variants>;
  type Slot = keyof Slots & string;

  const StylesContext = createContext<Styles | undefined>(undefined);
  const dataScope = toKebabCase(name);
  StylesContext.displayName = `${name}Context`;

  function resolveSlot(options: WithSlotRecipeOptions<Slot>) {
    return (options.slot ??
      (options.name === "Root" ? "base" : toCamelCase(options.name))) as Slot;
  }

  function resolvePart(options: WithSlotRecipeOptions<Slot>) {
    return (
      options.part ??
      (options.name === "Root" ? "root" : toKebabCase(options.name))
    );
  }

  /** `data-part` / `data-scope` always win over consumer props. */
  function dataIdentity(options: WithSlotRecipeOptions<Slot>) {
    return {
      "data-part": resolvePart(options),
      "data-scope": options.defaultProps?.["data-scope"] ?? dataScope,
    };
  }

  function useStyles() {
    const styles = use(StylesContext);

    if (styles === undefined) {
      throw new Error(`use${name} must be used within ${name}Context.`);
    }

    return styles;
  }

  /**
   * Styled root. Pass the full props type — nothing is inferred from the host
   * (`P` is optional and defaults to `{}`). `ref` is a normal React 19 prop on
   * `P` (use `ComponentProps<"tag">`):
   *
   * `withProvider<AlertRootProps>("div", { name: "Root", slot: "base" })`
   */
  function withProvider<P extends object = Record<never, never>>(
    Component: ElementType,
    options: WithSlotRecipeOptions<Slot>,
  ): FunctionComponent<P> {
    const partName = options.name;
    const slot = resolveSlot(options);

    function ProviderComponent(props: P) {
      const recipe = ((props as { recipe?: R }).recipe ?? defaultRecipe) as R;
      const { rest, variants } = splitRecipeProps(
        props as Record<string, unknown>,
        recipe,
      );
      const surfaceFromContext = useFormControlSurface();
      const recipeKeys = new Set(variantKeysOf(recipe));
      const resolved = {
        ...defaultRecipe.defaultVariants,
        ...recipe.defaultVariants,
        ...variants,
      } as Variants & { surfaceVariant?: unknown };

      if (
        recipeKeys.has("surfaceVariant") &&
        resolved.surfaceVariant === undefined
      ) {
        resolved.surfaceVariant = surfaceFromContext;
      }

      const slots = recipe(resolved as never) as Slots;
      const { className, ...dom } = rest as Record<string, unknown> & {
        className?: ClassValue;
      };
      const defaultClassName = options.defaultProps?.className as
        ClassValue | undefined;

      const dataAttrs: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(
        resolved as Record<string, unknown>,
      )) {
        if (value !== undefined) {
          dataAttrs[`data-${toKebabCase(key)}`] = value;
        }
      }

      return createElement(
        StylesContext,
        { value: { slots, variants: resolved } },
        createElement(Component, {
          ...dataAttrs,
          ...options.defaultProps,
          ...dom,
          ...dataIdentity(options),
          className: (slots[slot] as SlotFn)({
            className: [defaultClassName, className],
          }),
        }),
      );
    }

    ProviderComponent.displayName = `${name}.${partName}`;

    return ProviderComponent;
  }

  /**
   * Styled descendant. Same shape as `withProvider`; `P` is optional:
   *
   * `withContext<AlertTitleProps>("div", { name: "Title" })`
   * `withContext("div", { name: "Title" })`
   */
  function withContext<P extends object = Record<never, never>>(
    Component: ElementType,
    options: WithSlotRecipeOptions<Slot>,
  ): FunctionComponent<P> {
    const partName = options.name;
    const slot = resolveSlot(options);

    function SlotComponent(props: P) {
      const { slots } = useStyles();
      const { className, ...rest } = props as P & { className?: ClassValue };
      const defaultClassName = options.defaultProps?.className as
        ClassValue | undefined;

      return createElement(Component, {
        ...options.defaultProps,
        ...rest,
        ...dataIdentity(options),
        className: (slots[slot] as SlotFn)({
          className: [defaultClassName, className],
        }),
      });
    }

    SlotComponent.displayName = `${name}.${partName}`;

    return SlotComponent;
  }

  return {
    Context: StylesContext,
    useStyles,
    withContext,
    withProvider,
  };
}
