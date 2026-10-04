<script lang="ts">
import { InputGroup } from "@pisagor/svelte";
import EyeIcon from "phosphor-svelte/lib/EyeIcon";
</script>

<div class="flex flex-col gap-2">
      <InputGroup>
        <InputGroup.Input placeholder="Enter password" />
        <InputGroup.Addon align="inline-end">
          <EyeIcon aria-hidden />
        </InputGroup.Addon>
      </InputGroup>
      <p class="text-muted-foreground text-sm">
        Icon positioned at the end.
      </p>
    </div>
