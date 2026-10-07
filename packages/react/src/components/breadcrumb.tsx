import { ark } from "@ark-ui/react/factory";
import { CaretRightIcon, DotsThreeIcon } from "@phosphor-icons/react";
import type {
  BreadcrumbItemProps as BaseBreadcrumbItemProps,
  BreadcrumbProps as BaseBreadcrumbRootProps,
} from "@pisagor/props";
import { breadcrumbItemRecipe, breadcrumbRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent, ReactNode } from "react";
import { Fragment } from "react";
import { createSlotRecipeContext } from "../utils";

// #region Context
const {
  Context: BreadcrumbStylesContext,
  useStyles: useBreadcrumb,
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
interface BreadcrumbPresetItem {
  label: ReactNode;
  href?: string;
  isCurrentPage?: boolean;
}

export type BreadcrumbListProps = ComponentProps<typeof ark.ol>;
export type BreadcrumbLinkProps = ComponentProps<typeof ark.a>;
export type BreadcrumbPageProps = ComponentProps<typeof ark.span>;
export type BreadcrumbSeparatorProps = ComponentProps<typeof ark.li>;
export type BreadcrumbEllipsisProps = ComponentProps<typeof ark.span>;

export interface BreadcrumbRootProps
  extends ComponentProps<typeof ark.nav>,
    BaseBreadcrumbRootProps {
  /**
   * Accessible label for the breadcrumb navigation landmark.
   *
   * @defaultValue "Breadcrumb"
   */
  "aria-label"?: string;
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
    <BreadcrumbStylesContext value={{ slots, variants: {} as never }}>
      <ark.nav
        {...rest}
        aria-label={ariaLabel}
        data-part="root"
        data-scope="breadcrumb"
      >
        {children}
      </ark.nav>
    </BreadcrumbStylesContext>
  );
}

export const BreadcrumbList = withBreadcrumbContext(ark.ol, {
  defaultProps: { role: "list" },
  name: "List",
});

export const BreadcrumbItem = withBreadcrumbItemProvider(ark.li, {
  name: "Item",
  slot: "base",
}) as FunctionComponent<
  ComponentProps<typeof ark.li> & BaseBreadcrumbItemProps
>;

export type BreadcrumbItemProps = ComponentProps<typeof BreadcrumbItem>;

export const BreadcrumbLink = withBreadcrumbItemContext(ark.a, {
  name: "Link",
});

export const BreadcrumbPage = withBreadcrumbItemContext(ark.span, {
  defaultProps: { "aria-current": "page" },
  name: "Page",
});

export function BreadcrumbSeparator({
  children,
  className,
  ...rest
}: BreadcrumbSeparatorProps) {
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
BreadcrumbSeparator.displayName = "Breadcrumb.Separator";
BreadcrumbEllipsis.displayName = "Breadcrumb.Ellipsis";
BreadcrumbShorthand.displayName = "Breadcrumb";
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
