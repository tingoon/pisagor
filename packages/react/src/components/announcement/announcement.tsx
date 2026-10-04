import { ark } from "@ark-ui/react/factory";
import type { AnnouncementProps as BaseAnnouncementRootProps } from "@pisagor/props";
import { announcementRecipe } from "@pisagor/recipes";
import type { ComponentProps, ReactNode } from "react";
import { AnnouncementContext, useAnnouncement } from "./announcement.context";

// #region Types
type AnnouncementTitleProps = ComponentProps<typeof ark.span>;

type AnnouncementRootProps = Omit<ComponentProps<typeof ark.div>, "title"> & {
  /**
   * The ARIA role of the announcement.
   *
   * @defaultValue "status"
   */
  role?: "status" | "alert";
} & BaseAnnouncementRootProps;

export interface AnnouncementProps
  extends Omit<AnnouncementRootProps, "children"> {
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
  role = "status",
  children,
  recipe = announcementRecipe,
  className,
  ...rest
}: AnnouncementRootProps) {
  const slots = recipe();

  return (
    <AnnouncementContext value={{ slots }}>
      <ark.div
        {...rest}
        className={slots.base({ className })}
        data-part="root"
        data-scope="announcement"
        role={role}
      >
        {" "}
        {children}
      </ark.div>
    </AnnouncementContext>
  );
}

export function AnnouncementTitle({
  className,
  ...rest
}: AnnouncementTitleProps) {
  const { slots } = useAnnouncement();

  return (
    <ark.span
      {...rest}
      className={slots.title({ className })}
      data-part="title"
      data-scope="announcement"
    />
  );
}
// #endregion

// #region Shorthand
export function AnnouncementShorthand({
  badge,
  title,
  titleProps,
  ...rest
}: AnnouncementProps) {
  return (
    <AnnouncementRoot {...rest}>
      {" "}
      {badge}
      {title !== undefined && (
        <AnnouncementTitle {...titleProps}>{title}</AnnouncementTitle>
      )}
    </AnnouncementRoot>
  );
}
// #endregion

// #region Display Names
AnnouncementRoot.displayName = "Announcement.Root";
AnnouncementTitle.displayName = "Announcement.Title";
AnnouncementShorthand.displayName = "Announcement";
// #endregion
