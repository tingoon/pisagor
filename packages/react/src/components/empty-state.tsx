import { ark } from "@ark-ui/react/factory";
import type { EmptyStateProps as BaseEmptyStateRootProps } from "@pisagor/props";
import { type EmptyStateRecipeSlot, emptyStateRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "EmptyState",
  recipe: emptyStateRecipe,
});
// #endregion

// #region Parts
export const EmptyStateRoot = withProvider(ark.div, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<
  Omit<ComponentProps<typeof ark.div>, "title"> & BaseEmptyStateRootProps
>;

export const EmptyStateMedia = withContext(ark.div, {
  name: "Media",
  slot: "media",
});

export const EmptyStateTitle = withContext(ark.h3, {
  name: "Title",
  slot: "title",
});

export const EmptyStateDescription = withContext(ark.p, {
  name: "Description",
  slot: "description",
});

export const EmptyStateActions = withContext(ark.div, {
  name: "Actions",
  slot: "actions",
});
// #endregion

// #region Types
export type EmptyStateRootProps = ComponentProps<typeof EmptyStateRoot>;
export type EmptyStateMediaProps = ComponentProps<typeof EmptyStateMedia>;
export type EmptyStateTitleProps = ComponentProps<typeof EmptyStateTitle>;
export type EmptyStateDescriptionProps = ComponentProps<
  typeof EmptyStateDescription
>;
export type EmptyStateActionsProps = ComponentProps<typeof EmptyStateActions>;

type EmptyStateClassNames = VariantClassNames<EmptyStateRecipeSlot>;

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
        <EmptyStateDescription
          {...descriptionProps}
          className={classNames?.description}
        >
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

EmptyStateShorthand.displayName = "EmptyState";
// #endregion

export const EmptyState = Object.assign(EmptyStateShorthand, {
  Actions: EmptyStateActions,
  Description: EmptyStateDescription,
  Media: EmptyStateMedia,
  Root: EmptyStateRoot,
  Title: EmptyStateTitle,
});
