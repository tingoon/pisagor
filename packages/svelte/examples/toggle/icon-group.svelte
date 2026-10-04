<script lang="ts">
import { Toggle } from "@pisagor/svelte";
import TextBIcon from "phosphor-svelte/lib/TextBIcon";
import TextItalicIcon from "phosphor-svelte/lib/TextItalicIcon";
import TextUnderlineIcon from "phosphor-svelte/lib/TextUnderlineIcon";
</script>

<div class="flex items-center gap-1">
      <Toggle aria-label="Toggle bold" variant="outline">
        <TextBIcon />
      </Toggle>
      <Toggle aria-label="Toggle italic" variant="outline">
        <TextItalicIcon />
      </Toggle>
      <Toggle aria-label="Toggle underline" variant="outline">
        <TextUnderlineIcon />
      </Toggle>
    </div>
