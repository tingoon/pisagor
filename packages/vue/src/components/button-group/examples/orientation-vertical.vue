<script lang="ts" setup >
import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { ButtonGroup } from "..";
</script>

<template>
        <ButtonGroup orientation="vertical">
          <Button size="icon-md" variant="outline">
            <PhPlus />
          </Button>
          <Button size="icon-md" variant="outline">
            <PhMinus />
          </Button>
        </ButtonGroup>
  
</template>
