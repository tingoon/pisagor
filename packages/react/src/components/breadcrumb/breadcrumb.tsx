import { ark } from "@ark-ui/react/factory";
import { CaretRightIcon, DotsThreeIcon } from "@phosphor-icons/react";
import { breadcrumbItemRecipe, breadcrumbRecipe } from "@pisagor/recipes/breadcrumb";
import type { ComponentProps, ReactNode } from "react";
import { Fragment } from "react";
import {
  BreadcrumbContext,
  BreadcrumbItemContext,
  useBreadcrumb,
  useBreadcrumbItem,
} from "./breadcrumb.context";

// #region Types
interface BreadcrumbPresetItem {
  label: ReactNode;
  href?: string;
  isCurrentPage?: boolean;
}

export type BreadcrumbListProps = ComponentProps<typeof ark.ol>;
export interface BreadcrumbItemProps extends ComponentProps<typeof ark.li> {
  /**
   * Style recipe. Defaults to `breadcrumbItemRecipe` from `@pisagor/recipes/breadcrumb`.
   *
   * @defaultValue breadcrumbItemRecipe
   */
  itemRecipe?: typeof breadcrumbItemRecipe;
}
export type BreadcrumbLinkProps = ComponentProps<typeof ark.a>;
export type BreadcrumbPageProps = ComponentProps<typeof ark.span>;
export type BreadcrumbSeparatorProps = ComponentProps<typeof ark.li>;
export type BreadcrumbEllipsisProps = ComponentProps<typeof ark.span>;

export interface BreadcrumbRootProps extends ComponentProps<typeof ark.nav> {
  /**
   * Accessible label for the breadcrumb navigation landmark.
   *
   * @defaultValue "Breadcrumb"
   */
  "aria-label"?: string;
  /**
   * Style recipe. Defaults to `breadcrumbRecipe` from `@pisagor/recipes/breadcrumb`.
   *
   * @defaultValue breadcrumbRecipe
   */
  recipe?: typeof breadcrumbRecipe;
}

export interface BreadcrumbProps extends Omit<BreadcrumbRootProps, "children"> {
  items?: BreadcrumbPresetItem[];
}
// #endregion

// #region Parts
export function BreadcrumbRoot({
  "aria-label": ariaLabel = "Breadcrumb",
  children,
  recipe = breadcrumbRecipe,
  ...rest
}: BreadcrumbRootProps) {
  const slots = recipe();

  return (
    <BreadcrumbContext value={{ slots }}>
      <ark.nav {...rest} aria-label={ariaLabel} data-part="root" data-scope="breadcrumb">
        {children}
      </ark.nav>
    </BreadcrumbContext>
  );
}

export function BreadcrumbList({ className, ...rest }: BreadcrumbListProps) {
  const { slots } = useBreadcrumb();

  return (
    <ark.ol
      {...rest}
      className={slots.list({ className })}
      data-part="list"
      data-scope="breadcrumb"
      role="list"
    />
  );
}

export function BreadcrumbItem({
  children,
  itemRecipe = breadcrumbItemRecipe,
  className,
  ...rest
}: BreadcrumbItemProps) {
  const slots = itemRecipe();

  return (
    <BreadcrumbItemContext value={{ slots }}>
      <ark.li
        {...rest}
        className={slots.base({ className })}
        data-part="item"
        data-scope="breadcrumb"
      >
        {children}
      </ark.li>
    </BreadcrumbItemContext>
  );
}

export function BreadcrumbLink({ className, ...rest }: BreadcrumbLinkProps) {
  const { slots } = useBreadcrumbItem();

  return (
    <ark.a
      {...rest}
      className={slots.link({ className })}
      data-part="link"
      data-scope="breadcrumb"
    />
  );
}

export function BreadcrumbPage({ className, ...rest }: BreadcrumbPageProps) {
  const { slots } = useBreadcrumbItem();

  return (
    <ark.span
      {...rest}
      aria-current="page"
      className={slots.page({ className })}
      data-part="page"
      data-scope="breadcrumb"
    />
  );
}

export function BreadcrumbSeparator({ children, className, ...rest }: BreadcrumbSeparatorProps) {
  const { slots } = useBreadcrumb();

  return (
    <ark.li
      {...rest}
      aria-hidden="true"
      className={slots.separator({ className })}
      data-part="separator"
      data-scope="breadcrumb"
      role="presentation"
    >
      {children ?? <CaretRightIcon />}
    </ark.li>
  );
}

export function BreadcrumbEllipsis(props: BreadcrumbEllipsisProps) {
  const { slots } = useBreadcrumb();

  return (
    <ark.span
      {...props}
      aria-hidden="true"
      data-part="ellipsis"
      data-scope="breadcrumb"
      role="presentation"
    >
      <DotsThreeIcon className={slots.ellipsis()} />
    </ark.span>
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
            <Fragment key={item.href ?? String(item.label)}>
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
BreadcrumbList.displayName = "Breadcrumb.List";
BreadcrumbItem.displayName = "Breadcrumb.Item";
BreadcrumbLink.displayName = "Breadcrumb.Link";
BreadcrumbPage.displayName = "Breadcrumb.Page";
BreadcrumbSeparator.displayName = "Breadcrumb.Separator";
BreadcrumbEllipsis.displayName = "Breadcrumb.Ellipsis";
BreadcrumbShorthand.displayName = "Breadcrumb";
// #endregion
