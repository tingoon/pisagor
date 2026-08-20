import { PhMagnifyingGlass } from "@phosphor-icons/vue";
import { EmptyState } from "@pisagor/vue";
import { h } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: EmptyState,
  parameters: {
    docs: {
      description: {
        component:
          "Shows a centered placeholder when a view has no data and offers the next relevant actions.",
      },
    },
  },
  subcomponents: {
    Actions: EmptyState.Actions,
    Description: EmptyState.Description,
    Media: EmptyState.Media,
    Root: EmptyState.Root,
    Title: EmptyState.Title,
  },
  title: "Components/Feedback/Empty State",
});

export const Default = meta.story({
  render: () => ({
    components: { EmptyState },
    setup() {
      return {
        actions: h("div", { class: "flex flex-wrap justify-center gap-2" }, [
          h(
            "button",
            {
              class:
                "inline-flex h-9 items-center rounded-lg bg-primary px-4 text-primary-foreground text-sm",
            },
            "Create project",
          ),
          h(
            "button",
            { class: "inline-flex h-9 items-center rounded-lg border px-4 text-sm" },
            "Clear filters",
          ),
        ]),
        media: h(PhMagnifyingGlass),
      };
    },
    template: `
      <EmptyState
        title="No projects found"
        description="No items match your current filters. Try clearing filters or creating a new project."
        :media="media"
        :actions="actions"
      />
    `,
  }),
});

export const Compact = meta.story({
  render: () => ({
    components: { EmptyState },
    template: `
      <EmptyState
        class="p-6"
        title="No notifications"
        description="You're all caught up. New notifications will appear here."
      />
    `,
  }),
});

export const Compound = meta.story({
  render: () => ({
    components: { EmptyState, PhMagnifyingGlass },
    template: `
      <EmptyState.Root>
        <EmptyState.Media>
          <PhMagnifyingGlass />
        </EmptyState.Media>
        <EmptyState.Title>No projects found</EmptyState.Title>
        <EmptyState.Description>
          No items match your current filters. Try clearing filters or creating a new project.
        </EmptyState.Description>
        <EmptyState.Actions>
          <button class="inline-flex h-9 items-center rounded-lg bg-primary px-4 text-primary-foreground text-sm">
            Create project
          </button>
        </EmptyState.Actions>
      </EmptyState.Root>
    `,
  }),
});
