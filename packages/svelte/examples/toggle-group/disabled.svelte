<script lang="ts">
import { ToggleGroup } from "@pisagor/svelte";
import TextBIcon from "phosphor-svelte/lib/TextBIcon";
import TextItalicIcon from "phosphor-svelte/lib/TextItalicIcon";
import TextUnderlineIcon from "phosphor-svelte/lib/TextUnderlineIcon";
</script>

<ToggleGroup.Root defaultValue={["bold"]} disabled multiple>
      <ToggleGroup.Item aria-label="Toggle bold" value="bold">
        <TextBIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle italic" value="italic">
        <TextItalicIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle underline" value="underline">
        <TextUnderlineIcon />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
