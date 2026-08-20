import {
  PhArrowLeft,
  PhBracketsCurly,
  PhDotsThree,
  PhImageSquare,
  PhMinus,
  PhPlay,
  PhPlus,
  PhSkipBack,
  PhSkipForward,
  PhTextB,
  PhTextItalic,
  PhTextUnderline,
} from "@phosphor-icons/vue";
import { Button, ButtonGroup } from "@pisagor/vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Groups related actions together so users can compare choices and pick one option from a set.",
      },
    },
  },
  subcomponents: {
    Separator: ButtonGroup.Separator,
    Text: ButtonGroup.Text,
  },
  title: "Components/Actions/Button Group",
});

export const Default = meta.story({
  render: () => ({
    components: { Button, ButtonGroup, PhArrowLeft, PhDotsThree },
    template: `
      <ButtonGroup>
        <ButtonGroup class="hidden sm:flex">
          <Button aria-label="Go back" size="icon-md" variant="outline">
            <PhArrowLeft />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Archive</Button>
          <Button variant="outline">Report</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Snooze</Button>
          <Button aria-label="More options" size="icon-md" variant="outline">
            <PhDotsThree />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    `,
  }),
});

export const OrientationHorizontal = meta.story({
  render: () => ({
    components: { Button, ButtonGroup, PhPlay, PhSkipBack, PhSkipForward },
    template: `
      <ButtonGroup>
        <Button size="icon-md" variant="outline">
          <PhSkipBack />
        </Button>
        <Button size="icon-md" variant="outline">
          <PhPlay />
        </Button>
        <Button size="icon-md" variant="outline">
          <PhSkipForward />
        </Button>
      </ButtonGroup>
    `,
  }),
});

export const OrientationVertical = meta.story({
  render: () => ({
    components: { Button, ButtonGroup, PhMinus, PhPlus },
    template: `
      <ButtonGroup orientation="vertical">
        <Button size="icon-md" variant="outline">
          <PhPlus />
        </Button>
        <Button size="icon-md" variant="outline">
          <PhMinus />
        </Button>
      </ButtonGroup>
    `,
  }),
});

export const Nested = meta.story({
  render: () => ({
    components: {
      Button,
      ButtonGroup,
      PhBracketsCurly,
      PhImageSquare,
      PhTextB,
      PhTextItalic,
      PhTextUnderline,
    },
    template: `
      <ButtonGroup>
        <ButtonGroup>
          <Button size="icon-md" variant="outline">
            <PhTextItalic />
          </Button>
          <Button size="icon-md" variant="outline">
            <PhTextB />
          </Button>
          <Button size="icon-md" variant="outline">
            <PhTextUnderline />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="icon-md" variant="outline">
            <PhImageSquare />
          </Button>
          <Button size="icon-md" variant="outline">
            <PhBracketsCurly />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    `,
  }),
});

export const WithSeparator = meta.story({
  render: () => ({
    components: { Button, ButtonGroup, PhMinus, PhPlus },
    template: `
      <ButtonGroup>
        <Button size="icon-md" variant="secondary">
          <PhMinus />
        </Button>
        <ButtonGroup.Separator />
        <Button size="icon-md" variant="secondary">
          <PhPlus />
        </Button>
      </ButtonGroup>
    `,
  }),
});
