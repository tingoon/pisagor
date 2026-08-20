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
import { Button, ButtonGroup } from "@pisagor/react";
import preview from "#/react/preview";

const meta = preview.meta({
  component: ButtonGroup,
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
          "Groups related actions together so users can compare choices and pick one option from a set.",
      },
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
      <Button size="icon-md" variant="outline">
        <SkipBackIcon />
      </Button>
      <Button size="icon-md" variant="outline">
        <PlayIcon />
      </Button>
      <Button size="icon-md" variant="outline">
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
      <Button size="icon-md" variant="outline">
        <PlusIcon />
      </Button>
      <Button size="icon-md" variant="outline">
        <MinusIcon />
      </Button>
    </ButtonGroup>
  ),
});

export const Nested = meta.story({
  render: () => (
    <ButtonGroup>
      <ButtonGroup>
        <Button size="icon-md" variant="outline">
          <TextItalicIcon />
        </Button>
        <Button size="icon-md" variant="outline">
          <TextBIcon />
        </Button>
        <Button size="icon-md" variant="outline">
          <TextUnderlineIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button size="icon-md" variant="outline">
          <ImageSquareIcon />
        </Button>
        <Button size="icon-md" variant="outline">
          <BracketsCurlyIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  ),
});

export const WithSeparator = meta.story({
  render: () => (
    <ButtonGroup>
      <Button size="icon-md" variant="secondary">
        <MinusIcon />
      </Button>
      <ButtonGroup.Separator />
      <Button size="icon-md" variant="secondary">
        <PlusIcon />
      </Button>
    </ButtonGroup>
  ),
});
