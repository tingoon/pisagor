import {
  Collapsible as CollapsiblePrimitive,
  type HTMLArkProps,
} from "@ark-ui/solid";
import type {
  CollapsibleContentProps,
  CollapsibleIndicatorProps,
  CollapsibleRootProps as CollapsibleRootPrimitiveProps,
  CollapsibleTriggerProps,
} from "@ark-ui/solid";
import type {
  CollapsibleContract,
  CollapsibleRootContract,
} from "@pisagor/contracts";
import { collapsibleRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { CaretDownIcon, createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Collapsible",
  recipe: collapsibleRecipe,
});
// #endregion

// #region Types
export type CollapsibleRootProps = CollapsibleRootPrimitiveProps &
  CollapsibleRootContract;

export type CollapsibleBodyProps = HTMLArkProps<"div">;

export interface CollapsibleProps
  extends Omit<CollapsibleRootProps, "children">, CollapsibleContract {
  /** Content revealed when open. */
  children?: JSX.Element;
  /** Trigger label. */
  trigger?: JSX.Element;
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
function Root(props: CollapsibleRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "collapsedHeight",
    "lazyMount",
    "unmountOnExit",
  ]);
  const partial = () => local.collapsedHeight !== undefined;

  return (
    <RootBase
      {...rest}
      collapsedHeight={local.collapsedHeight}
      data-partial-collapse={partial() ? "" : undefined}
      lazyMount={partial() ? false : local.lazyMount}
      unmountOnExit={partial() ? false : local.unmountOnExit}
    />
  );
}

const Trigger = withContext<CollapsibleTriggerProps>(
  CollapsiblePrimitive.Trigger,
  { name: "Trigger" },
);

const Indicator = withContext<CollapsibleIndicatorProps>(
  CollapsiblePrimitive.Indicator,
  { name: "Indicator" },
);

const Content = withContext<CollapsibleContentProps>(
  CollapsiblePrimitive.Content,
  { name: "Content" },
);

const Body = withContext<CollapsibleBodyProps>("div", { name: "Body" });
// #endregion

// #region Shorthand
export function CollapsibleShorthand(props: CollapsibleProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "classNames",
    "showIndicator",
    "trigger",
  ]);

  return (
    <Root {...rest}>
      <Show when={local.trigger !== undefined}>
        <Trigger class={local.classNames?.trigger}>
          {local.trigger}

          <Show when={local.showIndicator ?? true}>
            <Indicator class={local.classNames?.indicator}>
              <CaretDownIcon />
            </Indicator>
          </Show>
        </Trigger>
      </Show>

      <Content class={local.classNames?.content}>
        <Body class={local.classNames?.body}>{local.children}</Body>
      </Content>
    </Root>
  );
}
// #endregion

export type {
  CollapsibleContentProps,
  CollapsibleIndicatorProps,
  CollapsibleTriggerProps,
} from "@ark-ui/solid";

export const Collapsible = Object.assign(CollapsibleShorthand, {
  Body,
  Content,
  Indicator,
  Root,
  Trigger,
});
