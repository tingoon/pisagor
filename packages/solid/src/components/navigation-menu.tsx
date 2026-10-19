import { ark, type HTMLArkProps } from "@ark-ui/solid";
import type {
  NavigationMenuRootContract,
  NavigationMenuContract,
} from "@pisagor/contracts";
import { navigationMenuRecipe } from "@pisagor/recipes";
import {
  focusNavigationMenuContentLink,
  handleNavigationMenuContentKeyDown,
  handleNavigationMenuListKeyDown,
} from "@pisagor/utils";
import type { Accessor, Component, ComponentProps, JSX } from "solid-js";
import {
  createSignal,
  createContext as createSolidContext,
  createUniqueId,
  splitProps,
  useContext,
} from "solid-js";
import { createSlotRecipeContext } from "../internal";
import { callEventHandler } from "../utils";
import { useLocale } from "./provider/context";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "NavigationMenu",
  recipe: navigationMenuRecipe,
});

interface NavigationMenuState {
  openId: Accessor<string | null>;
  setOpenId: (id: string | null) => void;
}

const NavigationMenuStateContext = createSolidContext<NavigationMenuState>({
  openId: () => null,
  setOpenId: () => {},
});

interface NavigationMenuItemState {
  contentId: string;
  open: Accessor<boolean>;
  setOpen: (open: boolean) => void;
  focusTrigger: () => void;
  setTrigger: (element: HTMLButtonElement) => void;
}

const NavigationMenuItemContext = createSolidContext<NavigationMenuItemState>();

function useNavigationMenuItem(part: string) {
  const item = useContext(NavigationMenuItemContext);
  if (!item) {
    throw new Error(
      `NavigationMenu.${part} must be used in NavigationMenu.Item`,
    );
  }

  return item;
}
// #endregion

// #region Types
export type NavigationMenuProps = ComponentProps<"nav"> &
  NavigationMenuRootContract &
  NavigationMenuContract;

export type NavigationMenuPartProps = ComponentProps<"ul">;
export type NavigationMenuItemProps = ComponentProps<"li">;
export type NavigationMenuTriggerProps = HTMLArkProps<"button">;

export type NavigationMenuIndicatorProps = HTMLArkProps<"span">;
export type NavigationMenuContentProps = ComponentProps<"ul">;

export interface NavigationMenuLinkProps extends HTMLArkProps<"a"> {
  /** Whether the link represents the current page */
  active?: boolean;
}
// #endregion

// #region Parts
const NavigationMenuNav: Component<NavigationMenuProps> = withProvider<
  ComponentProps<"nav"> & NavigationMenuRootContract
>("nav", { name: "Root" });

export function NavigationMenuRoot(props: NavigationMenuProps): JSX.Element {
  const { m } = useLocale();
  const [openId, setOpenId] = createSignal<string | null>(null);

  return (
    <NavigationMenuStateContext.Provider value={{ openId, setOpenId }}>
      <NavigationMenuNav aria-label={m("navigationMenu.label")} {...props} />
    </NavigationMenuStateContext.Provider>
  );
}

const NavigationMenuListBase: Component<NavigationMenuPartProps> = withContext<
  ComponentProps<"ul">
>("ul", { name: "List" });

export function NavigationMenuList(
  props: NavigationMenuPartProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["onKeyDown"]);

  return (
    <NavigationMenuListBase
      {...rest}
      onKeyDown={(event) => {
        callEventHandler(local.onKeyDown, event);
        if (!event.defaultPrevented) {
          handleNavigationMenuListKeyDown(event);
        }
      }}
    />
  );
}

const NavigationMenuItemBase: Component<NavigationMenuItemProps> = withContext<
  ComponentProps<"li">
>("li", { name: "Item" });

export function NavigationMenuItem(
  props: NavigationMenuItemProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["onFocusOut", "onKeyDown"]);
  const state = useContext(NavigationMenuStateContext);
  const id = createUniqueId();
  const contentId = `${id}-content`;
  let trigger: HTMLButtonElement | undefined;
  const open = () => state.openId() === id;
  const setOpen = (value: boolean) => state.setOpenId(value ? id : null);

  return (
    <NavigationMenuItemContext.Provider
      value={{
        contentId,
        focusTrigger: () => trigger?.focus(),
        open,
        setOpen,
        setTrigger: (element) => {
          trigger = element;
        },
      }}
    >
      <NavigationMenuItemBase
        {...rest}
        onFocusOut={(event) => {
          callEventHandler(local.onFocusOut, event);
          if (
            open() &&
            !event.currentTarget.contains(event.relatedTarget as Node | null)
          ) {
            setOpen(false);
          }
        }}
        onKeyDown={(event) => {
          callEventHandler(local.onKeyDown, event);
          if (open() && event.key === "Escape") {
            event.preventDefault();
            setOpen(false);
            trigger?.focus();
          }
        }}
      />
    </NavigationMenuItemContext.Provider>
  );
}

export function NavigationMenuTrigger(
  props: NavigationMenuTriggerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "class",
    "onClick",
    "onKeyDown",
  ]);
  const styles = useStyles();
  const item = useNavigationMenuItem("Trigger");

  return (
    <ark.button
      {...rest}
      aria-controls={item.contentId}
      aria-expanded={item.open()}
      class={styles.slots.trigger({ class: local.class })}
      data-part="trigger"
      data-scope="navigation-menu"
      onClick={(event) => {
        callEventHandler(local.onClick, event);
        item.setOpen(!item.open());
      }}
      onKeyDown={(event) => {
        callEventHandler(local.onKeyDown, event);
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault();
          item.setOpen(true);
          const position = event.key === "ArrowDown" ? "first" : "last";
          requestAnimationFrame(() =>
            focusNavigationMenuContentLink(item.contentId, position),
          );
        }
      }}
      ref={item.setTrigger}
      type="button"
    >
      {local.children}
    </ark.button>
  );
}

/** Open-state indicator for a trigger; pass your own icon (e.g. a caret). */
export const NavigationMenuIndicator =
  withContext<NavigationMenuIndicatorProps>(ark.span, {
    defaultProps: { "aria-hidden": true },
    name: "Indicator",
  });

export function NavigationMenuContent(
  props: NavigationMenuContentProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "onKeyDown"]);
  const styles = useStyles();
  const item = useNavigationMenuItem("Content");

  return (
    <ul
      {...rest}
      class={styles.slots.content({ class: local.class })}
      data-part="content"
      data-scope="navigation-menu"
      data-state={item.open() ? "open" : "closed"}
      hidden={!item.open()}
      id={item.contentId}
      onKeyDown={(event) => {
        callEventHandler(local.onKeyDown, event);
        handleNavigationMenuContentKeyDown(event);
      }}
    />
  );
}

export function NavigationMenuLink(
  props: NavigationMenuLinkProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["active", "class"]);
  const styles = useStyles();
  const active = () => local.active ?? false;

  return (
    <ark.a
      {...rest}
      aria-current={active() ? "page" : undefined}
      class={styles.slots.link({ class: local.class })}
      data-active={active()}
      data-part="link"
      data-scope="navigation-menu"
    />
  );
}
// #endregion

export const NavigationMenu = Object.assign(NavigationMenuRoot, {
  Content: NavigationMenuContent,
  Indicator: NavigationMenuIndicator,
  Item: NavigationMenuItem,
  Link: NavigationMenuLink,
  List: NavigationMenuList,
  Trigger: NavigationMenuTrigger,
});
