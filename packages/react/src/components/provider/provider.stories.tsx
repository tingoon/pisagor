import { Provider } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Provider,
  parameters: {
    docs: {
      description: {
        component: "Wraps the app with locale, icons, and toasts.",
      },
    },
    metadata: {
      api: "closed",
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
