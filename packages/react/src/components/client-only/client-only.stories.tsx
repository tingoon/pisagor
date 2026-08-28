import preview from "#/storybook/preview";
import { ClientOnly } from "..";

const meta = preview.meta({
  component: ClientOnly,
  parameters: {
    docs: {
      description: {
        component:
          "Renders content only in the browser so server output stays stable when a feature depends on client APIs.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Utilities/Client Only",
});

export const Default = meta.story({
  render: () => (
    <ClientOnly>
      <div className="rounded-xl border bg-muted px-4 py-3 text-foreground text-sm">
        This content is only rendered on the client side.
      </div>
    </ClientOnly>
  ),
});

export const Fallback = meta.story({
  render: () => {
    const CurrentTime = () => {
      const now = new Date();

      return (
        <div className="rounded-xl border bg-muted px-4 py-3 text-foreground text-sm">
          Current time: {now.toLocaleTimeString()}
        </div>
      );
    };
    return (
      <ClientOnly
        fallback={
          <div className="rounded-xl border border-dashed bg-muted/50 px-4 py-3 text-muted-foreground text-sm">
            Loading…
          </div>
        }
      >
        <CurrentTime />
      </ClientOnly>
    );
  },
});
