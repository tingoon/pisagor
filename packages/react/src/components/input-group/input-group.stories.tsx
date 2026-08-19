import {
  ArrowUpIcon,
  AtIcon,
  CopyIcon,
  EyeIcon,
  FileCodeIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@phosphor-icons/react";
import { Badge } from "@pisagor/react/badge";
import { Button } from "@pisagor/react/button";
import { InputGroup } from "@pisagor/react/input-group";
import { Kbd } from "@pisagor/react/kbd";
import { Spinner } from "@pisagor/react/spinner";
import preview, { SurfaceDecorator } from "#/react/preview";

const meta = preview.meta({
  component: InputGroup,
  parameters: {
    docs: {
      api: "compound",
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component:
          "Combines inputs with icons, buttons, or labels in one control so related actions stay together.",
      },
      taxonomy: "standard",
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
  render: () => (
    <InputGroup>
      <InputGroup.Input placeholder="Search..." />
      <InputGroup.Addon>
        <MagnifyingGlassIcon />
      </InputGroup.Addon>
    </InputGroup>
  ),
});

export const Sizes = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <InputGroup size="sm">
        <InputGroup.Input placeholder="Search..." />
        <InputGroup.Addon>
          <MagnifyingGlassIcon aria-hidden />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup size="md">
        <InputGroup.Input placeholder="Search..." />
        <InputGroup.Addon>
          <MagnifyingGlassIcon aria-hidden />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup size="lg">
        <InputGroup.Input placeholder="Search..." />
        <InputGroup.Addon>
          <MagnifyingGlassIcon aria-hidden />
        </InputGroup.Addon>
      </InputGroup>
    </div>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <InputGroup variant="primary">
        <InputGroup.Input placeholder="Primary" />
        <InputGroup.Addon>
          <MagnifyingGlassIcon aria-hidden />
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup variant="secondary">
        <InputGroup.Input placeholder="Secondary" />
        <InputGroup.Addon>
          <MagnifyingGlassIcon aria-hidden />
        </InputGroup.Addon>
      </InputGroup>
    </div>
  ),
});

export const OnSurface = Variants.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const WithTextarea = meta.story({
  render: () => (
    <InputGroup>
      <InputGroup.Textarea placeholder="Ask, Search or Chat…" />
      <InputGroup.Addon align="block-end">
        <Button aria-label="Add files" className="rounded-full" size="icon-sm" variant="ghost">
          <PlusIcon />
        </Button>
        <InputGroup.Text className="ml-auto">33% used</InputGroup.Text>
        <Button aria-label="Send" className="rounded-full" size="icon-sm">
          <ArrowUpIcon />
        </Button>
      </InputGroup.Addon>
    </InputGroup>
  ),
});

export const Disabled = meta.story({
  render: () => (
    <InputGroup>
      <InputGroup.Input disabled placeholder="Search..." />
      <InputGroup.Addon>
        <MagnifyingGlassIcon aria-hidden />
      </InputGroup.Addon>
    </InputGroup>
  ),
});

export const Invalid = meta.story({
  render: () => (
    <InputGroup>
      <InputGroup.Addon>
        <InputGroup.Text>https://</InputGroup.Text>
      </InputGroup.Addon>
      <InputGroup.Input aria-invalid className="pl-1!" placeholder="example.com" />
    </InputGroup>
  ),
});

export const AlignBlockEnd = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <InputGroup>
        <InputGroup.Textarea placeholder="Write a comment..." />
        <InputGroup.Addon align="block-end">
          <InputGroup.Text>0/280</InputGroup.Text>
          <InputGroup.Button className="ml-auto" size="xs">
            Post
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
      <p className="text-muted-foreground text-sm">Footer positioned below the textarea.</p>
    </div>
  ),
});

export const AlignBlockStart = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <InputGroup>
        <InputGroup.Textarea
          className="font-mono text-sm"
          placeholder="console.log('Hello, world!');"
        />
        <InputGroup.Addon align="block-start">
          <FileCodeIcon className="text-muted-foreground" />
          <InputGroup.Text className="font-mono">script.js</InputGroup.Text>
          <InputGroup.Button className="ml-auto" size="icon-xs">
            <CopyIcon />
            <span className="sr-only">Copy</span>
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
      <p className="text-muted-foreground text-sm">Header positioned above the textarea.</p>
    </div>
  ),
});

export const AlignInlineEnd = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <InputGroup>
        <InputGroup.Input placeholder="Enter password" />
        <InputGroup.Addon align="inline-end">
          <EyeIcon aria-hidden />
        </InputGroup.Addon>
      </InputGroup>
      <p className="text-muted-foreground text-sm">Icon positioned at the end.</p>
    </div>
  ),
});

export const AlignInlineStart = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <InputGroup>
        <InputGroup.Addon align="inline-start">
          <FunnelIcon aria-hidden />
        </InputGroup.Addon>
        <InputGroup.Input placeholder="Search..." />
      </InputGroup>
      <p className="text-muted-foreground text-sm">Icon positioned at the start.</p>
    </div>
  ),
});

export const WithBadge = meta.story({
  render: () => (
    <InputGroup>
      <InputGroup.Input placeholder="Enter tag" />
      <InputGroup.Addon align="inline-end">
        <Badge pill size="sm" variant="success">
          Available
        </Badge>
      </InputGroup.Addon>
      <InputGroup.Addon align="inline-start">
        <AtIcon />
      </InputGroup.Addon>
    </InputGroup>
  ),
});

export const WithKeyboardShortcut = meta.story({
  render: () => (
    <InputGroup>
      <InputGroup.Input placeholder="Search..." />
      <InputGroup.Addon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroup.Addon>
    </InputGroup>
  ),
});

export const WithSpinner = meta.story({
  render: () => (
    <InputGroup data-disabled>
      <InputGroup.Input disabled placeholder="Loading..." />
      <InputGroup.Addon align="inline-end">
        <Spinner aria-label="Loading" />
      </InputGroup.Addon>
    </InputGroup>
  ),
});
