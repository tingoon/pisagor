import { ark } from "@ark-ui/react/factory";
import { type EmptyStateSlots, emptyStateVariants } from "@pisagor/recipes/empty-state";
import type { ComponentProps, ReactNode } from "react";
import type { VariantClassNames } from "../../internal/types";
import { EmptyStateContext, useEmptyState } from "./empty-state.context";

// #region Types
type EmptyStateTitleProps = ComponentProps<typeof ark.h3>;

type EmptyStateDescriptionProps = ComponentProps<typeof ark.p>;

type EmptyStateActionsProps = ComponentProps<typeof ark.div>;

type EmptyStateMediaProps = ComponentProps<typeof ark.div>;

type EmptyStateClassNames = VariantClassNames<EmptyStateSlots>;

type EmptyStateRootProps = Omit<ComponentProps<typeof ark.div>, "title">;

export interface EmptyStateProps extends Omit<EmptyStateRootProps, "children"> {
  /** Action buttons or links. */
  actions?: ReactNode;
  /** Supporting copy. */
  description?: ReactNode;
  /** Icon or illustration shown above the title. */
  media?: ReactNode;
  /** Primary heading. */
  title?: ReactNode;
  /** Slot class names */
  classNames?: EmptyStateClassNames;
  /** Extra props forwarded to the actions element */
  actionsProps?: Omit<EmptyStateActionsProps, "children" | "className">;
  /** Extra props forwarded to the description element */
  descriptionProps?: Omit<EmptyStateDescriptionProps, "children" | "className">;
  /** Extra props forwarded to the media element */
  mediaProps?: Omit<EmptyStateMediaProps, "children" | "className">;
  /** Extra props forwarded to the title element */
  titleProps?: Omit<EmptyStateTitleProps, "children" | "className">;
}
// #endregion

// #region Parts
export function EmptyStateRoot({ children, className, ...rest }: EmptyStateRootProps) {
  const slots = emptyStateVariants();

  return (
    <EmptyStateContext value={{ slots }}>
      <ark.div
        {...rest}
        className={slots.base({ className })}
        data-part="root"
        data-scope="empty-state"
      >
        {children}
      </ark.div>
    </EmptyStateContext>
  );
}

export function EmptyStateMedia({ className, ...rest }: EmptyStateMediaProps) {
  const { slots } = useEmptyState();

  return (
    <ark.div
      {...rest}
      className={slots.media({ className })}
      data-part="media"
      data-scope="empty-state"
    />
  );
}

export function EmptyStateTitle({ className, ...rest }: EmptyStateTitleProps) {
  const { slots } = useEmptyState();

  return (
    <ark.h3
      {...rest}
      className={slots.title({ className })}
      data-part="title"
      data-scope="empty-state"
    />
  );
}

export function EmptyStateDescription({ className, ...rest }: EmptyStateDescriptionProps) {
  const { slots } = useEmptyState();

  return (
    <ark.p
      {...rest}
      className={slots.description({ className })}
      data-part="description"
      data-scope="empty-state"
    />
  );
}

export function EmptyStateActions({ className, ...rest }: EmptyStateActionsProps) {
  const { slots } = useEmptyState();

  return (
    <ark.div
      {...rest}
      className={slots.actions({ className })}
      data-part="actions"
      data-scope="empty-state"
    />
  );
}
// #endregion

// #region Shorthand
export function EmptyStateShorthand({
  actions,
  actionsProps,
  description,
  descriptionProps,
  media,
  mediaProps,
  title,
  titleProps,
  className,
  classNames,
  ...rest
}: EmptyStateProps) {
  return (
    <EmptyStateRoot {...rest} className={className}>
      {media !== undefined && (
        <EmptyStateMedia {...mediaProps} className={classNames?.media}>
          {media}
        </EmptyStateMedia>
      )}

      {title !== undefined && (
        <EmptyStateTitle {...titleProps} className={classNames?.title}>
          {title}
        </EmptyStateTitle>
      )}

      {description !== undefined && (
        <EmptyStateDescription {...descriptionProps} className={classNames?.description}>
          {description}
        </EmptyStateDescription>
      )}

      {actions !== undefined && (
        <EmptyStateActions {...actionsProps} className={classNames?.actions}>
          {actions}
        </EmptyStateActions>
      )}
    </EmptyStateRoot>
  );
}
// #endregion

// #region Display Names
EmptyStateRoot.displayName = "EmptyState.Root";
EmptyStateMedia.displayName = "EmptyState.Media";
EmptyStateTitle.displayName = "EmptyState.Title";
EmptyStateDescription.displayName = "EmptyState.Description";
EmptyStateActions.displayName = "EmptyState.Actions";
EmptyStateShorthand.displayName = "EmptyState";
// #endregion
