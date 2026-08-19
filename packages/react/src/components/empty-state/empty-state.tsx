import { ark } from "@ark-ui/react/factory";
import { emptyStateVariants } from "@pisagor/styles/ui/empty-state";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import type { VariantClassNames, WithTestId } from "../../internal/types";

// #region Variants

// #endregion

// #region Types
type EmptyStateTitleProps = ComponentProps<typeof ark.h3>;

type EmptyStateDescriptionProps = ComponentProps<typeof ark.p>;

type EmptyStateActionsProps = ComponentProps<typeof ark.div>;

type EmptyStateMediaProps = ComponentProps<typeof ark.div>;

type EmptyStateClassNames = VariantClassNames<typeof emptyStateVariants>;

type EmptyStateRootProps = Omit<ComponentProps<typeof ark.div>, "title"> &
  WithTestId & {
    /** Slot class names */
    classNames?: EmptyStateClassNames;
  };

export interface EmptyStateProps extends Omit<EmptyStateRootProps, "children"> {
  /** Icon or illustration shown above the title. */
  media?: ReactNode;
  /** Primary heading. */
  title?: ReactNode;
  /** Supporting copy. */
  description?: ReactNode;
  /** Action buttons or links. */
  actions?: ReactNode;
  /** Extra props forwarded to the media element */
  mediaProps?: Omit<EmptyStateMediaProps, "children" | "className">;
  /** Extra props forwarded to the title element */
  titleProps?: Omit<EmptyStateTitleProps, "children" | "className">;
  /** Extra props forwarded to the description element */
  descriptionProps?: Omit<EmptyStateDescriptionProps, "children" | "className">;
  /** Extra props forwarded to the actions element */
  actionsProps?: Omit<EmptyStateActionsProps, "children" | "className">;
}

interface EmptyStatePartProps extends ComponentProps<typeof ark.div> {
  /** Slot class names */
  classNames?: EmptyStateClassNames;
}
// #endregion

// #region Components
export function EmptyStateRoot({ className, classNames, testId, ...rest }: EmptyStateRootProps) {
  const slots = emptyStateVariants();

  return (
    <ark.div
      {...rest}
      className={cn(slots.root(), className, classNames?.root)}
      data-part="root"
      data-scope="empty-state"
      data-testid={testId}
    />
  );
}
EmptyStateRoot.displayName = "EmptyState.Root";

export function EmptyStateMedia({ className, classNames, ...rest }: EmptyStatePartProps) {
  const slots = emptyStateVariants();

  return (
    <ark.div
      {...rest}
      className={cn(slots.media(), className, classNames?.media)}
      data-part="media"
      data-scope="empty-state"
    />
  );
}
EmptyStateMedia.displayName = "EmptyState.Media";

export function EmptyStateTitle({ className, classNames, ...rest }: EmptyStatePartProps) {
  const slots = emptyStateVariants();

  return (
    <ark.h3
      {...rest}
      className={cn(slots.title(), className, classNames?.title)}
      data-part="title"
      data-scope="empty-state"
    />
  );
}
EmptyStateTitle.displayName = "EmptyState.Title";

export function EmptyStateDescription({ className, classNames, ...rest }: EmptyStatePartProps) {
  const slots = emptyStateVariants();

  return (
    <ark.p
      {...rest}
      className={cn(slots.description(), className, classNames?.description)}
      data-part="description"
      data-scope="empty-state"
    />
  );
}
EmptyStateDescription.displayName = "EmptyState.Description";

export function EmptyStateActions({ className, classNames, ...rest }: EmptyStatePartProps) {
  const slots = emptyStateVariants();

  return (
    <ark.div
      {...rest}
      className={cn(slots.actions(), className, classNames?.actions)}
      data-part="actions"
      data-scope="empty-state"
    />
  );
}
EmptyStateActions.displayName = "EmptyState.Actions";

export function EmptyStateShorthand({
  className,
  classNames,
  media,
  title,
  description,
  actions,
  mediaProps,
  titleProps,
  descriptionProps,
  actionsProps,
  ...rest
}: EmptyStateProps) {
  return (
    <EmptyStateRoot {...rest} className={className} classNames={classNames}>
      {media !== undefined && <EmptyStateMedia {...mediaProps}>{media}</EmptyStateMedia>}

      {title !== undefined && <EmptyStateTitle {...titleProps}>{title}</EmptyStateTitle>}

      {description !== undefined && (
        <EmptyStateDescription {...descriptionProps}>{description}</EmptyStateDescription>
      )}

      {actions !== undefined && <EmptyStateActions {...actionsProps}>{actions}</EmptyStateActions>}
    </EmptyStateRoot>
  );
}
EmptyStateShorthand.displayName = "EmptyState";
// #endregion
