import { PhArrowCounterClockwise, PhGear, PhPause, PhPlay } from "@phosphor-icons/vue";
import { Button, Card, Timer } from "@pisagor/vue";
import { ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Timer,
  parameters: {
    docs: {
      description: {
        component:
          "Counts up or down through intervals so users can track elapsed time or remaining time.",
      },
    },
  },
  subcomponents: {
    ActionTrigger: Timer.ActionTrigger,
    Area: Timer.Area,
    Control: Timer.Control,
    Item: Timer.Item,
    ItemGroup: Timer.ItemGroup,
    ItemLabel: Timer.ItemLabel,
    Pause: Timer.Pause,
    Play: Timer.Play,
    Reset: Timer.Reset,
    Restart: Timer.Restart,
    Resume: Timer.Resume,
    Separator: Timer.Separator,
    Start: Timer.Start,
  },
  title: "Components/Feedback/Timer",
});

export const Default = meta.story({
  render: () => ({
    components: { Timer },
    template: `
      <Timer autoStart>
        <Timer.Area>
          <Timer.ItemGroup>
            <Timer.Item type="days" />
            <Timer.ItemLabel>Days</Timer.ItemLabel>
          </Timer.ItemGroup>
          <Timer.Separator />
          <Timer.ItemGroup>
            <Timer.Item type="hours" />
            <Timer.ItemLabel>Hours</Timer.ItemLabel>
          </Timer.ItemGroup>
          <Timer.Separator />
          <Timer.ItemGroup>
            <Timer.Item type="minutes" />
            <Timer.ItemLabel>Minutes</Timer.ItemLabel>
          </Timer.ItemGroup>
          <Timer.Separator />
          <Timer.ItemGroup>
            <Timer.Item type="seconds" />
            <Timer.ItemLabel>Seconds</Timer.ItemLabel>
          </Timer.ItemGroup>
        </Timer.Area>
      </Timer>
    `,
  }),
});

export const OrientationHorizontal = meta.story({
  render: () => ({
    components: { Card, Timer },
    template: `
      <Card class="rounded-3xl [--space:--spacing(6)]">
        <Card.Content>
          <Timer autoStart class="items-center gap-2" countdown :startMs="5 * 60 * 1000">
            <Timer.Area class="flex-wrap justify-center">
              <Timer.ItemGroup orientation="horizontal">
                <Timer.Item type="minutes" />
                <Timer.ItemLabel>minutes</Timer.ItemLabel>
              </Timer.ItemGroup>
              <Timer.Separator />
              <Timer.ItemGroup orientation="horizontal">
                <Timer.Item type="seconds" />
                <Timer.ItemLabel>seconds</Timer.ItemLabel>
              </Timer.ItemGroup>
            </Timer.Area>
          </Timer>
        </Card.Content>
      </Card>
    `,
  }),
});

export const OrientationVertical = meta.story({
  render: () => ({
    components: { Card, Timer },
    template: `
      <Card class="rounded-3xl [--space:--spacing(6)]">
        <Card.Content>
          <Timer autoStart class="items-center gap-2" countdown :startMs="5 * 60 * 1000">
            <Timer.Area class="flex-wrap justify-center">
              <Timer.ItemGroup orientation="vertical">
                <Timer.Item type="minutes" />
                <Timer.ItemLabel>minutes</Timer.ItemLabel>
              </Timer.ItemGroup>
              <Timer.Separator />
              <Timer.ItemGroup orientation="vertical">
                <Timer.Item type="seconds" />
                <Timer.ItemLabel>seconds</Timer.ItemLabel>
              </Timer.ItemGroup>
            </Timer.Area>
          </Timer>
        </Card.Content>
      </Card>
    `,
  }),
});

export const CountdownDate = meta.story({
  render: () => ({
    components: { Card, Timer },
    setup() {
      const formatDate = (date: Date) =>
        date.toLocaleDateString(undefined, { dateStyle: "medium" });

      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 7);
      const targetLabel = formatDate(targetDate);
      const startMs = Math.max(0, targetDate.getTime() - Date.now());

      return { startMs, targetLabel };
    },
    template: `
      <Card class="rounded-3xl [--space:--spacing(6)]">
        <Card.Content class="flex flex-col items-center gap-3">
          <p class="text-center text-muted-foreground text-xs">Until {{ targetLabel }}</p>
          <Timer autoStart class="items-center gap-2" countdown :startMs="startMs">
            <Timer.Area>
              <Timer.ItemGroup>
                <Timer.Item type="days" />
                <Timer.ItemLabel>days</Timer.ItemLabel>
              </Timer.ItemGroup>
              <Timer.Separator />
              <Timer.ItemGroup>
                <Timer.Item type="hours" />
                <Timer.ItemLabel>hours</Timer.ItemLabel>
              </Timer.ItemGroup>
              <Timer.Separator />
              <Timer.ItemGroup>
                <Timer.Item type="minutes" />
                <Timer.ItemLabel>minutes</Timer.ItemLabel>
              </Timer.ItemGroup>
              <Timer.Separator />
              <Timer.ItemGroup>
                <Timer.Item type="seconds" />
                <Timer.ItemLabel>seconds</Timer.ItemLabel>
              </Timer.ItemGroup>
            </Timer.Area>
          </Timer>
        </Card.Content>
      </Card>
    `,
  }),
});

export const Countdown = meta.story({
  render: () => ({
    components: { Card, Timer },
    template: `
      <Card class="rounded-3xl [--space:--spacing(6)]">
        <Card.Content>
          <Timer autoStart countdown :startMs="5 * 60 * 1000">
            <Timer.Area>
              <Timer.ItemGroup>
                <Timer.Item type="minutes" />
                <Timer.ItemLabel>minutes</Timer.ItemLabel>
              </Timer.ItemGroup>
              <Timer.Separator />
              <Timer.ItemGroup>
                <Timer.Item type="seconds" />
                <Timer.ItemLabel>seconds</Timer.ItemLabel>
              </Timer.ItemGroup>
            </Timer.Area>
          </Timer>
        </Card.Content>
      </Card>
    `,
  }),
});

export const CustomSeparator = meta.story({
  render: () => ({
    components: { Card, Timer },
    template: `
      <Card class="rounded-3xl [--space:--spacing(6)]">
        <Card.Content>
          <Timer autoStart class="items-center gap-2" countdown :startMs="5 * 60 * 1000">
            <Timer.Area>
              <Timer.Item type="minutes" />
              <Timer.Separator>//</Timer.Separator>
              <Timer.Item type="seconds" />
            </Timer.Area>
          </Timer>
        </Card.Content>
      </Card>
    `,
  }),
});

export const Interval = meta.story({
  render: () => ({
    components: { Button, Card, PhPause, PhPlay, Timer },
    template: `
      <Card class="rounded-3xl [--space:--spacing(6)]">
        <Card.Content>
          <Timer :interval="100" :targetMs="60 * 1000">
            <Timer.Area>
              <Timer.ItemGroup>
                <Timer.Item type="seconds" />
                <Timer.ItemLabel>seconds</Timer.ItemLabel>
              </Timer.ItemGroup>
              <Timer.Separator />
              <Timer.ItemGroup>
                <Timer.Item type="milliseconds" />
                <Timer.ItemLabel>ms</Timer.ItemLabel>
              </Timer.ItemGroup>
            </Timer.Area>
            <Timer.Control class="w-full justify-center">
              <Timer.Play as-child>
                <Button size="icon-sm" variant="ghost">
                  <PhPlay />
                </Button>
              </Timer.Play>
              <Timer.Pause as-child>
                <Button size="icon-sm" variant="ghost">
                  <PhPause />
                </Button>
              </Timer.Pause>
            </Timer.Control>
          </Timer>
        </Card.Content>
      </Card>
    `,
  }),
});

export const Pomodoro = meta.story({
  render: () => ({
    components: { Button, Card, PhArrowCounterClockwise, PhGear, PhPause, PhPlay, Timer },
    template: `
      <Card class="rounded-3xl [--space:--spacing(6)]">
        <Card.Content>
          <Timer class="items-center justify-center px-10" countdown :startMs="25 * 60 * 1000">
            <span>🍅</span>
            <Timer.Area>
              <Timer.Item class="text-5xl" type="minutes" />
              <Timer.Separator />
              <Timer.Item class="text-5xl" type="seconds" />
            </Timer.Area>
            <span class="mt-0.5 font-medium text-[10px] text-muted-foreground uppercase tracking-[0.22em]">
              Focus
            </span>
            <Timer.Control class="w-full justify-center">
              <Timer.Reset as-child :hidden="false">
                <Button aria-label="Reset" size="icon-md" variant="ghost">
                  <PhArrowCounterClockwise />
                </Button>
              </Timer.Reset>
              <Timer.Pause as-child>
                <Button aria-label="Pause" class="w-full" variant="ghost">
                  <PhPause />
                </Button>
              </Timer.Pause>
              <Timer.Play as-child>
                <Button aria-label="Play" class="w-full" variant="ghost">
                  <PhPlay />
                </Button>
              </Timer.Play>
              <Button aria-label="Settings" size="icon-md" variant="ghost">
                <PhGear />
              </Button>
            </Timer.Control>
          </Timer>
        </Card.Content>
      </Card>
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Button, Card, PhArrowCounterClockwise, PhPlay, Timer },
    setup() {
      const ticks = ref(0);
      const completed = ref(false);

      return { completed, ticks };
    },
    template: `
      <div class="flex flex-col gap-2">
        <output class="text-center text-muted-foreground text-sm tabular-nums">
          Ticks: {{ ticks }} {{ completed ? " — Completed" : "" }}
        </output>
        <Card class="rounded-3xl [--space:--spacing(6)]">
          <Card.Content>
            <Timer
              class="items-center gap-2"
              :targetMs="5 * 1000"
              @complete="completed = true"
              @tick="ticks++"
            >
              <Timer.Area>
                <Timer.ItemGroup>
                  <Timer.Item type="minutes" />
                  <Timer.ItemLabel>Minutes</Timer.ItemLabel>
                </Timer.ItemGroup>
                <Timer.Separator />
                <Timer.ItemGroup>
                  <Timer.Item type="seconds" />
                  <Timer.ItemLabel>Seconds</Timer.ItemLabel>
                </Timer.ItemGroup>
              </Timer.Area>
              <Timer.Control>
                <Timer.Start as-child>
                  <Button aria-label="Start" size="icon-sm" variant="ghost">
                    <PhPlay />
                  </Button>
                </Timer.Start>
                <Timer.Reset as-child>
                  <Button aria-label="Reset" size="icon-sm" variant="ghost">
                    <PhArrowCounterClockwise />
                  </Button>
                </Timer.Reset>
              </Timer.Control>
            </Timer>
          </Card.Content>
        </Card>
      </div>
    `,
  }),
});
