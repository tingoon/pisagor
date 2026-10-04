<script lang="ts">
import { Button, Card } from "@pisagor/svelte";
import { Timer } from "@pisagor/svelte/timer";
import ArrowCounterClockwiseIcon from "phosphor-svelte/lib/ArrowCounterClockwiseIcon";
import PlayIcon from "phosphor-svelte/lib/PlayIcon";

let ticks = $state(0);
let completed = $state(false);
</script>

<div class="flex flex-col gap-2">
  <output class="text-center text-muted-foreground text-sm tabular-nums">
    Ticks: {ticks}{completed ? " — Completed" : ""}
  </output>
  <Card class="rounded-3xl [--space:--spacing(6)]">
    <Card.Content>
      <Timer
        class="items-center gap-2"
        onComplete={() => (completed = true)}
        onTick={() => (ticks += 1)}
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
          <Timer.Start>
            {#snippet asChild(props)}
              <Button {...props()} aria-label="Start" size="icon-sm" variant="ghost">
                <PlayIcon />
              </Button>
            {/snippet}
          </Timer.Start>
          <Timer.Reset>
            {#snippet asChild(props)}
              <Button {...props()} aria-label="Reset" size="icon-sm" variant="ghost">
                <ArrowCounterClockwiseIcon />
              </Button>
            {/snippet}
          </Timer.Reset>
        </Timer.Control>
      </Timer>
    </Card.Content>
  </Card>
</div>
