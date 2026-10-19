<script lang="ts">
  import { Editable } from "@pisagor/svelte";
</script>

<div class="flex flex-col gap-2">
  <Editable.Root value="Primary">
    <Editable.Area>
      <Editable.Input class="w-full" />
      <Editable.Preview controlVariant="primary" />
    </Editable.Area>
  </Editable.Root>
  <Editable.Root value="Secondary">
    <Editable.Area>
      <Editable.Input class="w-full" />
      <Editable.Preview controlVariant="secondary" />
    </Editable.Area>
  </Editable.Root>
</div>
