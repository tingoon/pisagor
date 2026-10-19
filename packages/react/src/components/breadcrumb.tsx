import { ark, type HTMLArkProps } from "@ark-ui/react";
import { CaretRightIcon, DotsThreeIcon } from "@phosphor-icons/react";
import type {
  BreadcrumbContract,
  BreadcrumbItemContract,
  BreadcrumbItemRootContract,
  BreadcrumbPresetItem as BaseBreadcrumbPresetItem,
  BreadcrumbRootContract,
} from "@pisagor/contracts";
import { breadcrumbItemRecipe, breadcrumbRecipe } from "@pisagor/recipes";
import type { ComponentProps, ComponentPropsWithRef, ReactNode } from "react";
import { Fragment } from "react";
import { createSlotRecipeContext } from "../internal";
import { useLocale } from "./provider/context";

// #region Context
const {
  Context: BreadcrumbStylesContext,
  useStyles,
  withContext: withBreadcrumbContext,
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
  label: ReactNode;
}

export type BreadcrumbListProps = ComponentPropsWithRef<"ol">;
export type BreadcrumbLinkProps = HTMLArkProps<"a">;
export type BreadcrumbPageProps = ComponentPropsWithRef<"span">;
export type BreadcrumbSeparatorProps = ComponentPropsWithRef<"li">;
export type BreadcrumbEllipsisProps = ComponentPropsWithRef<"span">;

export interface BreadcrumbRootProps
  extends ComponentPropsWithRef<"nav">, BreadcrumbRootContract {
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
}
// #endregion

// #region Parts
export function BreadcrumbRoot({
  "aria-label": ariaLabelProp,
  children,
  recipe = breadcrumbRecipe,
  ...rest
}: BreadcrumbRootProps) {
  const { m } = useLocale();
  const ariaLabel = m("breadcrumb.label", ariaLabelProp);
  const slots = recipe();

  return (
    <BreadcrumbStylesContext value={{ slots, variants: {} as never }}>
      <nav
        {...rest}
        aria-label={ariaLabel}
        data-part="root"
        data-scope="breadcrumb"
      >
        {children}
      </nav>
    </BreadcrumbStylesContext>
  );
}

export const BreadcrumbList = withBreadcrumbContext("ol", {
  defaultProps: { role: "list" },
  name: "List",
});

export const BreadcrumbItem =
  withBreadcrumbItemProvider<BreadcrumbItemRootContract>("li", {
    name: "Item",
    slot: "base",
  });

export type BreadcrumbItemRootProps = ComponentProps<typeof BreadcrumbItem>;
export interface BreadcrumbItemProps
  extends BreadcrumbItemRootProps, BreadcrumbItemContract {}

export const BreadcrumbLink = withBreadcrumbItemContext(ark.a, {
  name: "Link",
});

export const BreadcrumbPage = withBreadcrumbItemContext("span", {
  defaultProps: { "aria-current": "page" },
  name: "Page",
});

export function BreadcrumbSeparator({
  children,
  className,
  ...rest
}: BreadcrumbSeparatorProps) {
  const { slots } = useStyles();

  return (
    <li
      {...rest}
      aria-hidden="true"
      className={slots.separator({ className })}
      data-part="separator"
      data-scope="breadcrumb"
      role="presentation"
    >
      {children ?? <CaretRightIcon />}
    </li>
  );
}

export function BreadcrumbEllipsis({
  className,
  ...rest
}: BreadcrumbEllipsisProps) {
  const { m } = useLocale();
  const { slots } = useStyles();

  return (
    <span
      {...rest}
      className={slots.ellipsis({ className })}
      data-part="ellipsis"
      data-scope="breadcrumb"
    >
      <DotsThreeIcon aria-hidden />
      <span className="sr-only">{m("breadcrumb.more")}</span>
    </span>
  );
}
// #endregion

// #region Shorthand
export function BreadcrumbShorthand({ items, ...rest }: BreadcrumbProps) {
  return (
    <BreadcrumbRoot {...rest}>
      {items && (
        <BreadcrumbList>
          {items.map((item, index) => (
            <Fragment
              key={
                item.href ??
                (typeof item.label === "string" ? item.label : `item-${index}`)
              }
            >
              {index > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                {item.isCurrentPage ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : item.href ? (
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                ) : (
                  item.label
                )}
              </BreadcrumbItem>
            </Fragment>
          ))}
        </BreadcrumbList>
      )}
    </BreadcrumbRoot>
  );
}
// #endregion

// #region Display Names
BreadcrumbRoot.displayName = "Breadcrumb.Root";
BreadcrumbSeparator.displayName = "Breadcrumb.Separator";
BreadcrumbEllipsis.displayName = "Breadcrumb.Ellipsis";
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
