import { Provider } from "@pisagor/vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Provider,
  parameters: {
    docs: {
      description: {
        component: "Wraps the app with locale and shared library context.",
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
  render: () => ({
    components: { Provider },
    template: `
      <Provider>
        <div class="rounded-xl border bg-muted px-4 py-3 text-foreground text-sm">
          App content wrapped by Provider.
        </div>
      </Provider>
    `,
  }),
});
