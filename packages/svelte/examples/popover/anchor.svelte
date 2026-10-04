<script lang="ts">
import { Button, Input, Popover } from "@pisagor/svelte";
</script>

<div>
  <Popover>
    <div class="flex items-center gap-2">
      <Popover.Trigger>
        <Button variant="outline">Open</Button>
      </Popover.Trigger>
      <Popover.Anchor>
        {#snippet asChild(props)}
          <Input {...props()} class="w-full" placeholder="jane.doe@example.com" />
        {/snippet}
      </Popover.Anchor>
      <Popover.Content class="w-56">
        <Popover.Header
          description="We'll send you a link to reset your password."
          title="Enter your email"
        />
      </Popover.Content>
    </div>
  </Popover>
</div>
