import {
  PhArrowSquareOut,
  PhDownload,
  PhGear,
  PhHeart,
  PhPaperPlaneTilt,
  PhPlus,
  PhStar,
} from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "Triggers an action or navigation when clicked, with styles that reflect how important the action is.",
      },
    },
  },
  title: "Components/Actions/Button",
});

export const Default = meta.story({
  render: () => ({
    components: { Button },
    template: "<Button>Button</Button>",
  }),
});

export const Sizes = meta.story({
  render: () => ({
    components: { Button, PhPlus },
    setup() {
      return { sizes: ["xs", "sm", "md", "lg", "xl"] as const };
    },
    template: `
      <div class="flex flex-col gap-2">
        <div v-for="size in sizes" :key="size" class="flex items-center gap-2">
          <Button :size="size">Button</Button>
          <Button :size="'icon-' + size"><PhPlus /></Button>
        </div>
      </div>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-2">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    `,
  }),
});

export const CustomColor = meta.story({
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-2">
        <Button class="bg-indigo-600 text-white shadow-indigo-600/24 hover:bg-indigo-700 focus-visible:ring-indigo-600/50">Indigo</Button>
        <Button class="bg-pink-600 text-white shadow-pink-600/24 hover:bg-pink-700 focus-visible:ring-pink-600/50">Pink</Button>
        <Button class="bg-sky-600 text-white shadow-sky-600/24 hover:bg-sky-700 focus-visible:ring-sky-600/50">Sky</Button>
        <Button class="bg-purple-600 text-white shadow-purple-600/24 hover:bg-purple-700 focus-visible:ring-purple-500/50">Purple</Button>
      </div>
    `,
  }),
});

export const Pill = meta.story({
  render: () => ({
    components: { Button, PhPlus },
    template: `
      <Button pill variant="outline">
        <PhPlus />
        Add
      </Button>
    `,
  }),
});

export const NoClickEffect = meta.story({
  render: () => ({
    components: { Button },
    template: '<Button :click-effect="false">Button</Button>',
  }),
});

export const Icon = meta.story({
  render: () => ({
    components: { Button, PhStar },
    template: `
      <Button size="icon-md" variant="outline">
        <PhStar />
      </Button>
    `,
  }),
});

export const AsChild = meta.story({
  render: () => ({
    components: { Button },
    template: `
      <Button as-child>
        <a href="/login">Login</a>
      </Button>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { Button, PhPaperPlaneTilt },
    template: `
      <Button disabled>
        Send
        <PhPaperPlaneTilt />
      </Button>
    `,
  }),
});

export const Loading = meta.story({
  render: () => ({
    components: { Button },
    template: "<Button is-loading>Loading</Button>",
  }),
});

export const WithIcon = meta.story({
  render: () => ({
    components: { Button, PhArrowSquareOut, PhDownload, PhGear, PhHeart, PhPlus },
    template: `
      <div class="flex flex-wrap gap-2">
        <Button variant="default"><PhPlus /> Add</Button>
        <Button variant="outline"><PhGear /> Settings</Button>
        <Button variant="secondary"><PhHeart /> Favorite</Button>
        <Button variant="ghost"><PhDownload /> Download</Button>
        <Button variant="link">Visit website <PhArrowSquareOut /></Button>
      </div>
    `,
  }),
});
