<script lang="ts">
import { InputGroup } from "@pisagor/svelte/input-group";
import CopyIcon from "phosphor-svelte/lib/CopyIcon";
import FileCodeIcon from "phosphor-svelte/lib/FileCodeIcon";
</script>

<div class="flex flex-col gap-2">
      <InputGroup>
        <InputGroup.Textarea
          class="font-mono text-sm"
          placeholder="console.log('Hello, world!');"
        />
        <InputGroup.Addon align="block-start">
          <FileCodeIcon class="text-muted-foreground" />
          <InputGroup.Text class="font-mono">script.js</InputGroup.Text>
          <InputGroup.Button
            aria-label="Copy"
            class="ml-auto"
            size="icon-xs"
          >
            <CopyIcon />
            <span class="sr-only">Copy</span>
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
      <p class="text-muted-foreground text-sm">
        Header positioned above the textarea.
      </p>
    </div>
