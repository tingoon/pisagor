import { defineComponent, h, type VNodeChild } from "vue";
import { AppShell, useAppShell } from "..";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export function loremParagraphs(count: number) {
  return Array.from({ length: count }, () => LOREM);
}

export function regionTitle(text: string): VNodeChild {
  return h(
    "div",
    { class: "flex min-h-12 w-full items-center justify-center" },
    [h("h6", { class: "text-center leading-4" }, text)],
  );
}

export function mainContent(title: string, paragraphs = 24): VNodeChild {
  return h(AppShell.Content, null, () => [
    h("h6", { style: { marginBottom: "8px" } }, title),
    ...loremParagraphs(paragraphs).map((paragraph, index) =>
      h(
        "p",
        { key: paragraph + index, style: { fontSize: "15px" } },
        paragraph,
      ),
    ),
  ]);
}

export const ActiveRailPanelContent = defineComponent({
  name: "ActiveRailPanelContent",
  setup() {
    const context = useAppShell();
    return () => {
      if (!context) return null;
      const { railStates } = context;
      return h(AppShell.PanelContent, null, () =>
        regionTitle(
          railStates.start?.activeRailId
            ? `Panel: ${railStates.start.activeRailId}`
            : "Panel",
        ),
      );
    };
  },
});
