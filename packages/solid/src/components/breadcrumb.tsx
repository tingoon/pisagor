import { ark, type HTMLArkProps } from "@ark-ui/solid";
import type {
  BreadcrumbItemRootContract,
  BreadcrumbItemContract,
  BreadcrumbPresetItem as BaseBreadcrumbPresetItem,
  BreadcrumbRootContract,
  BreadcrumbContract,
} from "@pisagor/contracts";
import { breadcrumbItemRecipe, breadcrumbRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { createMemo, For, Show, splitProps } from "solid-js";
import {
  CaretRightIcon,
  DotsThreeIcon,
  createSlotRecipeContext,
} from "../internal";
import { useLocale } from "./provider/context";

// #region Context
const {
  Context: BreadcrumbStylesContext,
  useStyles,
  withContext: withBreadcrumbContext,
} = createSlotRecipeContext({ name: "Breadcrumb", recipe: breadcrumbRecipe });

const {
  withContext: withBreadcrumbItemContext,
  withProvider: withBreadcrumbItemProvider,
} = createSlotRecipeContext({
  name: "BreadcrumbItem",
  recipe: breadcrumbItemRecipe,
});
// #endregion

interface BreadcrumbPresetItem extends Omit<BaseBreadcrumbPresetItem, "label"> {
  label: JSX.Element;
}

export type BreadcrumbListProps = ComponentProps<"ol">;
export interface BreadcrumbItemProps
  extends
    ComponentProps<"li">,
    BreadcrumbItemRootContract,
    BreadcrumbItemContract {}
export type BreadcrumbLinkProps = HTMLArkProps<"a">;
export type BreadcrumbPageProps = ComponentProps<"span">;
export type BreadcrumbSeparatorProps = ComponentProps<"li">;
export type BreadcrumbEllipsisProps = ComponentProps<"span">;

export interface BreadcrumbRootProps
  extends ComponentProps<"nav">, Omit<BreadcrumbRootContract, "items"> {
  "aria-label"?: string;
}

export interface BreadcrumbProps
  extends
    Omit<BreadcrumbRootProps, "children" | "recipe">,
    BreadcrumbRootContract,
    BreadcrumbContract {
  items?: BreadcrumbPresetItem[];
}

export function BreadcrumbRoot(props: BreadcrumbRootProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["aria-label", "children", "recipe"]);
  const slots = createMemo(() => (local.recipe ?? breadcrumbRecipe)());

  return (
    <BreadcrumbStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <nav
        {...rest}
        aria-label={m("breadcrumb.label", local["aria-label"])}
        data-part="root"
        data-scope="breadcrumb"
      >
        {local.children}
      </nav>
    </BreadcrumbStylesContext>
  );
}

export const BreadcrumbList: Component<BreadcrumbListProps> =
  withBreadcrumbContext("ol", {
    defaultProps: { role: "list" },
    name: "List",
  });

export const BreadcrumbItem: Component<BreadcrumbItemProps> =
  withBreadcrumbItemProvider<BreadcrumbItemRootContract>("li", {
    name: "Item",
    slot: "base",
  });

export const BreadcrumbLink: Component<BreadcrumbLinkProps> =
  withBreadcrumbItemContext(ark.a, { name: "Link" });

export const BreadcrumbPage: Component<BreadcrumbPageProps> =
  withBreadcrumbItemContext("span", {
    defaultProps: { "aria-current": "page" },
    name: "Page",
  });

export function BreadcrumbSeparator(
  props: BreadcrumbSeparatorProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useStyles();

  return (
    <li
      {...rest}
      aria-hidden="true"
      class={styles.slots.separator({ class: local.class })}
      data-part="separator"
      data-scope="breadcrumb"
      role="presentation"
    >
      {local.children ?? <CaretRightIcon />}
    </li>
  );
}

export function BreadcrumbEllipsis(
  props: BreadcrumbEllipsisProps,
): JSX.Element {
  const styles = useStyles();

  return (
    <span
      {...props}
      aria-hidden="true"
      data-part="ellipsis"
      data-scope="breadcrumb"
      role="presentation"
    >
      <DotsThreeIcon class={styles.slots.ellipsis()} />
    </span>
  );
}

export function BreadcrumbShorthand(props: BreadcrumbProps): JSX.Element {
  const [local, rest] = splitProps(props, ["items"]);

  return (
    <BreadcrumbRoot {...rest}>
      <Show when={local.items}>
        <BreadcrumbList>
          <For each={local.items}>
            {(item, index) => (
              <>
                <Show when={index() > 0}>
                  <BreadcrumbSeparator />
                </Show>
                <BreadcrumbItem>
                  <Show
                    fallback={
                      <Show fallback={item.label} when={item.href}>
                        <BreadcrumbLink href={item.href}>
                          {item.label}
                        </BreadcrumbLink>
                      </Show>
                    }
                    when={item.isCurrentPage}
                  >
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  </Show>
                </BreadcrumbItem>
              </>
            )}
          </For>
        </BreadcrumbList>
      </Show>
    </BreadcrumbRoot>
  );
}

export const Breadcrumb = Object.assign(BreadcrumbShorthand, {
  Ellipsis: BreadcrumbEllipsis,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  List: BreadcrumbList,
  Page: BreadcrumbPage,
  Root: BreadcrumbRoot,
  Separator: BreadcrumbSeparator,
});
