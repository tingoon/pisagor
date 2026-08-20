import { PhArrowUpRight, PhPlusCircle } from "@phosphor-icons/vue";
import { Badge, Spinner } from "@pisagor/vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          "Labels content with a compact status, category, or count so users can scan it quickly.",
      },
    },
  },
  title: "Components/Data Display/Badge",
});

export const Default = meta.story({
  render: () => ({
    components: { Badge },
    template: "<Badge>Badge</Badge>",
  }),
});

export const Sizes = meta.story({
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap items-center gap-2">
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </div>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-2">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
      </div>
    `,
  }),
});

export const CustomColor = meta.story({
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-2">
        <Badge class="border-indigo-200/20 bg-indigo-500/10 text-indigo-500">Indigo</Badge>
        <Badge class="border-pink-200/20 bg-pink-500/10 text-pink-500">Pink</Badge>
        <Badge class="border-sky-200/20 bg-sky-500/10 text-sky-500">Sky</Badge>
        <Badge class="border-purple-200/20 bg-purple-500/10 text-purple-500">Purple</Badge>
      </div>
    `,
  }),
});

export const Pill = meta.story({
  render: () => ({
    components: { Badge },
    template: "<Badge pill>Badge</Badge>",
  }),
});

export const WithLink = meta.story({
  render: () => ({
    components: { Badge, PhArrowUpRight, PhPlusCircle },
    template: `
      <Badge as-child variant="info">
        <a href="https://example.com/components">
          <PhPlusCircle />
          New components
          <PhArrowUpRight />
        </a>
      </Badge>
    `,
  }),
});

export const WithSpinner = meta.story({
  render: () => ({
    components: { Badge, Spinner },
    template: `
      <div class="flex flex-wrap items-center gap-2">
        <Badge variant="destructive">
          <Spinner />
          Deleting
        </Badge>
        <Badge variant="outline">
          Generating
          <Spinner />
        </Badge>
      </div>
    `,
  }),
});
