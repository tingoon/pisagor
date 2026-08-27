import { ArrowCounterClockwiseIcon, GearIcon, PauseIcon, PlayIcon } from "@phosphor-icons/react";
import { Button, Card, Timer } from "@pisagor/react";
import { useState } from "react";
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
    metadata: {
      api: "compound",
      taxonomy: "standard",
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
  render: () => (
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
  ),
});

export const OrientationHorizontal = meta.story({
  render: () => (
    <Card className="rounded-3xl [--space:--spacing(6)]">
      <Card.Content>
        <Timer autoStart className="items-center gap-2" countdown startMs={5 * 60 * 1000}>
          <Timer.Area className="flex-wrap justify-center">
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
  ),
});

export const OrientationVertical = meta.story({
  render: () => (
    <Card className="rounded-3xl [--space:--spacing(6)]">
      <Card.Content>
        <Timer autoStart className="items-center gap-2" countdown startMs={5 * 60 * 1000}>
          <Timer.Area className="flex-wrap justify-center">
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
  ),
});

export const CountdownDate = meta.story({
  render: () => {
    const formatDate = (date: Date) => date.toLocaleDateString(undefined, { dateStyle: "medium" });

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    return (
      <Card className="rounded-3xl [--space:--spacing(6)]">
        <Card.Content className="flex flex-col items-center gap-3">
          <p className="text-center text-muted-foreground text-xs">
            Until {formatDate(targetDate)}
          </p>
          <Timer
            autoStart
            className="items-center gap-2"
            countdown
            startMs={Math.max(0, targetDate.getTime() - Date.now())}
          >
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
    );
  },
});

export const Countdown = meta.story({
  render: () => (
    <Card className="rounded-3xl [--space:--spacing(6)]">
      <Card.Content>
        <Timer autoStart countdown startMs={5 * 60 * 1000}>
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
  ),
});

export const CustomSeparator = meta.story({
  render: () => (
    <Card className="rounded-3xl [--space:--spacing(6)]">
      <Card.Content>
        <Timer autoStart className="items-center gap-2" countdown startMs={5 * 60 * 1000}>
          <Timer.Area>
            <Timer.Item type="minutes" />
            <Timer.Separator>{"//"}</Timer.Separator>
            <Timer.Item type="seconds" />
          </Timer.Area>
        </Timer>
      </Card.Content>
    </Card>
  ),
});

export const Interval = meta.story({
  render: () => (
    <Card className="rounded-3xl [--space:--spacing(6)]">
      <Card.Content>
        <Timer interval={100} targetMs={60 * 1000}>
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
          <Timer.Control className="w-full justify-center">
            <Timer.Play asChild>
              <Button size="icon-sm" variant="ghost">
                <PlayIcon />
              </Button>
            </Timer.Play>
            <Timer.Pause asChild>
              <Button size="icon-sm" variant="ghost">
                <PauseIcon />
              </Button>
            </Timer.Pause>
          </Timer.Control>
        </Timer>
      </Card.Content>
    </Card>
  ),
});

export const Pomodoro = meta.story({
  render: () => (
    <Card className="rounded-3xl [--space:--spacing(6)]">
      <Card.Content>
        <Timer className="items-center justify-center px-10" countdown startMs={25 * 60 * 1000}>
          <span>🍅</span>
          <Timer.Area>
            <Timer.Item className="text-5xl" type="minutes" />
            <Timer.Separator />
            <Timer.Item className="text-5xl" type="seconds" />
          </Timer.Area>
          <span className="mt-0.5 font-medium text-[10px] text-muted-foreground uppercase tracking-[0.22em]">
            Focus
          </span>
          <Timer.Control className="w-full justify-center">
            <Timer.Reset asChild hidden={false}>
              <Button aria-label="Reset" size="icon-md" variant="ghost">
                <ArrowCounterClockwiseIcon />
              </Button>
            </Timer.Reset>
            <Timer.Pause asChild>
              <Button aria-label="Pause" className="w-full" variant="ghost">
                <PauseIcon />
              </Button>
            </Timer.Pause>
            <Timer.Play asChild>
              <Button aria-label="Play" className="w-full" variant="ghost">
                <PlayIcon />
              </Button>
            </Timer.Play>
            <Button aria-label="Settings" size="icon-md" variant="ghost">
              <GearIcon />
            </Button>
          </Timer.Control>
        </Timer>
      </Card.Content>
    </Card>
  ),
});

export const Controlled = meta.story({
  render: () => {
    const [ticks, setTicks] = useState(0);
    const [completed, setCompleted] = useState(false);

    return (
      <div className="flex flex-col gap-2">
        <output className="text-center text-muted-foreground text-sm tabular-nums">
          Ticks: {ticks} {completed ? " — Completed" : ""}
        </output>
        <Card className="rounded-3xl [--space:--spacing(6)]">
          <Card.Content>
            <Timer
              className="items-center gap-2"
              onComplete={() => setCompleted(true)}
              onTick={() => setTicks((t) => t + 1)}
              targetMs={5 * 1000}
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
                <Timer.Start asChild>
                  <Button aria-label="Start" size="icon-sm" variant="ghost">
                    <PlayIcon />
                  </Button>
                </Timer.Start>
                <Timer.Reset asChild>
                  <Button aria-label="Reset" size="icon-sm" variant="ghost">
                    <ArrowCounterClockwiseIcon />
                  </Button>
                </Timer.Reset>
              </Timer.Control>
            </Timer>
          </Card.Content>
        </Card>
      </div>
    );
  },
});
