import { ark } from "@ark-ui/solid/factory";
import type {
  FieldErrorTextProps,
  FieldHelperTextProps,
  FieldLabelProps,
  FieldRootProps as FieldPrimitiveRootProps,
} from "@ark-ui/solid/field";
import { Field as FieldPrimitive } from "@ark-ui/solid/field";
import {
  type FieldsetLegendProps,
  Fieldset as FieldsetPrimitive,
  type FieldsetRootProps,
} from "@ark-ui/solid/fieldset";
import type { FieldProps as BaseFieldProps } from "@pisagor/props";
import { fieldRecipe, formControlSeparatorRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { createMemo, Show, splitProps, useContext } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { Separator } from "./separator";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context: FieldStylesContext, withProvider } = createSlotRecipeContext({
  name: "Field",
  recipe: fieldRecipe,
});

/** Resolves recipe slots from the nearest Field/Group/Set, or a default recipe. */
export function useFieldSlots(recipe: typeof fieldRecipe = fieldRecipe) {
  const styles = useContext(FieldStylesContext);
  return () => styles?.slots ?? recipe();
}
// #endregion

export interface FieldRootProps
  extends FieldPrimitiveRootProps,
    BaseFieldProps {}

export type FieldProps = FieldRootProps;

export interface FieldLegendProps extends FieldsetLegendProps {
  variant?: "legend" | "label";
}

export interface FieldSetProps extends FieldsetRootProps, BaseFieldProps {}

export type FieldHelperProps = FieldHelperTextProps;
export type FieldErrorProps = FieldErrorTextProps;

export interface FieldGroupProps
  extends ComponentProps<typeof ark.div>,
    BaseFieldProps {}

export type FieldContentProps = ComponentProps<typeof ark.div>;
export type FieldRequiredIndicatorProps = ComponentProps<typeof ark.span>;
export type FieldTitleProps = ComponentProps<typeof ark.div>;
export type FieldDescriptionProps = ComponentProps<typeof ark.p>;
export type FieldSeparatorProps = ComponentProps<typeof ark.div>;

export const FieldRoot: Component<FieldRootProps> = withProvider(
  FieldPrimitive.Root,
  { name: "Root", slot: "base" },
);

function FieldSetElement(props: FieldsetRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useFieldSlots();
  return (
    <FieldsetPrimitive.Root
      {...rest}
      class={slots().set({ class: local.class })}
    />
  );
}

export function FieldSet(props: FieldSetProps): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe"]);
  const slots = createMemo(() => (local.recipe ?? fieldRecipe)());

  return (
    <FieldStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <FieldSetElement {...rest} />
    </FieldStylesContext>
  );
}

export function FieldLegend(props: FieldLegendProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "class"]);
  const slots = useFieldSlots();
  return (
    <FieldsetPrimitive.Legend
      {...rest}
      class={slots().legend({ class: local.class })}
      data-variant={local.variant ?? "legend"}
    />
  );
}

function FieldGroupElement(props: ComponentProps<typeof ark.div>): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useFieldSlots();
  return (
    <ark.div
      {...rest}
      class={slots().group({ class: local.class })}
      data-part="group"
      data-scope="field"
    />
  );
}

export function FieldGroup(props: FieldGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe"]);
  const slots = createMemo(() => (local.recipe ?? fieldRecipe)());

  return (
    <FieldStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <FieldGroupElement {...rest} />
    </FieldStylesContext>
  );
}

export function FieldContent(props: FieldContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useFieldSlots();
  return (
    <ark.div
      {...rest}
      class={slots().content({ class: local.class })}
      data-part="content"
      data-scope="field"
    />
  );
}

export function FieldLabel(props: FieldLabelProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useFieldSlots();
  return (
    <FieldPrimitive.Label
      {...rest}
      class={slots().label({ class: local.class })}
    />
  );
}

export function FieldRequiredIndicator(
  props: FieldRequiredIndicatorProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const slots = useFieldSlots();

  return (
    <FieldPrimitive.RequiredIndicator
      {...rest}
      aria-hidden
      class={slots().requiredIndicator({ class: local.class })}
    >
      {local.children ?? "*"}
    </FieldPrimitive.RequiredIndicator>
  );
}

export function FieldTitle(props: FieldTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useFieldSlots();
  return (
    <ark.div
      {...rest}
      class={slots().title({ class: local.class })}
      data-part="title"
      data-scope="field"
    />
  );
}

export function FieldDescription(props: FieldDescriptionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useFieldSlots();
  return (
    <ark.p
      {...rest}
      class={slots().description({ class: local.class })}
      data-part="description"
      data-scope="field"
    />
  );
}

export function FieldSeparator(props: FieldSeparatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const slots = useFieldSlots();
  const surfaceVariant = useFormControlSurface();

  return (
    <ark.div
      {...rest}
      class={slots().separator({ class: local.class })}
      data-content={!!local.children}
      data-part="separator"
      data-scope="field"
    >
      <Separator class={slots().inline()} />
      <Show when={!!local.children}>
        <span
          class={formControlSeparatorRecipe({
            surfaceVariant,
            variant: "primary",
          })}
        >
          {local.children}
        </span>
      </Show>
    </ark.div>
  );
}

export function FieldHelper(props: FieldHelperProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useFieldSlots();
  return (
    <FieldPrimitive.HelperText
      {...rest}
      class={slots().helper({ class: local.class })}
    />
  );
}

export function FieldError(props: FieldErrorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useFieldSlots();
  return (
    <FieldPrimitive.ErrorText
      {...rest}
      class={slots().error({ class: local.class })}
    />
  );
}

export type { FieldLabelProps } from "@ark-ui/solid/field";

export const Field = Object.assign(FieldRoot, {
  Content: FieldContent,
  Description: FieldDescription,
  Error: FieldError,
  Group: FieldGroup,
  Helper: FieldHelper,
  Label: FieldLabel,
  Legend: FieldLegend,
  RequiredIndicator: FieldRequiredIndicator,
  Separator: FieldSeparator,
  Set: FieldSet,
  Title: FieldTitle,
});
