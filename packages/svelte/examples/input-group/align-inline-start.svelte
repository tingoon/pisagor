<script lang="ts">
import { InputGroup } from "@pisagor/svelte/input-group";
import FunnelIcon from "phosphor-svelte/lib/FunnelIcon";
</script>

<div class="flex flex-col gap-2">
      <InputGroup>
        <InputGroup.Addon align="inline-start">
          <FunnelIcon aria-hidden />
        </InputGroup.Addon>
        <InputGroup.Input placeholder="Search..." />
      </InputGroup>
      <p class="text-muted-foreground text-sm">
        Icon positioned at the start.
      </p>
    </div>
