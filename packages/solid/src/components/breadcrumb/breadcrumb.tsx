import { ark } from "@ark-ui/solid/factory";
import {
  breadcrumbItemRecipe,
  breadcrumbRecipe,
} from "@pisagor/recipes/breadcrumb";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { CaretRightIcon, DotsThreeIcon } from "../../internal/icons";
import {
  BreadcrumbContext,
  BreadcrumbItemContext,
  useBreadcrumb,
  useBreadcrumbItem,
} from "./breadcrumb.context";

interface BreadcrumbPresetItem {
  label: JSX.Element;
  href?: string;
  isCurrentPage?: boolean;
}

export type BreadcrumbListProps = ComponentProps<typeof ark.ol>;
export interface BreadcrumbItemProps extends ComponentProps<typeof ark.li> {
  itemRecipe?: typeof breadcrumbItemRecipe;
}
export type BreadcrumbLinkProps = ComponentProps<typeof ark.a>;
export type BreadcrumbPageProps = ComponentProps<typeof ark.span>;
export type BreadcrumbSeparatorProps = ComponentProps<typeof ark.li>;
export type BreadcrumbEllipsisProps = ComponentProps<typeof ark.span>;

export interface BreadcrumbRootProps extends ComponentProps<typeof ark.nav> {
  "aria-label"?: string;
  recipe?: typeof breadcrumbRecipe;
}

export interface BreadcrumbProps extends Omit<BreadcrumbRootProps, "children"> {
  items?: BreadcrumbPresetItem[];
}

export function BreadcrumbRoot(props: BreadcrumbRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "aria-label",
    "children",
    "recipe",
    "class",
  ]);
  const slots = () => (local.recipe ?? breadcrumbRecipe)();

  return (
    <BreadcrumbContext value={{ slots: slots() }}>
      <ark.nav
        {...rest}
        aria-label={local["aria-label"] ?? "Breadcrumb"}
        class={cn(local.class)}
        data-part="root"
        data-scope="breadcrumb"
      >
        {local.children}
      </ark.nav>
    </BreadcrumbContext>
  );
}

export function BreadcrumbList(props: BreadcrumbListProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useBreadcrumb();
  return (
    <ark.ol
      {...rest}
      class={slots.list({ class: cn(local.class) })}
      data-part="list"
      data-scope="breadcrumb"
      role="list"
    />
  );
}

export function BreadcrumbItem(props: BreadcrumbItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "itemRecipe", "class"]);
  const slots = () => (local.itemRecipe ?? breadcrumbItemRecipe)();

  return (
    <BreadcrumbItemContext value={{ slots: slots() }}>
      <ark.li
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        data-part="item"
        data-scope="breadcrumb"
      >
        {local.children}
      </ark.li>
    </BreadcrumbItemContext>
  );
}

export function BreadcrumbLink(props: BreadcrumbLinkProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useBreadcrumbItem();
  return (
    <ark.a
      {...rest}
      class={slots.link({ class: cn(local.class) })}
      data-part="link"
      data-scope="breadcrumb"
    />
  );
}

export function BreadcrumbPage(props: BreadcrumbPageProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useBreadcrumbItem();
  return (
    <ark.span
      {...rest}
      aria-current="page"
      class={slots.page({ class: cn(local.class) })}
      data-part="page"
      data-scope="breadcrumb"
    />
  );
}

export function BreadcrumbSeparator(
  props: BreadcrumbSeparatorProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useBreadcrumb();
  return (
    <ark.li
      {...rest}
      aria-hidden="true"
      class={slots.separator({ class: cn(local.class) })}
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
  const { slots } = useBreadcrumb();
  return (
    <ark.span
      {...props}
      aria-hidden="true"
      data-part="ellipsis"
      data-scope="breadcrumb"
      role="presentation"
    >
      <DotsThreeIcon class={slots.ellipsis()} />
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
