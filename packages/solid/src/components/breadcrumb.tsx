import { ark } from "@ark-ui/solid/factory";
import type {
  BreadcrumbItemProps as BaseBreadcrumbItemProps,
  BreadcrumbProps as BaseBreadcrumbProps,
} from "@pisagor/props";
import { breadcrumbItemRecipe, breadcrumbRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { createMemo, For, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { CaretRightIcon, DotsThreeIcon } from "../internal/icons";

// #region Context
const {
  Context: BreadcrumbStylesContext,
  useStyles: useBreadcrumb,
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

interface BreadcrumbPresetItem {
  label: JSX.Element;
  href?: string;
  isCurrentPage?: boolean;
}

export type BreadcrumbListProps = ComponentProps<typeof ark.ol>;
export interface BreadcrumbItemProps
  extends ComponentProps<typeof ark.li>,
    BaseBreadcrumbItemProps {}
export type BreadcrumbLinkProps = ComponentProps<typeof ark.a>;
export type BreadcrumbPageProps = ComponentProps<typeof ark.span>;
export type BreadcrumbSeparatorProps = ComponentProps<typeof ark.li>;
export type BreadcrumbEllipsisProps = ComponentProps<typeof ark.span>;

export interface BreadcrumbRootProps
  extends ComponentProps<typeof ark.nav>,
    BaseBreadcrumbProps {
  "aria-label"?: string;
}

export interface BreadcrumbProps extends Omit<BreadcrumbRootProps, "children"> {
  items?: BreadcrumbPresetItem[];
}

export function BreadcrumbRoot(props: BreadcrumbRootProps): JSX.Element {
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
      <ark.nav
        {...rest}
        aria-label={local["aria-label"] ?? "Breadcrumb"}
        data-part="root"
        data-scope="breadcrumb"
      >
        {local.children}
      </ark.nav>
    </BreadcrumbStylesContext>
  );
}

export const BreadcrumbList: Component<BreadcrumbListProps> =
  withBreadcrumbContext(ark.ol, {
    defaultProps: { role: "list" },
    name: "List",
  });

export const BreadcrumbItem: Component<BreadcrumbItemProps> =
  withBreadcrumbItemProvider(ark.li, {
    name: "Item",
    slot: "base",
  });

export const BreadcrumbLink: Component<BreadcrumbLinkProps> =
  withBreadcrumbItemContext(ark.a, { name: "Link" });

export const BreadcrumbPage: Component<BreadcrumbPageProps> =
  withBreadcrumbItemContext(ark.span, {
    defaultProps: { "aria-current": "page" },
    name: "Page",
  });

export function BreadcrumbSeparator(
  props: BreadcrumbSeparatorProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useBreadcrumb();
  return (
    <ark.li
      {...rest}
      aria-hidden="true"
      class={styles.slots.separator({ class: local.class })}
      data-part="separator"
      data-scope="breadcrumb"
      role="presentation"
    >
      {local.children ?? <CaretRightIcon />}
    </ark.li>
  );
}

export function BreadcrumbEllipsis(
  props: BreadcrumbEllipsisProps,
): JSX.Element {
  const styles = useBreadcrumb();
  return (
    <ark.span
      {...props}
      aria-hidden="true"
      data-part="ellipsis"
      data-scope="breadcrumb"
      role="presentation"
    >
      <DotsThreeIcon class={styles.slots.ellipsis()} />
    </ark.span>
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
