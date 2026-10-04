<script lang="ts">
import { Badge, InputGroup } from "@pisagor/svelte";
import AtIcon from "phosphor-svelte/lib/AtIcon";
</script>

<InputGroup>
  <InputGroup.Input placeholder="Enter tag" />
  <InputGroup.Addon align="inline-end">
    <Badge pill size="sm" variant="success"> Available </Badge>
  </InputGroup.Addon>
  <InputGroup.Addon align="inline-start">
    <AtIcon />
  </InputGroup.Addon>
</InputGroup>
