import { ark, type HTMLArkProps } from "@ark-ui/solid";
import type {
  BreadcrumbContract,
  BreadcrumbItemContract,
  BreadcrumbItemRootContract,
  BreadcrumbPresetItem as BaseBreadcrumbPresetItem,
  BreadcrumbRootContract,
} from "@pisagor/contracts";
import { breadcrumbItemRecipe, breadcrumbRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { CaretRightIcon, createSlotRecipeContext } from "../internal";
import { useLocale } from "./provider/context";

// #region Context
const {
  withContext: withBreadcrumbContext,
  withProvider: withBreadcrumbProvider,
} = createSlotRecipeContext({
  name: "Breadcrumb",
  recipe: breadcrumbRecipe,
});

const {
  withContext: withBreadcrumbItemContext,
  withProvider: withBreadcrumbItemProvider,
} = createSlotRecipeContext({
  name: "BreadcrumbItem",
  recipe: breadcrumbItemRecipe,
});
// #endregion

// #region Types
interface BreadcrumbPresetItem extends Omit<BaseBreadcrumbPresetItem, "label"> {
  label: JSX.Element;
}

export type BreadcrumbListProps = HTMLArkProps<"ol">;
export type BreadcrumbLinkProps = HTMLArkProps<"a">;
export type BreadcrumbPageProps = HTMLArkProps<"span">;
export type BreadcrumbSeparatorProps = HTMLArkProps<"li">;
export type BreadcrumbEllipsisProps = HTMLArkProps<"span">;

export interface BreadcrumbRootProps
  extends HTMLArkProps<"nav">, BreadcrumbRootContract {
  /**
   * Accessible label for the breadcrumb navigation landmark.
   *
   * @defaultValue "Breadcrumb"
   */
  "aria-label"?: string;
}

export interface BreadcrumbProps
  extends Omit<BreadcrumbRootProps, "children">, BreadcrumbContract {
  items?: BreadcrumbPresetItem[];
  /**
   * Separator content between items.
   *
   * @defaultValue <CaretRightIcon />
   */
  separator?: JSX.Element;
}

export type BreadcrumbItemRootProps = HTMLArkProps<"li"> &
  BreadcrumbItemRootContract;

export type BreadcrumbItemProps = BreadcrumbItemRootProps &
  BreadcrumbItemContract;
// #endregion

// #region Parts
const BreadcrumbRootBase = withBreadcrumbProvider<BreadcrumbRootProps>(
  ark.nav,
  {
    name: "Root",
    slot: "base",
  },
);

/** Navigation landmark with a localized default `aria-label`. */
function BreadcrumbRoot(props: BreadcrumbRootProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["aria-label"]);

  return (
    <BreadcrumbRootBase
      {...rest}
      aria-label={m("breadcrumb.label", local["aria-label"])}
    />
  );
}

const BreadcrumbList = withBreadcrumbContext<BreadcrumbListProps>(ark.ol, {
  defaultProps: { role: "list" },
  name: "List",
});

const BreadcrumbItem = withBreadcrumbItemProvider<BreadcrumbItemRootProps>(
  ark.li,
  { name: "Item", slot: "base" },
);

const BreadcrumbLink = withBreadcrumbItemContext<BreadcrumbLinkProps>(ark.a, {
  name: "Link",
});

const BreadcrumbPage = withBreadcrumbItemContext<BreadcrumbPageProps>(
  ark.span,
  { defaultProps: { "aria-current": "page" }, name: "Page" },
);

const BreadcrumbSeparator = withBreadcrumbContext<BreadcrumbSeparatorProps>(
  ark.li,
  {
    defaultProps: { "aria-hidden": "true", role: "presentation" },
    name: "Separator",
  },
);

const BreadcrumbEllipsisBase = withBreadcrumbContext<BreadcrumbEllipsisProps>(
  ark.span,
  { name: "Ellipsis" },
);

/**
 * Collapsed-items marker; render your icon inside. Adds localized screen-reader
 * text.
 */
function BreadcrumbEllipsis(props: BreadcrumbEllipsisProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["children"]);

  return (
    <BreadcrumbEllipsisBase {...rest}>
      {local.children}
      <span class="sr-only">{m("breadcrumb.more")}</span>
    </BreadcrumbEllipsisBase>
  );
}
// #endregion

// #region Shorthand
export function BreadcrumbShorthand(props: BreadcrumbProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "class",
    "classNames",
    "items",
    "separator",
  ]);
  const separator = () =>
    "separator" in local ? local.separator : <CaretRightIcon />;

  return (
    <BreadcrumbRoot {...rest} class={cn(local.classNames?.base, local.class)}>
      <Show when={local.items}>
        {(items) => (
          <BreadcrumbList class={local.classNames?.list}>
            <For each={items()}>
              {(item, index) => (
                <>
                  <Show when={index() > 0}>
                    <BreadcrumbSeparator class={local.classNames?.separator}>
                      {separator()}
                    </BreadcrumbSeparator>
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
        )}
      </Show>
    </BreadcrumbRoot>
  );
}
// #endregion

export const Breadcrumb = Object.assign(BreadcrumbShorthand, {
  Ellipsis: BreadcrumbEllipsis,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  List: BreadcrumbList,
  Page: BreadcrumbPage,
  Root: BreadcrumbRoot,
  Separator: BreadcrumbSeparator,
});
