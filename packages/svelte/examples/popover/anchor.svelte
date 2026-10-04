<script lang="ts">
import { Button } from "@pisagor/svelte/button";
import { Input } from "@pisagor/svelte/input";
import { Popover } from "@pisagor/svelte/popover";
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
