import { PhWarning } from "@phosphor-icons/vue";
import { Announcement } from "@pisagor/vue/announcement";
import { AppShell, useAppShell } from "@pisagor/vue/app-shell";
import { Badge } from "@pisagor/vue/badge";
import { Button } from "@pisagor/vue/button";
import { defineComponent, h, ref, type VNodeChild } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: AppShell,
  parameters: {
    docs: {
      description: {
        component:
          "Multi-region application shell with draggable side panels and an optional inspector for dashboard layouts.",
      },
    },
    layout: "fullscreen",
  },
  subcomponents: {
    Banner: AppShell.Banner,
    Content: AppShell.Content,
    Header: AppShell.Header,
    Inspector: AppShell.Inspector,
    InspectorContent: AppShell.InspectorContent,
    InspectorFooter: AppShell.InspectorFooter,
    InspectorHeader: AppShell.InspectorHeader,
    InspectorTrigger: AppShell.InspectorTrigger,
    Main: AppShell.Main,
    Navigation: AppShell.Navigation,
    Panel: AppShell.Panel,
    PanelContent: AppShell.PanelContent,
    PanelFooter: AppShell.PanelFooter,
    PanelHeader: AppShell.PanelHeader,
    PanelTrigger: AppShell.PanelTrigger,
    Rail: AppShell.Rail,
    RailItem: AppShell.RailItem,
  },
  title: "Components/Layout/App Shell",
});

const ActiveRailPanelContent = defineComponent({
  name: "ActiveRailPanelContent",
  setup() {
    const context = useAppShell();

    return () => {
      if (!context) return null;
      const { railStates } = context;

      return h(AppShell.PanelContent, null, () =>
        regionTitle(
          railStates.start?.activeRailId ? `Panel: ${railStates.start.activeRailId}` : "Panel",
        ),
      );
    };
  },
});

export const Default = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Standard shell layout with banner, navigation, rails, a start panel, and main content.",
      },
    },
  },
  render: () => () =>
    h(AppShell, null, () => [
      h(AppShell.Banner, null, () => regionTitle("Banner")),

      h(AppShell.Navigation, null, () => regionTitle("Navigation")),

      h(AppShell.Rail, { defaultActiveRailId: "home", placement: "start" }, () => [
        h(AppShell.RailItem, { opensPanel: true, railId: "home", tooltip: "Home" }, () => "H"),
        h(AppShell.RailItem, { opensPanel: true, railId: "search", tooltip: "Search" }, () => "S"),
      ]),

      h(AppShell.Panel, { defaultOpen: true }, () => [
        h(AppShell.PanelContent, null, () => regionTitle("Start panel")),
      ]),

      h(AppShell.Main, null, () => [
        h(AppShell.Header, null, () => [
          h(AppShell.PanelTrigger, { "aria-label": "Toggle start panel" }),
          h("div", { class: "flex min-w-0 flex-1 justify-center" }, [regionTitle("Header")]),
        ]),
        mainContent("Content"),
      ]),

      h(AppShell.Rail, { defaultActiveRailId: "notes", placement: "end" }, () => [
        h(AppShell.RailItem, { railId: "notes", tooltip: "Notes" }, () => "N"),
        h(AppShell.RailItem, { railId: "chat", tooltip: "Chat" }, () => "C"),
      ]),
    ]),
});

export const Banner = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Fixed top banner with a dismiss control. Hiding the banner collapses the shell spacer.",
      },
    },
  },
  render: () => ({
    setup() {
      const opened = ref(true);
      const close = () => {
        opened.value = false;
      };

      return () =>
        h(AppShell, null, () => [
          opened.value
            ? h(AppShell.Banner, { class: "flex items-center justify-center gap-1 p-2" }, () => [
                h(Announcement, {
                  badge: h(Badge, { variant: "destructive" }, () => [
                    h(PhWarning),
                    "Process interrupted",
                  ]),
                  role: "alert",
                  title:
                    "Something went wrong during the process. Try again or contact support if the problem continues.",
                }),
                h(Button, { onClick: close, pill: true, size: "sm" }, () => "Dismiss"),
              ])
            : null,
          h(AppShell.Main, null, () => mainContent("Main")),
        ]);
    },
  }),
});

export const Navigation = meta.story({
  render: () => () =>
    h(AppShell, null, () => [
      h(AppShell.Navigation, null, () => regionTitle("Navigation")),
      h(AppShell.Main, null, () => mainContent("Main")),
    ]),
});

export const Inspectors = meta.story({
  render: () => () =>
    h(AppShell, null, () => [
      h(AppShell.Navigation, null, () => [
        h("div", { class: "flex items-center gap-2" }, [
          h(AppShell.InspectorTrigger, {
            "aria-label": "Toggle start inspector",
            placement: "start",
          }),
          regionTitle("Navigation"),
          h(AppShell.InspectorTrigger, {
            "aria-label": "Toggle end inspector",
            placement: "end",
          }),
        ]),
      ]),

      h(AppShell.Inspector, { defaultOpen: true, placement: "start" }, () => [
        h(AppShell.InspectorHeader, null, () => regionTitle("Start inspector header")),
        h(AppShell.InspectorContent, null, () => regionTitle("Start inspector")),
        h(AppShell.InspectorFooter, null, () => regionTitle("Start inspector footer")),
      ]),

      h(AppShell.Main, null, () => mainContent("Main")),

      h(AppShell.Inspector, { defaultOpen: true, placement: "end" }, () => [
        h(AppShell.InspectorHeader, null, () => regionTitle("End inspector header")),
        h(AppShell.InspectorContent, null, () => regionTitle("End inspector")),
        h(AppShell.InspectorFooter, null, () => regionTitle("End inspector footer")),
      ]),
    ]),
});

export const Panels = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Start and end panels with `PanelHeader`, `PanelContent`, and `PanelFooter` sub-regions.",
      },
    },
  },
  render: () => () =>
    h(AppShell, null, () => [
      h(AppShell.Navigation, null, () => regionTitle("Navigation")),

      h(AppShell.Panel, { defaultOpen: true, placement: "start" }, () => [
        h(AppShell.PanelHeader, null, () => regionTitle("Start panel header")),
        h(AppShell.PanelContent, null, () => regionTitle("Start panel")),
        h(AppShell.PanelFooter, null, () => regionTitle("Start panel footer")),
      ]),

      h(AppShell.Main, null, () => [
        h(AppShell.Header, null, () => [
          h(AppShell.PanelTrigger, { "aria-label": "Toggle start panel", placement: "start" }),
          h(AppShell.PanelTrigger, { "aria-label": "Toggle end panel", placement: "end" }),
        ]),
        mainContent("Main"),
      ]),

      h(AppShell.Panel, { defaultOpen: true, placement: "end" }, () => [
        h(AppShell.PanelHeader, null, () => regionTitle("End panel header")),
        h(AppShell.PanelContent, null, () => regionTitle("End panel")),
        h(AppShell.PanelFooter, null, () => regionTitle("End panel footer")),
      ]),
    ]),
});

export const Rails = meta.story({
  render: () => () =>
    h(AppShell, null, () => [
      h(AppShell.Rail, { defaultActiveRailId: "home", placement: "start" }, () => [
        h(AppShell.RailItem, { opensPanel: true, railId: "home", tooltip: "Home" }, () => "H"),
        h(AppShell.RailItem, { opensPanel: true, railId: "search", tooltip: "Search" }, () => "S"),
        h(
          AppShell.RailItem,
          { opensPanel: true, railId: "settings", tooltip: "Settings" },
          () => "G",
        ),
      ]),

      h(AppShell.Panel, { placement: "start" }, () => h(ActiveRailPanelContent)),

      h(AppShell.Main, null, () => [
        h(AppShell.Header, null, () => regionTitle("Header")),
        mainContent("Main"),
      ]),

      h(AppShell.Rail, { defaultActiveRailId: "notes", placement: "end" }, () => [
        h(AppShell.RailItem, { railId: "notes", tooltip: "Notes" }, () => "N"),
        h(AppShell.RailItem, { railId: "chat", tooltip: "Chat" }, () => "C"),
      ]),
    ]),
});

export const Header = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Toolbar row inside `AppShell.Main`. Pair with panel triggers in the header and inspector triggers in navigation.",
      },
    },
  },
  render: () => () =>
    h(AppShell, null, () => [
      h(AppShell.Navigation, null, () => [
        h("div", { class: "flex items-center gap-2" }, [
          regionTitle("Navigation"),
          h(AppShell.InspectorTrigger, {
            "aria-label": "Toggle end inspector",
            placement: "end",
          }),
        ]),
      ]),

      h(AppShell.Panel, { defaultOpen: true, placement: "start" }, () => [
        h(AppShell.PanelContent, null, () => regionTitle("Start panel")),
      ]),

      h(AppShell.Inspector, { defaultOpen: true, placement: "end" }, () => [
        h(AppShell.InspectorContent, null, () => regionTitle("End inspector")),
      ]),

      h(AppShell.Main, null, () => [
        h(AppShell.Header, null, () => [
          h(AppShell.PanelTrigger, { "aria-label": "Toggle start panel", placement: "start" }),
          h("div", { class: "flex min-w-0 flex-1 justify-center" }, [regionTitle("Header")]),
        ]),
        mainContent("Main"),
      ]),
    ]),
});

export const Main = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Primary column spanning the shell grid. Holds the page header and scrollable content.",
      },
    },
  },
  render: () => () =>
    h(AppShell, null, () => [
      h(AppShell.Navigation, null, () => regionTitle("Navigation")),
      h(AppShell.Main, null, () => [
        h(AppShell.Header, null, () => regionTitle("Header")),
        h(AppShell.Content, null, () => [
          regionTitle("Main"),
          ...loremParagraphs(8).map((paragraph, index) =>
            h("p", { key: index, style: { fontSize: "15px" } }, paragraph),
          ),
        ]),
      ]),
    ]),
});

export const Content = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Scrollable page body inside `AppShell.Main`. Long content grows the page and scrolls on the body.",
      },
    },
  },
  render: () => () =>
    h(AppShell, null, () => [
      h(AppShell.Navigation, null, () => regionTitle("Navigation")),
      h(AppShell.Main, null, () => [
        h(AppShell.Header, null, () => regionTitle("Header")),
        mainContent("Content"),
      ]),
    ]),
});

const LOREM_PARAGRAPH =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

function loremParagraphs(count: number) {
  return Array.from({ length: count }, () => LOREM_PARAGRAPH);
}

function regionTitle(text: string): VNodeChild {
  return h("div", { class: "flex min-h-12 w-full items-center justify-center" }, [
    h("h6", { class: "text-center leading-4" }, text),
  ]);
}

function mainContent(title: string, paragraphs = 24): VNodeChild {
  return h(AppShell.Content, null, () => [
    h("h6", { style: { marginBottom: "8px" } }, title),
    ...loremParagraphs(paragraphs).map((paragraph, index) =>
      h("p", { key: index, style: { fontSize: "15px" } }, paragraph),
    ),
  ]);
}
