import {
  PhGear,
  PhHouse,
  PhMagnifyingGlass,
  PhSquaresFour,
  PhUsers,
} from "@phosphor-icons/vue";
import { standardAppShellBlock } from "@pisagor/recipes/blocks/app-shell";
import { cn } from "@pisagor/utils";
import { AppShell, Button, useAppShell } from "@pisagor/vue";
import { defineComponent, h, type PropType } from "vue";

const styles = standardAppShellBlock();

type ArkPart = Parameters<typeof h>[0];

const RAIL_ITEMS = [
  { icon: PhHouse, id: "home", label: "Home" },
  { icon: PhSquaresFour, id: "projects", label: "Projects" },
  { icon: PhUsers, id: "team", label: "Team" },
  { icon: PhMagnifyingGlass, id: "search", label: "Search" },
  { icon: PhGear, id: "settings", label: "Settings" },
] as const;

const PANEL_NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "activity", label: "Activity" },
  { id: "members", label: "Members" },
  { id: "settings", label: "Settings" },
] as const;

export interface StandardAppShellProps {
  /** Page title shown in the main header. */
  title?: string;
  /** Root class override. */
  class?: unknown;
}

export const StandardAppShell = defineComponent({
  inheritAttrs: false,
  name: "StandardAppShell",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    title: { default: "Dashboard", type: String },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        AppShell as ArkPart,
        {
          ...attrs,
          class: cn(styles.root(), props.class),
        },
        () => [
          StandardAppShellNavigation(),
          h(
            AppShell.Rail as ArkPart,
            {
              defaultActiveRailId: "home",
              placement: "start",
            },
            () =>
              RAIL_ITEMS.map(({ icon: Icon, id, label }) =>
                h(
                  AppShell.RailItem as ArkPart,
                  { key: id, opensPanel: true, railId: id, tooltip: label },
                  () => [
                    h(Icon as ArkPart, { "aria-hidden": true }),
                    h("span", { class: styles.srOnly() }, label),
                  ],
                ),
              ),
          ),
          h(
            AppShell.Panel as ArkPart,
            { defaultOpen: true, placement: "start" },
            () => [
              h(AppShell.PanelHeader as ArkPart, null, () =>
                h(ActiveRailTitle),
              ),
              h(StandardAppShellPanelNav),
            ],
          ),
          h(AppShell.Main as ArkPart, null, () => [
            h(AppShell.Header as ArkPart, null, () => [
              h(AppShell.PanelTrigger as ArkPart, {
                "aria-label": "Toggle navigation panel",
                placement: "start",
              }),
              h("h1", { class: styles.title() }, props.title),
            ]),
            h(
              AppShell.Content as ArkPart,
              null,
              () => slots.default?.() ?? h(StandardAppShellPlaceholder),
            ),
          ]),
          h(AppShell.Inspector as ArkPart, { placement: "end" }, () => [
            h(AppShell.InspectorHeader as ArkPart, null, () =>
              h("h2", { class: styles.title() }, "Inspector"),
            ),
            h(AppShell.InspectorContent as ArkPart, null, () =>
              h(
                "p",
                { class: styles.inspectorBody() },
                "Contextual details, filters, or metadata go here.",
              ),
            ),
          ]),
        ],
      );
  },
});

/** Top navigation row — extend with primary links, search, and account menus. */
export function StandardAppShellNavigation() {
  return h(AppShell.Navigation as ArkPart, null, () =>
    h("div", { class: styles.navRow() }, () => [
      h("span", { class: styles.brand() }, "Acme"),
      h(
        "nav",
        { "aria-label": "Primary", class: styles.primaryNav() },
        () => undefined,
      ),
      h("div", { class: styles.navActions() }, () => [
        h(AppShell.InspectorTrigger as ArkPart, {
          "aria-label": "Toggle inspector",
          placement: "end",
        }),
      ]),
    ]),
  );
}

/** Side panel navigation — replace items or wire up routing. */
export function StandardAppShellPanelNav({
  class: className,
}: {
  class?: unknown;
} = {}) {
  return h(AppShell.PanelContent as ArkPart, { class: className }, () =>
    h("nav", { "aria-label": "Section", class: styles.panelNav() }, () =>
      PANEL_NAV_ITEMS.map((item) =>
        h(
          Button as ArkPart,
          {
            class: styles.panelItem(),
            key: item.id,
            type: "button",
            variant: item.id === "overview" ? "secondary" : "ghost",
          },
          () => item.label,
        ),
      ),
    ),
  );
}

const ActiveRailTitle = defineComponent({
  name: "ActiveRailTitle",
  setup() {
    const appShell = useAppShell();
    if (!appShell) {
      return () => null;
    }

    const { railStates } = appShell;

    return () => {
      const activeRailId = railStates.start?.activeRailId;
      const activeItem = RAIL_ITEMS.find((item) => item.id === activeRailId);

      return h(
        "h2",
        {
          class: styles.railTitle(),
        },
        activeItem?.label ?? "Navigation",
      );
    };
  },
});

function StandardAppShellPlaceholder() {
  return h("div", { class: styles.placeholder() }, () => [
    h("div", { class: styles.placeholderCopy() }, () => [
      h("h2", { class: styles.placeholderHeading() }, "Welcome back"),
      h(
        "p",
        { class: styles.placeholderText() },
        "Main content area. Replace this block with your page layout.",
      ),
    ]),
    h(
      Button as ArkPart,
      { class: styles.placeholderAction(), variant: "outline" },
      () => "Example action",
    ),
  ]);
}
