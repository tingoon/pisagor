import { ark, type HTMLArkProps } from "@ark-ui/react";
import { CaretDownIcon } from "@phosphor-icons/react";
import type { NavigationMenuProps as BaseNavigationMenuProps } from "@pisagor/props";
import { navigationMenuRecipe } from "@pisagor/recipes";
import { createContext, use, useId, useRef, useState } from "react";
import type { FunctionComponent, KeyboardEvent } from "react";
import { createSlotRecipeContext } from "../internal";
import { useLocale } from "./provider/context";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "NavigationMenu",
  recipe: navigationMenuRecipe,
});

interface NavigationMenuState {
  openId: string | null;
  setOpenId: (id: string | null) => void;
}

const NavigationMenuStateContext = createContext<NavigationMenuState>({
  openId: null,
  setOpenId: () => {},
});

interface NavigationMenuItemState {
  contentId: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: { current: HTMLButtonElement | null };
}

const NavigationMenuItemContext = createContext<NavigationMenuItemState | null>(
  null,
);
// #endregion

// #region Types
export interface NavigationMenuProps
  extends HTMLArkProps<"nav">, BaseNavigationMenuProps {}

export type NavigationMenuPartProps = HTMLArkProps<"ul">;

export type NavigationMenuItemProps = HTMLArkProps<"li">;

export type NavigationMenuTriggerProps = HTMLArkProps<"button">;

export type NavigationMenuContentProps = HTMLArkProps<"ul">;

export interface NavigationMenuLinkProps extends HTMLArkProps<"a"> {
  /** Whether the link represents the current page */
  active?: boolean;
}
// #endregion

// #region Helpers
const TOP_LEVEL_SELECTOR =
  ':scope > li > a, :scope > li > button, :scope > li > [data-part="trigger"]';

/** Arrow / Home / End navigation between top-level links and triggers. */
function handleListKeyDown(event: KeyboardEvent<HTMLUListElement>) {
  const target = event.target as HTMLElement;
  if (target.closest('[data-part="content"]')) {
    return;
  }
  const items = Array.from(
    event.currentTarget.querySelectorAll<HTMLElement>(TOP_LEVEL_SELECTOR),
  );
  const index = items.indexOf(target);
  if (index === -1) {
    return;
  }
  const rtl = getComputedStyle(event.currentTarget).direction === "rtl";
  const next = rtl ? "ArrowLeft" : "ArrowRight";
  const prev = rtl ? "ArrowRight" : "ArrowLeft";
  const destination =
    event.key === next
      ? items[(index + 1) % items.length]
      : event.key === prev
        ? items[(index - 1 + items.length) % items.length]
        : event.key === "Home"
          ? items[0]
          : event.key === "End"
            ? items.at(-1)
            : undefined;
  if (!destination) {
    return;
  }
  event.preventDefault();
  destination.focus();
}

function focusContentLink(contentId: string, position: "first" | "last") {
  const links = document
    .getElementById(contentId)
    ?.querySelectorAll<HTMLElement>("a, button");
  if (!links?.length) {
    return;
  }
  (position === "first" ? links[0] : links[links.length - 1])?.focus();
}
// #endregion

// #region Parts
const NavigationMenuNav = withProvider(ark.nav, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<NavigationMenuProps>;

export function NavigationMenuRoot({
  "aria-label": ariaLabel,
  ...rest
}: NavigationMenuProps) {
  const { m } = useLocale();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <NavigationMenuStateContext value={{ openId, setOpenId }}>
      <NavigationMenuNav
        {...rest}
        aria-label={m("navigationMenu.label", ariaLabel)}
      />
    </NavigationMenuStateContext>
  );
}

const NavigationMenuListBase = withContext(ark.ul, {
  name: "List",
});

export function NavigationMenuList({
  onKeyDown,
  ...rest
}: NavigationMenuPartProps) {
  return (
    <NavigationMenuListBase
      {...rest}
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (!event.defaultPrevented) {
          handleListKeyDown(event);
        }
      }}
    />
  );
}

const NavigationMenuItemBase = withContext(ark.li, {
  name: "Item",
});

export function NavigationMenuItem({
  onBlur,
  onKeyDown,
  ...rest
}: NavigationMenuItemProps) {
  const { openId, setOpenId } = use(NavigationMenuStateContext);
  const id = useId();
  const contentId = `${id}-content`;
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const open = openId === id;
  const setOpen = (value: boolean) => setOpenId(value ? id : null);

  return (
    <NavigationMenuItemContext value={{ contentId, open, setOpen, triggerRef }}>
      <NavigationMenuItemBase
        {...rest}
        onBlur={(event) => {
          onBlur?.(event);
          if (
            open &&
            !event.currentTarget.contains(event.relatedTarget as Node | null)
          ) {
            setOpen(false);
          }
        }}
        onKeyDown={(event) => {
          onKeyDown?.(event);
          if (open && event.key === "Escape") {
            event.preventDefault();
            setOpen(false);
            triggerRef.current?.focus();
          }
        }}
      />
    </NavigationMenuItemContext>
  );
}

export function NavigationMenuTrigger({
  children,
  className,
  onClick,
  onKeyDown,
  ...rest
}: NavigationMenuTriggerProps) {
  const { slots } = useStyles();
  const item = use(NavigationMenuItemContext);

  if (!item) {
    throw new Error(
      "NavigationMenu.Trigger must be used in NavigationMenu.Item",
    );
  }

  return (
    <ark.button
      {...rest}
      aria-controls={item.contentId}
      aria-expanded={item.open}
      className={slots.trigger({ className })}
      data-part="trigger"
      data-scope="navigation-menu"
      onClick={(event) => {
        onClick?.(event);
        item.setOpen(!item.open);
      }}
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault();
          item.setOpen(true);
          const position = event.key === "ArrowDown" ? "first" : "last";
          requestAnimationFrame(() =>
            focusContentLink(item.contentId, position),
          );
        }
      }}
      ref={item.triggerRef}
      type="button"
    >
      {children}
      <CaretDownIcon aria-hidden className={slots.indicator()} />
    </ark.button>
  );
}

export function NavigationMenuContent({
  className,
  onKeyDown,
  ...rest
}: NavigationMenuContentProps) {
  const { slots } = useStyles();
  const item = use(NavigationMenuItemContext);

  if (!item) {
    throw new Error(
      "NavigationMenu.Content must be used in NavigationMenu.Item",
    );
  }

  return (
    <ark.ul
      {...rest}
      className={slots.content({ className })}
      data-part="content"
      data-scope="navigation-menu"
      data-state={item.open ? "open" : "closed"}
      hidden={!item.open}
      id={item.contentId}
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (event.key !== "ArrowDown" && event.key !== "ArrowUp") {
          return;
        }
        const links = Array.from(
          event.currentTarget.querySelectorAll<HTMLElement>("a, button"),
        );
        const index = links.indexOf(event.target as HTMLElement);
        const next =
          event.key === "ArrowDown"
            ? links[(index + 1) % links.length]
            : links[(index - 1 + links.length) % links.length];
        event.preventDefault();
        next?.focus();
      }}
    />
  );
}

export function NavigationMenuLink({
  active = false,
  className,
  ...rest
}: NavigationMenuLinkProps) {
  const { slots } = useStyles();

  return (
    <ark.a
      {...rest}
      aria-current={active ? "page" : undefined}
      className={slots.link({ className })}
      data-active={active}
      data-part="link"
      data-scope="navigation-menu"
    />
  );
}
// #endregion

// #region Display Names
NavigationMenuRoot.displayName = "NavigationMenu";
NavigationMenuList.displayName = "NavigationMenu.List";
NavigationMenuItem.displayName = "NavigationMenu.Item";
NavigationMenuTrigger.displayName = "NavigationMenu.Trigger";
NavigationMenuContent.displayName = "NavigationMenu.Content";
NavigationMenuLink.displayName = "NavigationMenu.Link";
// #endregion

export const NavigationMenu = Object.assign(NavigationMenuRoot, {
  Content: NavigationMenuContent,
  Item: NavigationMenuItem,
  Link: NavigationMenuLink,
  List: NavigationMenuList,
  Trigger: NavigationMenuTrigger,
});
