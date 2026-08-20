import { ark } from "@ark-ui/react/factory";
import { CaretRightIcon, DotsThreeIcon } from "@phosphor-icons/react";
import {
  breadcrumbInlineVariants,
  breadcrumbItemVariants,
  breadcrumbLinkVariants,
  breadcrumbListVariants,
  breadcrumbPageVariants,
  breadcrumbSeparatorVariants,
} from "@pisagor/styles/ui/breadcrumb";
import type { ComponentProps, ReactNode } from "react";
import { Fragment } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
interface BreadcrumbPresetItem {
  label: ReactNode;
  href?: string;
  isCurrentPage?: boolean;
}

export interface BreadcrumbRootProps extends ComponentProps<typeof ark.nav>, WithTestId {
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
  testId,
  ...rest
}: BreadcrumbRootProps) {
  return (
    <ark.nav
      {...rest}
      aria-label={ariaLabel}
      data-part="root"
      data-scope="breadcrumb"
      data-testid={testId}
    >
      {children}
    </ark.nav>
  );
}

export function BreadcrumbList({ className, ...rest }: ComponentProps<typeof ark.ol>) {
  return (
    <ark.ol
      {...rest}
      className={breadcrumbListVariants({ className })}
      data-part="list"
      data-scope="breadcrumb"
      role="list"
    />
  );
}

export function BreadcrumbItem({ className, ...rest }: ComponentProps<typeof ark.li>) {
  return (
    <ark.li
      {...rest}
      className={breadcrumbItemVariants({ className })}
      data-part="item"
      data-scope="breadcrumb"
    />
  );
}

export function BreadcrumbLink({ className, ...rest }: ComponentProps<typeof ark.a>) {
  return (
    <ark.a
      {...rest}
      className={breadcrumbLinkVariants({ className })}
      data-part="link"
      data-scope="breadcrumb"
    />
  );
}

export function BreadcrumbPage({ className, ...rest }: ComponentProps<typeof ark.span>) {
  return (
    <ark.span
      {...rest}
      aria-current="page"
      className={breadcrumbPageVariants({ className })}
      data-part="page"
      data-scope="breadcrumb"
    />
  );
}

export function BreadcrumbSeparator({
  children,
  className,
  ...rest
}: ComponentProps<typeof ark.li>) {
  return (
    <ark.li
      {...rest}
      aria-hidden="true"
      className={breadcrumbSeparatorVariants({ className })}
      data-part="separator"
      data-scope="breadcrumb"
      role="presentation"
    >
      {children ?? <CaretRightIcon />}
    </ark.li>
  );
}

export function BreadcrumbEllipsis(props: ComponentProps<typeof ark.span>) {
  return (
    <ark.span
      aria-hidden="true"
      data-part="ellipsis"
      data-scope="breadcrumb"
      role="presentation"
      {...props}
    >
      <DotsThreeIcon className={breadcrumbInlineVariants()} />
    </ark.span>
  );
}

BreadcrumbRoot.displayName = "Breadcrumb.Root";
BreadcrumbList.displayName = "Breadcrumb.List";
BreadcrumbItem.displayName = "Breadcrumb.Item";
BreadcrumbLink.displayName = "Breadcrumb.Link";
BreadcrumbPage.displayName = "Breadcrumb.Page";
BreadcrumbSeparator.displayName = "Breadcrumb.Separator";
BreadcrumbEllipsis.displayName = "Breadcrumb.Ellipsis";
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
BreadcrumbShorthand.displayName = "Breadcrumb";
// #endregion
