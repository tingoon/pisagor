import { Provider } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Provider,
  parameters: {
    docs: {
      api: "closed",
      checklist: {
        definedBehaviors: true,
      },
      description: {
        component: "Wraps the app with locale, icons, hotkeys, and toasts.",
      },
      taxonomy: "primitive",
    },
  },
  title: "Components/Utilities/Provider",
});

export const Default = meta.story({
  render: () => (
    <Provider>
      <div className="rounded-xl border bg-muted px-4 py-3 text-foreground text-sm">
        App content wrapped by Provider.
      </div>
    </Provider>
  ),
});
