import { PhAt, PhCopy, PhEye, PhFileCode, PhFunnel, PhMagnifyingGlass } from "@phosphor-icons/vue";
import { Badge } from "@pisagor/vue/badge";
import { InputGroup } from "@pisagor/vue/input-group";
import { Kbd } from "@pisagor/vue/kbd";
import { Spinner } from "@pisagor/vue/spinner";
import { Surface } from "@pisagor/vue/surface";
import { h } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: InputGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Combines inputs with icons, buttons, or labels in one control so related actions stay together.",
      },
    },
  },
  subcomponents: {
    Addon: InputGroup.Addon,
    Button: InputGroup.Button,
    Input: InputGroup.Input,
    Text: InputGroup.Text,
    Textarea: InputGroup.Textarea,
  },
  title: "Components/Forms/Input Group",
});

export const Default = meta.story({
  render: () => ({
    components: { InputGroup, PhMagnifyingGlass },
    template: `
      <InputGroup>
        <InputGroup.Input placeholder="Search..." />
        <InputGroup.Addon>
          <PhMagnifyingGlass />
        </InputGroup.Addon>
      </InputGroup>
    `,
  }),
});

export const Sizes = meta.story({
  render: () => ({
    components: { InputGroup },
    template: `
      <div class="flex flex-col gap-2">
        <InputGroup size="sm"><InputGroup.Input placeholder="Small" /></InputGroup>
        <InputGroup size="md"><InputGroup.Input placeholder="Medium" /></InputGroup>
        <InputGroup size="lg"><InputGroup.Input placeholder="Large" /></InputGroup>
      </div>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { InputGroup, PhMagnifyingGlass },
    template: `
      <div class="flex flex-col gap-2">
        <InputGroup variant="primary">
          <InputGroup.Input placeholder="Primary" />
          <InputGroup.Addon>
            <PhMagnifyingGlass aria-hidden="true" />
          </InputGroup.Addon>
        </InputGroup>
        <InputGroup variant="secondary">
          <InputGroup.Input placeholder="Secondary" />
          <InputGroup.Addon>
            <PhMagnifyingGlass aria-hidden="true" />
          </InputGroup.Addon>
        </InputGroup>
      </div>
    `,
  }),
});

export const OnSurface = meta.story({
  render: () => ({
    components: { InputGroup, PhMagnifyingGlass, Surface },
    template: `
      <Surface bordered padding="md" variant="default">
        <div class="flex flex-col gap-2">
          <InputGroup variant="primary">
            <InputGroup.Input placeholder="Primary" />
            <InputGroup.Addon>
              <PhMagnifyingGlass aria-hidden="true" />
            </InputGroup.Addon>
          </InputGroup>
          <InputGroup variant="secondary">
            <InputGroup.Input placeholder="Secondary" />
            <InputGroup.Addon>
              <PhMagnifyingGlass aria-hidden="true" />
            </InputGroup.Addon>
          </InputGroup>
        </div>
      </Surface>
    `,
  }),
});

export const WithText = meta.story({
  render: () => ({
    components: { InputGroup },
    template: `
      <InputGroup>
        <InputGroup.Addon>
          <InputGroup.Text>https://</InputGroup.Text>
        </InputGroup.Addon>
        <InputGroup.Input placeholder="example.com" />
      </InputGroup>
    `,
  }),
});

export const WithTextarea = meta.story({
  render: () => ({
    components: { InputGroup },
    setup() {
      return {
        icon: () => h(PhMagnifyingGlass),
      };
    },
    template: `
      <InputGroup>
        <InputGroup.Textarea placeholder="Write a comment..." rows="3" />
      </InputGroup>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { InputGroup, PhMagnifyingGlass },
    template: `
      <InputGroup>
        <InputGroup.Input disabled placeholder="Search..." />
        <InputGroup.Addon>
          <PhMagnifyingGlass aria-hidden="true" />
        </InputGroup.Addon>
      </InputGroup>
    `,
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { InputGroup },
    template: `
      <InputGroup>
        <InputGroup.Addon>
          <InputGroup.Text>https://</InputGroup.Text>
        </InputGroup.Addon>
        <InputGroup.Input aria-invalid class="pl-1!" placeholder="example.com" />
      </InputGroup>
    `,
  }),
});

export const AlignBlockEnd = meta.story({
  render: () => ({
    components: { InputGroup },
    template: `
      <div class="flex flex-col gap-2">
        <InputGroup>
          <InputGroup.Textarea placeholder="Write a comment..." />
          <InputGroup.Addon align="block-end">
            <InputGroup.Text>0/280</InputGroup.Text>
            <InputGroup.Button class="ml-auto" size="xs">
              Post
            </InputGroup.Button>
          </InputGroup.Addon>
        </InputGroup>
        <p class="text-muted-foreground text-sm">Footer positioned below the textarea.</p>
      </div>
    `,
  }),
});

export const AlignBlockStart = meta.story({
  render: () => ({
    components: { InputGroup, PhCopy, PhFileCode },
    template: `
      <div class="flex flex-col gap-2">
        <InputGroup>
          <InputGroup.Textarea
            class="font-mono text-sm"
            placeholder="console.log('Hello, world!');"
          />
          <InputGroup.Addon align="block-start">
            <PhFileCode class="text-muted-foreground" />
            <InputGroup.Text class="font-mono">script.js</InputGroup.Text>
            <InputGroup.Button class="ml-auto" size="icon-xs">
              <PhCopy />
              <span class="sr-only">Copy</span>
            </InputGroup.Button>
          </InputGroup.Addon>
        </InputGroup>
        <p class="text-muted-foreground text-sm">Header positioned above the textarea.</p>
      </div>
    `,
  }),
});

export const AlignInlineEnd = meta.story({
  render: () => ({
    components: { InputGroup, PhEye },
    template: `
      <div class="flex flex-col gap-2">
        <InputGroup>
          <InputGroup.Input placeholder="Enter password" />
          <InputGroup.Addon align="inline-end">
            <PhEye aria-hidden="true" />
          </InputGroup.Addon>
        </InputGroup>
        <p class="text-muted-foreground text-sm">Icon positioned at the end.</p>
      </div>
    `,
  }),
});

export const AlignInlineStart = meta.story({
  render: () => ({
    components: { InputGroup, PhFunnel },
    template: `
      <div class="flex flex-col gap-2">
        <InputGroup>
          <InputGroup.Addon align="inline-start">
            <PhFunnel aria-hidden="true" />
          </InputGroup.Addon>
          <InputGroup.Input placeholder="Search..." />
        </InputGroup>
        <p class="text-muted-foreground text-sm">Icon positioned at the start.</p>
      </div>
    `,
  }),
});

export const WithBadge = meta.story({
  render: () => ({
    components: { Badge, InputGroup, PhAt },
    template: `
      <InputGroup>
        <InputGroup.Input placeholder="Enter tag" />
        <InputGroup.Addon align="inline-end">
          <Badge pill size="sm" variant="success">
            Available
          </Badge>
        </InputGroup.Addon>
        <InputGroup.Addon align="inline-start">
          <PhAt />
        </InputGroup.Addon>
      </InputGroup>
    `,
  }),
});

export const WithKeyboardShortcut = meta.story({
  render: () => ({
    components: { InputGroup, Kbd },
    template: `
      <InputGroup>
        <InputGroup.Input placeholder="Search..." />
        <InputGroup.Addon align="inline-end">
          <Kbd>⌘K</Kbd>
        </InputGroup.Addon>
      </InputGroup>
    `,
  }),
});

export const WithSpinner = meta.story({
  render: () => ({
    components: { InputGroup, Spinner },
    template: `
      <InputGroup data-disabled>
        <InputGroup.Input disabled placeholder="Loading..." />
        <InputGroup.Addon align="inline-end">
          <Spinner aria-label="Loading" />
        </InputGroup.Addon>
      </InputGroup>
    `,
  }),
});
