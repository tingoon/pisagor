<script lang="ts">
import { Button, InputGroup, Tooltip } from "@pisagor/svelte";
import InfoIcon from "phosphor-svelte/lib/InfoIcon";
</script>

<InputGroup>
  <InputGroup.Input placeholder="Enter value" />
  <InputGroup.Addon align="inline-end">
    <Tooltip content="Additional information about this field">
      <Button aria-label="More info" size="icon-xs" variant="ghost">
        <InfoIcon aria-hidden />
      </Button>
    </Tooltip>
  </InputGroup.Addon>
</InputGroup>
