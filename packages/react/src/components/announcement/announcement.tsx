import { ark } from "@ark-ui/react/factory";
import {
  type AnnouncementVariantProps,
  announcementTitleVariants,
  announcementVariants,
} from "@pisagor/styles/ui/announcement";
import type { ComponentProps, ReactNode } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
type AnnouncementTitleProps = ComponentProps<typeof ark.span>;

type AnnouncementRootProps = Omit<ComponentProps<typeof ark.div>, "title"> &
  AnnouncementVariantProps &
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

// #region Parts
export function AnnouncementRoot({
  className,
  role = "status",
  testId,
  ...rest
}: AnnouncementRootProps) {
  return (
    <ark.div
      {...rest}
      className={announcementVariants({ className })}
      data-part="root"
      data-scope="announcement"
      data-testid={testId}
      role={role}
    />
  );
}

export function AnnouncementTitle({ className, ...rest }: AnnouncementTitleProps) {
  return (
    <ark.span
      {...rest}
      className={announcementTitleVariants({ className })}
      data-part="title"
      data-scope="announcement"
    />
  );
}
// #endregion

// #region Shorthand
export function AnnouncementShorthand({ badge, title, titleProps, ...rest }: AnnouncementProps) {
  return (
    <AnnouncementRoot {...rest}>
      {badge}

      {title !== undefined && <AnnouncementTitle {...titleProps}>{title}</AnnouncementTitle>}
    </AnnouncementRoot>
  );
}
// #endregion

// #region Display Names
AnnouncementRoot.displayName = "Announcement.Root";
AnnouncementTitle.displayName = "Announcement.Title";
AnnouncementShorthand.displayName = "Announcement";
// #endregion
