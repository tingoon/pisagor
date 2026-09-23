<script lang="ts" setup >
import { Spinner } from "@pisagor/vue";
import { InputGroup } from "..";
</script>

<template>
        <InputGroup data-disabled>
          <InputGroup.Input disabled placeholder="Loading..." />
          <InputGroup.Addon align="inline-end">
            <Spinner aria-label="Loading" />
          </InputGroup.Addon>
        </InputGroup>
  
</template>
