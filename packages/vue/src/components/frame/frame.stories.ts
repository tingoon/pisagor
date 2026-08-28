import { Frame } from "@pisagor/vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Frame,
  parameters: {
    docs: {
      description: {
        component:
          "Embeds external content in a framed viewport with a consistent chrome around it.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Description: Frame.Description,
    Footer: Frame.Footer,
    Header: Frame.Header,
    Panel: Frame.Panel,
    Title: Frame.Title,
  },
  title: "Components/Media/Frame",
});

export const Default = meta.story({
  render: () => ({
    components: { Frame },
    template: `
      <Frame>
        <Frame.Header>
          <Frame.Title>Section header</Frame.Title>
          <Frame.Description>Brief description about the section</Frame.Description>
        </Frame.Header>
        <Frame.Panel>
          <h2 class="font-semibold text-sm">Section title</h2>
          <p class="text-muted-foreground text-sm">Section description</p>
        </Frame.Panel>
        <Frame.Footer>
          <p class="text-muted-foreground text-sm">Footer</p>
        </Frame.Footer>
      </Frame>
    `,
  }),
});

export const SeparatedPanels = meta.story({
  render: () => ({
    components: { Frame },
    template: `
      <Frame>
        <Frame.Header>
          <Frame.Title>Section header</Frame.Title>
          <Frame.Description>Brief description about the section</Frame.Description>
        </Frame.Header>
        <Frame.Panel>
          <h2 class="font-semibold text-sm">Separated panel</h2>
          <p class="text-muted-foreground text-sm">Section description</p>
        </Frame.Panel>
        <Frame.Panel>
          <h2 class="font-semibold text-sm">Separated panel</h2>
          <p class="text-muted-foreground text-sm">Section description</p>
        </Frame.Panel>
      </Frame>
    `,
  }),
});
