import {
  ArrowLeftIcon,
  BracketsCurlyIcon,
  DotsThreeIcon,
  ImageSquareIcon,
  MinusIcon,
  PlayIcon,
  PlusIcon,
  SkipBackIcon,
  SkipForwardIcon,
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from "@phosphor-icons/react";
import preview from "#/storybook/preview";
import { Button, ButtonGroup } from "..";

const meta = preview.meta({
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Groups related actions together so users can compare choices and pick one option from a set.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Separator: ButtonGroup.Separator,
    Text: ButtonGroup.Text,
  },
  title: "Components/Actions/Button Group",
});

export const Default = meta.story({
  render: () => (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex">
        <Button aria-label="Go back" size="icon-md" variant="outline">
          <ArrowLeftIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Snooze</Button>
        <Button aria-label="More options" size="icon-md" variant="outline">
          <DotsThreeIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  ),
});

export const OrientationHorizontal = meta.story({
  render: () => (
    <ButtonGroup>
      <Button aria-label="Skip back" size="icon-md" variant="outline">
        <SkipBackIcon />
      </Button>
      <Button aria-label="Play" size="icon-md" variant="outline">
        <PlayIcon />
      </Button>
      <Button aria-label="Skip forward" size="icon-md" variant="outline">
        <SkipForwardIcon />
      </Button>
    </ButtonGroup>
  ),
});

export const OrientationVertical = meta.story({
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button aria-label="Add" size="icon-md" variant="outline">
        <PlusIcon />
      </Button>
      <Button aria-label="Remove" size="icon-md" variant="outline">
        <MinusIcon />
      </Button>
    </ButtonGroup>
  ),
});

export const Nested = meta.story({
  render: () => (
    <ButtonGroup>
      <ButtonGroup>
        <Button aria-label="Italic" size="icon-md" variant="outline">
          <TextItalicIcon />
        </Button>
        <Button aria-label="Bold" size="icon-md" variant="outline">
          <TextBIcon />
        </Button>
        <Button aria-label="Underline" size="icon-md" variant="outline">
          <TextUnderlineIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button aria-label="Image" size="icon-md" variant="outline">
          <ImageSquareIcon />
        </Button>
        <Button aria-label="Code" size="icon-md" variant="outline">
          <BracketsCurlyIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  ),
});

export const WithSeparator = meta.story({
  render: () => (
    <ButtonGroup>
      <Button aria-label="Remove" size="icon-md" variant="secondary">
        <MinusIcon />
      </Button>
      <ButtonGroup.Separator />
      <Button aria-label="Add" size="icon-md" variant="secondary">
        <PlusIcon />
      </Button>
    </ButtonGroup>
  ),
});
