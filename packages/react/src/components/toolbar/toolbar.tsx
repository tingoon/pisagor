import { ark } from "@ark-ui/react/factory";
import { type ToolbarSlots, toolbarVariants } from "@pisagor/styles/ui/toolbar";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import type { VariantClassNames } from "../../internal/types";

// #region Types
type ToolbarTitleProps = ComponentProps<typeof ark.h2>;

type ToolbarDescriptionProps = ComponentProps<typeof ark.p>;

type ToolbarActionsProps = ComponentProps<typeof ark.div>;

type ToolbarClassNames = VariantClassNames<ToolbarSlots>;

type ToolbarRootProps = Omit<ComponentProps<typeof ark.div>, "title"> & {
  /** Slot class names */
  classNames?: ToolbarClassNames;
};

export interface ToolbarProps extends Omit<ToolbarRootProps, "children"> {
  /** Section heading. */
  title?: ReactNode;
  /** Supporting copy below the title. */
  description?: ReactNode;
  /** Trailing action buttons or controls. */
  actions?: ReactNode;
  /** Extra props forwarded to the title element */
  titleProps?: Omit<ToolbarTitleProps, "children" | "className">;
  /** Extra props forwarded to the description element */
  descriptionProps?: Omit<ToolbarDescriptionProps, "children" | "className">;
  /** Extra props forwarded to the actions element */
  actionsProps?: Omit<ToolbarActionsProps, "children" | "className">;
}

interface ToolbarPartProps extends ComponentProps<typeof ark.div> {
  /** Slot class names */
  classNames?: ToolbarClassNames;
}
// #endregion

// #region Parts
export function ToolbarRoot({ className, classNames, ...rest }: ToolbarRootProps) {
  const slots = toolbarVariants();

  return (
    <ark.div
      {...rest}
      className={slots.base({ className: className })}
      data-part="root"
      data-scope="toolbar"
    />
  );
}

export function ToolbarHeading({ className, classNames, ...rest }: ToolbarPartProps) {
  const slots = toolbarVariants();

  return (
    <ark.div
      {...rest}
      className={slots.heading({ className: cn(className, classNames?.heading) })}
      data-part="heading"
      data-scope="toolbar"
    />
  );
}

export function ToolbarTitle({ className, classNames, ...rest }: ToolbarPartProps) {
  const slots = toolbarVariants();

  return (
    <ark.h2
      {...rest}
      className={slots.title({ className: cn(className, classNames?.title) })}
      data-part="title"
      data-scope="toolbar"
    />
  );
}

export function ToolbarDescription({ className, classNames, ...rest }: ToolbarPartProps) {
  const slots = toolbarVariants();

  return (
    <ark.p
      {...rest}
      className={slots.description({ className: cn(className, classNames?.description) })}
      data-part="description"
      data-scope="toolbar"
    />
  );
}

export function ToolbarActions({ className, classNames, ...rest }: ToolbarPartProps) {
  const slots = toolbarVariants();

  return (
    <ark.div
      {...rest}
      className={slots.actions({ className: cn(className, classNames?.actions) })}
      data-part="actions"
      data-scope="toolbar"
    />
  );
}
// #endregion

// #region Shorthand
export function ToolbarShorthand({
  className,
  classNames,
  title,
  description,
  actions,
  titleProps,
  descriptionProps,
  actionsProps,
  ...rest
}: ToolbarProps) {
  const hasHeading = title !== undefined || description !== undefined;

  return (
    <ToolbarRoot {...rest} className={className} classNames={classNames}>
      {hasHeading && (
        <ToolbarHeading>
          {title !== undefined && <ToolbarTitle {...titleProps}>{title}</ToolbarTitle>}

          {description !== undefined && (
            <ToolbarDescription {...descriptionProps}>{description}</ToolbarDescription>
          )}
        </ToolbarHeading>
      )}

      {actions !== undefined && <ToolbarActions {...actionsProps}>{actions}</ToolbarActions>}
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
