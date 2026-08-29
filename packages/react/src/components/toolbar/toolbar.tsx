import { ark } from "@ark-ui/react/factory";
import { type ToolbarSlots, toolbarRecipe } from "@pisagor/recipes/toolbar";
import type { ComponentProps, ReactNode } from "react";
import type { VariantClassNames } from "../../internal/types";
import { ToolbarContext, useToolbar } from "./toolbar.context";

// #region Types
type ToolbarTitleProps = ComponentProps<typeof ark.h2>;

type ToolbarDescriptionProps = ComponentProps<typeof ark.p>;

type ToolbarActionsProps = ComponentProps<typeof ark.div>;

type ToolbarHeadingProps = ComponentProps<typeof ark.div>;

type ToolbarClassNames = VariantClassNames<ToolbarSlots>;

type ToolbarRootProps = Omit<ComponentProps<typeof ark.div>, "title">;

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

// #region Parts
export function ToolbarRoot({ children, className, ...rest }: ToolbarRootProps) {
  const slots = toolbarRecipe();

  return (
    <ToolbarContext value={{ slots }}>
      <ark.div
        {...rest}
        className={slots.base({ className })}
        data-part="root"
        data-scope="toolbar"
      >
        {children}
      </ark.div>
    </ToolbarContext>
  );
}

export function ToolbarHeading({ className, ...rest }: ToolbarHeadingProps) {
  const { slots } = useToolbar();

  return (
    <ark.div
      {...rest}
      className={slots.heading({ className })}
      data-part="heading"
      data-scope="toolbar"
    />
  );
}

export function ToolbarTitle({ className, ...rest }: ToolbarTitleProps) {
  const { slots } = useToolbar();

  return (
    <ark.h2
      {...rest}
      className={slots.title({ className })}
      data-part="title"
      data-scope="toolbar"
    />
  );
}

export function ToolbarDescription({ className, ...rest }: ToolbarDescriptionProps) {
  const { slots } = useToolbar();

  return (
    <ark.p
      {...rest}
      className={slots.description({ className })}
      data-part="description"
      data-scope="toolbar"
    />
  );
}

export function ToolbarActions({ className, ...rest }: ToolbarActionsProps) {
  const { slots } = useToolbar();

  return (
    <ark.div
      {...rest}
      className={slots.actions({ className })}
      data-part="actions"
      data-scope="toolbar"
    />
  );
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
            <ToolbarDescription {...descriptionProps} className={classNames?.description}>
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
ToolbarRoot.displayName = "Toolbar.Root";
ToolbarHeading.displayName = "Toolbar.Heading";
ToolbarTitle.displayName = "Toolbar.Title";
ToolbarDescription.displayName = "Toolbar.Description";
ToolbarActions.displayName = "Toolbar.Actions";
ToolbarShorthand.displayName = "Toolbar";
// #endregion
