<script lang="ts">
import { Button, Card, Timer } from "@pisagor/svelte";
import PauseIcon from "phosphor-svelte/lib/PauseIcon";
import PlayIcon from "phosphor-svelte/lib/PlayIcon";
</script>

<Card class="rounded-3xl [--space:--spacing(6)]">
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
      <Timer.Control class="w-full justify-center">
        <Timer.Play>
          {#snippet asChild(props)}
            <Button {...props()} aria-label="Play" size="icon-sm" variant="ghost">
              <PlayIcon />
            </Button>
          {/snippet}
        </Timer.Play>
        <Timer.Pause>
          {#snippet asChild(props)}
            <Button {...props()} aria-label="Pause" size="icon-sm" variant="ghost">
              <PauseIcon />
            </Button>
          {/snippet}
        </Timer.Pause>
      </Timer.Control>
    </Timer>
  </Card.Content>
</Card>
