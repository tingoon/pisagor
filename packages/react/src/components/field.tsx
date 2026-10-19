import {
  Field as FieldPrimitive,
  Fieldset as FieldsetPrimitive,
} from "@ark-ui/react";
import type {
  FieldErrorTextProps,
  FieldHelperTextProps,
  FieldLabelProps,
  FieldRootProps as FieldRootPrimitiveProps,
  FieldsetLegendProps,
  FieldsetRootProps,
} from "@ark-ui/react";
import type { FieldRootContract } from "@pisagor/contracts";
import { fieldRecipe, formControlSeparatorRecipe } from "@pisagor/recipes";
import type {
  ComponentProps,
  ComponentPropsWithRef,
  FunctionComponent,
} from "react";
import { use } from "react";
import { createSlotRecipeContext } from "../internal";
import { Separator } from "./separator";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context: FieldStylesContext, withProvider } = createSlotRecipeContext({
  name: "Field",
  recipe: fieldRecipe,
});

/** Resolves recipe slots from the nearest Field/Group/Set, or a default recipe. */
export function useFieldSlots(recipe: typeof fieldRecipe = fieldRecipe) {
  const styles = use(FieldStylesContext);

  return styles?.slots ?? recipe();
}
// #endregion

// #region Types
export interface FieldRootProps
  extends FieldRootPrimitiveProps, FieldRootContract {}

export type FieldProps = FieldRootProps;

export interface FieldLegendProps extends FieldsetLegendProps {
  /** The variant of the legend. */
  variant?: "legend" | "label";
}

export interface FieldSetProps extends FieldsetRootProps, FieldRootContract {}

export type FieldHelperProps = FieldHelperTextProps;

export type FieldErrorProps = FieldErrorTextProps;

export interface FieldGroupProps
  extends ComponentPropsWithRef<"div">, FieldRootContract {}

export type FieldContentProps = ComponentPropsWithRef<"div">;

export type FieldRequiredIndicatorProps = ComponentPropsWithRef<"span">;

export type FieldTitleProps = ComponentPropsWithRef<"div">;

export type FieldDescriptionProps = ComponentProps<
  typeof FieldPrimitive.HelperText
>;

export type FieldSeparatorProps = ComponentPropsWithRef<"div">;
// #endregion

// #region Parts
export const FieldRoot = withProvider<FieldRootContract>(FieldPrimitive.Root, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<FieldRootProps>;

export function FieldSet({
  children,
  recipe = fieldRecipe,
  className,
  ...rest
}: FieldSetProps) {
  const slots = recipe();

  return (
    <FieldStylesContext value={{ slots, variants: {} as never }}>
      <FieldsetPrimitive.Root {...rest} className={slots.set({ className })}>
        {children}
      </FieldsetPrimitive.Root>
    </FieldStylesContext>
  );
}

export function FieldLegend({
  variant = "legend",
  className,
  ...rest
}: FieldLegendProps) {
  const slots = useFieldSlots();

  return (
    <FieldsetPrimitive.Legend
      {...rest}
      className={slots.legend({ className })}
      data-variant={variant}
    />
  );
}

export function FieldGroup({
  children,
  recipe = fieldRecipe,
  className,
  ...rest
}: FieldGroupProps) {
  const slots = recipe();

  return (
    <FieldStylesContext value={{ slots, variants: {} as never }}>
      <div
        {...rest}
        className={slots.group({ className })}
        data-part="group"
        data-scope="field"
      >
        {children}
      </div>
    </FieldStylesContext>
  );
}

export function FieldContent({ className, ...rest }: FieldContentProps) {
  const slots = useFieldSlots();

  return (
    <div
      {...rest}
      className={slots.content({ className })}
      data-part="content"
      data-scope="field"
    />
  );
}

export function FieldLabel({ className, ...rest }: FieldLabelProps) {
  const slots = useFieldSlots();

  return (
    <FieldPrimitive.Label {...rest} className={slots.label({ className })} />
  );
}

export function FieldRequiredIndicator({
  children,
  className,
  ...rest
}: FieldRequiredIndicatorProps) {
  const slots = useFieldSlots();

  return (
    <FieldPrimitive.RequiredIndicator
      {...rest}
      aria-hidden
      className={slots.requiredIndicator({ className })}
    >
      {children ?? "*"}
    </FieldPrimitive.RequiredIndicator>
  );
}

export function FieldTitle({ className, ...rest }: FieldTitleProps) {
  const slots = useFieldSlots();

  return (
    <div
      {...rest}
      className={slots.title({ className })}
      data-part="title"
      data-scope="field"
    />
  );
}

export function FieldDescription({
  className,
  ...rest
}: FieldDescriptionProps) {
  const slots = useFieldSlots();

  return (
    <FieldPrimitive.HelperText
      {...rest}
      className={slots.description({ className })}
      data-part="description"
      data-scope="field"
    />
  );
}

export function FieldSeparator({
  children,
  className,
  ...rest
}: FieldSeparatorProps) {
  const slots = useFieldSlots();
  const surfaceVariant = useFormControlSurface();

  return (
    <div
      {...rest}
      className={slots.separator({ className })}
      data-content={!!children}
      data-part="separator"
      data-scope="field"
    >
      <Separator className={slots.inline()} />

      {!!children && (
        <span
          className={formControlSeparatorRecipe({
            surfaceVariant,
            variant: "primary",
          })}
        >
          {children}
        </span>
      )}
    </div>
  );
}

export function FieldHelper({ className, ...rest }: FieldHelperProps) {
  const slots = useFieldSlots();

  return (
    <FieldPrimitive.HelperText
      {...rest}
      className={slots.helper({ className })}
    />
  );
}

export function FieldError({ className, ...rest }: FieldErrorProps) {
  const slots = useFieldSlots();

  return (
    <FieldPrimitive.ErrorText
      {...rest}
      className={slots.error({ className })}
    />
  );
}
// #endregion

// #region Display Names
FieldSet.displayName = "Field.Set";
FieldLegend.displayName = "Field.Legend";
FieldGroup.displayName = "Field.Group";
FieldContent.displayName = "Field.Content";
FieldLabel.displayName = "Field.Label";
FieldRequiredIndicator.displayName = "Field.RequiredIndicator";
FieldTitle.displayName = "Field.Title";
FieldDescription.displayName = "Field.Description";
FieldSeparator.displayName = "Field.Separator";
FieldHelper.displayName = "Field.Helper";
FieldError.displayName = "Field.Error";

// #endregion

export type { FieldLabelProps } from "@ark-ui/react";

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
