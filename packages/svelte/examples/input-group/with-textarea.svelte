<script lang="ts">
import { Button } from "@pisagor/svelte";
import { InputGroup } from "@pisagor/svelte/input-group";
import ArrowUpIcon from "phosphor-svelte/lib/ArrowUpIcon";
import PlusIcon from "phosphor-svelte/lib/PlusIcon";
</script>

<InputGroup>
      <InputGroup.Textarea placeholder="Ask, Search or Chat…" />
      <InputGroup.Addon align="block-end">
        <Button
          aria-label="Add files"
          class="rounded-full"
          size="icon-sm"
          variant="ghost"
        >
          <PlusIcon />
        </Button>
        <InputGroup.Text class="ml-auto">33% used</InputGroup.Text>
        <Button aria-label="Send" class="rounded-full" size="icon-sm">
          <ArrowUpIcon />
        </Button>
      </InputGroup.Addon>
    </InputGroup>
