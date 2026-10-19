import { ark } from "@ark-ui/react";
import type {
  EmptyStateContract,
  EmptyStateRootContract,
} from "@pisagor/contracts";
import { emptyStateRecipe } from "@pisagor/recipes";
import type { ComponentProps, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "EmptyState",
  recipe: emptyStateRecipe,
});
// #endregion

// #region Parts
export const EmptyStateRoot = withProvider<
  ComponentProps<typeof ark.div> & EmptyStateRootContract
>(ark.div, { name: "Root" });

export const EmptyStateMedia = withContext<ComponentProps<"div">>("div", {
  name: "Media",
});

export const EmptyStateTitle = withContext<ComponentProps<typeof ark.h3>>(
  ark.h3,
  { name: "Title" },
);

export const EmptyStateDescription = withContext<ComponentProps<"p">>("p", {
  name: "Description",
});

export const EmptyStateActions = withContext<ComponentProps<"div">>("div", {
  name: "Actions",
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

export interface EmptyStateProps
  extends Omit<EmptyStateRootProps, "children" | "title">, EmptyStateContract {
  actions?: ReactNode;
  description?: ReactNode;
  media?: ReactNode;
  title?: ReactNode;
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
// #endregion

export const EmptyState = Object.assign(EmptyStateShorthand, {
  Actions: EmptyStateActions,
  Description: EmptyStateDescription,
  Media: EmptyStateMedia,
  Root: EmptyStateRoot,
  Title: EmptyStateTitle,
});
