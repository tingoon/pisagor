<script lang="ts" setup>
import { Editable, Input } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-col gap-2">
    <Editable default-value="Primary">
      <Editable.Area>
        <Editable.Input as-child>
          <Input class="w-full" />
        </Editable.Input>
        <Editable.Preview control-variant="primary" />
      </Editable.Area>
    </Editable>
    <Editable default-value="Secondary">
      <Editable.Area>
        <Editable.Input as-child>
          <Input class="w-full" />
        </Editable.Input>
        <Editable.Preview control-variant="secondary" />
      </Editable.Area>
    </Editable>
  </div>
</template>
