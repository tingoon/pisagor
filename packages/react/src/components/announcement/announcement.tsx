import { ark } from "@ark-ui/react/factory";
import { announcementTitleVariants, announcementVariants } from "@pisagor/styles/ui/announcement";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import type { VariantProps } from "tailwind-variants";
import type { WithTestId } from "../../internal/types";

// #region Variants

// #endregion

// #region Types
type AnnouncementTitleProps = ComponentProps<typeof ark.span>;

type AnnouncementRootProps = Omit<ComponentProps<typeof ark.div>, "title"> &
  VariantProps<typeof announcementVariants> &
  WithTestId & {
    /**
     * The ARIA role of the announcement.
     *
     * @defaultValue "status"
     */
    role?: "status" | "alert";
  };

export interface AnnouncementProps extends Omit<AnnouncementRootProps, "children"> {
  /** Optional badge or label rendered before the title. */
  badge?: ReactNode;
  /** Title content rendered inside `Announcement.Title`. */
  title?: ReactNode;
  /** Extra props forwarded to the announcement title element */
  titleProps?: Omit<AnnouncementTitleProps, "children" | "className">;
}
// #endregion

// #region Components
export function AnnouncementRoot({
  className,
  role = "status",
  testId,
  ...rest
}: AnnouncementRootProps) {
  return (
    <ark.div
      {...rest}
      className={cn(announcementVariants(), className)}
      data-part="root"
      data-scope="announcement"
      data-testid={testId}
      role={role}
    />
  );
}
AnnouncementRoot.displayName = "Announcement.Root";

export function AnnouncementTitle({ className, ...rest }: AnnouncementTitleProps) {
  return (
    <ark.span
      {...rest}
      className={cn(announcementTitleVariants(), className)}
      data-part="title"
      data-scope="announcement"
    />
  );
}
AnnouncementTitle.displayName = "Announcement.Title";

export function AnnouncementShorthand({ badge, title, titleProps, ...rest }: AnnouncementProps) {
  return (
    <AnnouncementRoot {...rest}>
      {badge}

      {title !== undefined && <AnnouncementTitle {...titleProps}>{title}</AnnouncementTitle>}
    </AnnouncementRoot>
  );
}
AnnouncementShorthand.displayName = "Announcement";

// #endregion
