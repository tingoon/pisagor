import { ark, type HTMLArkProps } from "@ark-ui/react";
import { CaretRightIcon } from "@phosphor-icons/react";
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
import { cn } from "@pisagor/utils";
import { createSlotRecipeContext } from "../internal";
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
  /**
   * Separator content between items.
   *
   * @defaultValue <CaretRightIcon />
   */
  separator?: ReactNode;
}
// #endregion

// #region Parts
const BreadcrumbRootBase = withBreadcrumbProvider<BreadcrumbRootProps>("nav", {
  name: "Root",
  slot: "base",
});

/** Navigation landmark with a localized default `aria-label`. */
export function BreadcrumbRoot({
  "aria-label": ariaLabel,
  ...rest
}: BreadcrumbRootProps) {
  const { m } = useLocale();

  return (
    <BreadcrumbRootBase
      {...rest}
      aria-label={m("breadcrumb.label", ariaLabel)}
    />
  );
}

export const BreadcrumbList = withBreadcrumbContext<ComponentProps<"ol">>(
  "ol",
  {
    defaultProps: { role: "list" },
    name: "List",
  },
);

export type BreadcrumbItemRootProps = ComponentProps<"li"> &
  BreadcrumbItemRootContract;

export type BreadcrumbItemProps = BreadcrumbItemRootProps &
  BreadcrumbItemContract;

export const BreadcrumbItem =
  withBreadcrumbItemProvider<BreadcrumbItemRootProps>("li", {
    name: "Item",
    slot: "base",
  });

export const BreadcrumbLink = withBreadcrumbItemContext<BreadcrumbLinkProps>(
  ark.a,
  {
    name: "Link",
  },
);

export const BreadcrumbPage = withBreadcrumbItemContext<BreadcrumbPageProps>(
  "span",
  {
    defaultProps: { "aria-current": "page" },
    name: "Page",
  },
);

export const BreadcrumbSeparator =
  withBreadcrumbContext<BreadcrumbSeparatorProps>("li", {
    defaultProps: { "aria-hidden": "true", role: "presentation" },
    name: "Separator",
  });

const BreadcrumbEllipsisBase = withBreadcrumbContext<BreadcrumbEllipsisProps>(
  "span",
  { name: "Ellipsis" },
);

/**
 * Collapsed-items marker; render your icon inside. Adds localized screen-reader
 * text.
 */
export function BreadcrumbEllipsis({
  children,
  ...rest
}: BreadcrumbEllipsisProps) {
  const { m } = useLocale();

  return (
    <BreadcrumbEllipsisBase {...rest}>
      {children}
      <span className="sr-only">{m("breadcrumb.more")}</span>
    </BreadcrumbEllipsisBase>
  );
}
// #endregion

// #region Shorthand
export function BreadcrumbShorthand({
  classNames,
  className,
  items,
  separator = <CaretRightIcon />,
  ...rest
}: BreadcrumbProps) {
  return (
    <BreadcrumbRoot {...rest} className={cn(classNames?.base, className)}>
      {items && (
        <BreadcrumbList className={classNames?.list}>
          {items.map((item, index) => (
            <Fragment
              key={
                item.href ??
                (typeof item.label === "string" ? item.label : `item-${index}`)
              }
            >
              {index > 0 && (
                <BreadcrumbSeparator className={classNames?.separator}>
                  {separator}
                </BreadcrumbSeparator>
              )}
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
BreadcrumbShorthand.displayName = "Breadcrumb";
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
