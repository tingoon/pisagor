<script lang="ts">
  import { Button, InputGroup } from "@pisagor/svelte";
  import { ArrowUpIcon, PlusIcon } from "phosphor-svelte";
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
