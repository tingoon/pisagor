import { ark } from "@ark-ui/react/factory";
import type { ToolbarProps as BaseToolbarRootProps } from "@pisagor/props";
import { type ToolbarRecipeSlot, toolbarRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Toolbar",
  recipe: toolbarRecipe,
});
// #endregion

// #region Parts
export const ToolbarRoot = withProvider(ark.div, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<
  Omit<ComponentProps<typeof ark.div>, "title"> & BaseToolbarRootProps
>;

export const ToolbarHeading = withContext(ark.div, {
  name: "Heading",
});

export const ToolbarTitle = withContext(ark.h2, {
  name: "Title",
});

export const ToolbarDescription = withContext(ark.p, {
  name: "Description",
});

export const ToolbarActions = withContext(ark.div, {
  name: "Actions",
});
// #endregion

// #region Types
type ToolbarClassNames = VariantClassNames<ToolbarRecipeSlot>;

export type ToolbarRootProps = ComponentProps<typeof ToolbarRoot>;
export type ToolbarTitleProps = ComponentProps<typeof ToolbarTitle>;
export type ToolbarDescriptionProps = ComponentProps<typeof ToolbarDescription>;
export type ToolbarActionsProps = ComponentProps<typeof ToolbarActions>;

export interface ToolbarProps extends Omit<ToolbarRootProps, "children"> {
  /** Trailing action buttons or controls. */
  actions?: ReactNode;
  /** Supporting copy below the title. */
  description?: ReactNode;
  /** Section heading. */
  title?: ReactNode;
  /** Slot class names */
  classNames?: ToolbarClassNames;
  /** Extra props forwarded to the actions element */
  actionsProps?: Omit<ToolbarActionsProps, "children" | "className">;
  /** Extra props forwarded to the description element */
  descriptionProps?: Omit<ToolbarDescriptionProps, "children" | "className">;
  /** Extra props forwarded to the title element */
  titleProps?: Omit<ToolbarTitleProps, "children" | "className">;
}
// #endregion

// #region Shorthand
export function ToolbarShorthand({
  actions,
  actionsProps,
  description,
  descriptionProps,
  title,
  titleProps,
  className,
  classNames,
  ...rest
}: ToolbarProps) {
  const hasHeading = title !== undefined || description !== undefined;

  return (
    <ToolbarRoot {...rest} className={className}>
      {hasHeading && (
        <ToolbarHeading className={classNames?.heading}>
          {title !== undefined && (
            <ToolbarTitle {...titleProps} className={classNames?.title}>
              {title}
            </ToolbarTitle>
          )}

          {description !== undefined && (
            <ToolbarDescription
              {...descriptionProps}
              className={classNames?.description}
            >
              {description}
            </ToolbarDescription>
          )}
        </ToolbarHeading>
      )}

      {actions !== undefined && (
        <ToolbarActions {...actionsProps} className={classNames?.actions}>
          {actions}
        </ToolbarActions>
      )}
    </ToolbarRoot>
  );
}
// #endregion

// #region Display Names
ToolbarShorthand.displayName = "Toolbar";
// #endregion

export const Toolbar = Object.assign(ToolbarShorthand, {
  Actions: ToolbarActions,
  Description: ToolbarDescription,
  Heading: ToolbarHeading,
  Root: ToolbarRoot,
  Title: ToolbarTitle,
});
