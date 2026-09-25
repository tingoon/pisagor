import { ark } from "@ark-ui/solid/factory";
import { announcementRecipe } from "@pisagor/recipes/announcement";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { AnnouncementContext, useAnnouncement } from "./announcement.context";

type AnnouncementTitleProps = ComponentProps<typeof ark.span>;

type AnnouncementRootProps = Omit<ComponentProps<typeof ark.div>, "title"> & {
  role?: "status" | "alert";
  recipe?: typeof announcementRecipe;
};

export interface AnnouncementProps extends Omit<AnnouncementRootProps, "children"> {
  badge?: JSX.Element;
  title?: JSX.Element;
  titleProps?: Omit<AnnouncementTitleProps, "children" | "class">;
}

export function AnnouncementRoot(props: AnnouncementRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["role", "children", "recipe", "class"]);
  const slots = () => (local.recipe ?? announcementRecipe)();

  return (
    <AnnouncementContext value={{ slots: slots() }}>
      <ark.div
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        data-part="root"
        data-scope="announcement"
        role={local.role ?? "status"}
      >
        {local.children}
      </ark.div>
    </AnnouncementContext>
  );
}

export function AnnouncementTitle(props: AnnouncementTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useAnnouncement();

  return (
    <ark.span
      {...rest}
      class={slots.title({ class: cn(local.class) })}
      data-part="title"
      data-scope="announcement"
    />
  );
}

export function AnnouncementShorthand(props: AnnouncementProps): JSX.Element {
  const [local, rest] = splitProps(props, ["badge", "title", "titleProps"]);

  return (
    <AnnouncementRoot {...rest}>
      {local.badge}
      <Show when={local.title !== undefined}>
        <AnnouncementTitle {...local.titleProps}>{local.title}</AnnouncementTitle>
      </Show>
    </AnnouncementRoot>
  );
}
