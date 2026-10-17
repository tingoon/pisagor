import source from "./number-story.tsx?raw";
import { Format } from "@pisagor/solid";

export function NumberStory() {
  return (
    <div class="inline-flex items-baseline gap-1">
      <span class="text-muted-foreground text-sm">Downloads</span>
      <span class="text-foreground font-medium tracking-tight tabular-nums">
        <Format.Number value={1_234_567} />
      </span>
      <span class="text-muted-foreground text-sm">per month</span>
    </div>
  );
}

export { source as NumberStorySource };
