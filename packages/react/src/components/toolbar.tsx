import { ark } from "@ark-ui/react";
import type { ToolbarContract, ToolbarRootContract } from "@pisagor/contracts";
import { toolbarRecipe } from "@pisagor/recipes";
import { handleRovingFocusKeyDown } from "@pisagor/utils";
import type { ComponentProps, KeyboardEvent, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Toolbar",
  recipe: toolbarRecipe,
});
// #endregion

// #region Parts
export const ToolbarRoot = withProvider<
  ComponentProps<"div"> & ToolbarRootContract
>("div", { name: "Root" });

export const ToolbarHeading = withContext<ComponentProps<"div">>("div", {
  name: "Heading",
});

export const ToolbarTitle = withContext<ComponentProps<typeof ark.h2>>(ark.h2, {
  name: "Title",
});

export const ToolbarDescription = withContext<ComponentProps<"p">>("p", {
  name: "Description",
});

export const ToolbarActions = withContext<ComponentProps<"div">>("div", {
  defaultProps: {
    "aria-orientation": "horizontal",
    onKeyDown: (event: KeyboardEvent<HTMLDivElement>) =>
      handleRovingFocusKeyDown(event.nativeEvent),
    role: "toolbar",
  },
  name: "Actions",
});
// #endregion

// #region Types
export type ToolbarRootProps = ComponentProps<typeof ToolbarRoot>;
export type ToolbarTitleProps = ComponentProps<typeof ToolbarTitle>;
export type ToolbarDescriptionProps = ComponentProps<typeof ToolbarDescription>;
export type ToolbarActionsProps = ComponentProps<typeof ToolbarActions>;

export interface ToolbarProps
  extends Omit<ToolbarRootProps, "children" | "title">, ToolbarContract {
  actions?: ReactNode;
  description?: ReactNode;
  title?: ReactNode;
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

export const Toolbar = Object.assign(ToolbarShorthand, {
  Actions: ToolbarActions,
  Description: ToolbarDescription,
  Heading: ToolbarHeading,
  Root: ToolbarRoot,
  Title: ToolbarTitle,
});
