<script lang="ts">
  import { Button, Card, Timer } from "@pisagor/svelte";
  import {
    ArrowCounterClockwiseIcon,
    GearIcon,
    PauseIcon,
    PlayIcon,
  } from "phosphor-svelte";
</script>

<Card class="rounded-3xl [--space:--spacing(6)]">
  <Card.Content>
    <Timer
      class="items-center justify-center px-10"
      countdown
      startMs={25 * 60 * 1000}
    >
      <span>🍅</span>
      <Timer.Area>
        <Timer.Item class="text-5xl" type="minutes" />
        <Timer.Separator />
        <Timer.Item class="text-5xl" type="seconds" />
      </Timer.Area>
      <span
        class="text-2.5 text-muted-foreground mt-0.5 font-medium tracking-[0.22em] uppercase"
      >
        Focus
      </span>
      <Timer.Control class="w-full justify-center">
        <Timer.Reset hidden={false}>
          {#snippet asChild(props)}
            <Button
              {...props()}
              aria-label="Reset"
              size="icon-md"
              variant="ghost"
            >
              <ArrowCounterClockwiseIcon />
            </Button>
          {/snippet}
        </Timer.Reset>
        <Timer.Pause>
          {#snippet asChild(props)}
            <Button
              {...props()}
              aria-label="Pause"
              class="w-full"
              variant="ghost"
            >
              <PauseIcon />
            </Button>
          {/snippet}
        </Timer.Pause>
        <Timer.Play>
          {#snippet asChild(props)}
            <Button
              {...props()}
              aria-label="Play"
              class="w-full"
              variant="ghost"
            >
              <PlayIcon />
            </Button>
          {/snippet}
        </Timer.Play>
        <Button aria-label="Settings" size="icon-md" variant="ghost">
          <GearIcon />
        </Button>
      </Timer.Control>
    </Timer>
  </Card.Content>
</Card>
