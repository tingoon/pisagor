import { Collapsible as CollapsiblePrimitive } from "@ark-ui/react";
import type {
  CollapsibleContentProps,
  CollapsibleIndicatorProps,
  CollapsibleRootProps as CollapsibleRootPrimitiveProps,
  CollapsibleTriggerProps,
} from "@ark-ui/react";
import { CaretDownIcon } from "@phosphor-icons/react";
import type {
  CollapsibleContract,
  CollapsibleRootContract,
} from "@pisagor/contracts";
import { collapsibleRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Collapsible",
  recipe: collapsibleRecipe,
});
// #endregion

// #region Types
export type CollapsibleRootProps = CollapsibleRootPrimitiveProps &
  CollapsibleRootContract;

export type CollapsibleBodyProps = ComponentPropsWithRef<"div">;

export interface CollapsibleProps
  extends Omit<CollapsibleRootProps, "children">, CollapsibleContract {
  /** Content revealed when open. */
  children?: ReactNode;
  /** Trigger label. */
  trigger?: ReactNode;
  /**
   * Whether to render the caret indicator inside the trigger.
   *
   * @defaultValue true
   */
  showIndicator?: boolean;
}
// #endregion

// #region Parts
const RootBase = withProvider<CollapsibleRootProps>(CollapsiblePrimitive.Root, {
  name: "Root",
  slot: "base",
});

/** Root; `collapsedHeight` keeps content mounted for partial collapse. */
function Root({
  collapsedHeight,
  lazyMount,
  unmountOnExit,
  ...rest
}: CollapsibleRootProps) {
  const partial = collapsedHeight !== undefined;

  return (
    <RootBase
      {...rest}
      collapsedHeight={collapsedHeight}
      data-partial-collapse={partial ? "" : undefined}
      lazyMount={partial ? false : lazyMount}
      unmountOnExit={partial ? false : unmountOnExit}
    />
  );
}

const Trigger = withContext<CollapsibleTriggerProps>(
  CollapsiblePrimitive.Trigger,
  { name: "Trigger" },
);

const Indicator = withContext<CollapsibleIndicatorProps>(
  CollapsiblePrimitive.Indicator,
  {
    defaultProps: { children: <CaretDownIcon /> },
    name: "Indicator",
  },
);

const Content = withContext<CollapsibleContentProps>(
  CollapsiblePrimitive.Content,
  { name: "Content" },
);

const Body = withContext<CollapsibleBodyProps>("div", { name: "Body" });
// #endregion

// #region Shorthand
export function CollapsibleShorthand({
  children,
  classNames,
  showIndicator = true,
  trigger,
  ...rest
}: CollapsibleProps) {
  return (
    <Root {...rest}>
      {trigger !== undefined && (
        <Trigger className={classNames?.trigger}>
          {trigger}

          {showIndicator && <Indicator className={classNames?.indicator} />}
        </Trigger>
      )}

      <Content className={classNames?.content}>
        <Body className={classNames?.body}>{children}</Body>
      </Content>
    </Root>
  );
}
// #endregion

export type {
  CollapsibleContentProps,
  CollapsibleIndicatorProps,
  CollapsibleTriggerProps,
} from "@ark-ui/react";

export const Collapsible = Object.assign(CollapsibleShorthand, {
  Body,
  Content,
  Indicator,
  Root,
  Trigger,
});
