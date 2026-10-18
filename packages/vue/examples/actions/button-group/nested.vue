<script lang="ts" setup>
import {
  PhBracketsCurly,
  PhImageSquare,
  PhTextB,
  PhTextItalic,
  PhTextUnderline,
} from "@phosphor-icons/vue";
import { Button, ButtonGroup } from "@pisagor/vue";
</script>

<template>
  <ButtonGroup>
    <ButtonGroup>
      <Button size="icon-md" variant="outline">
        <PhTextItalic />
      </Button>
      <Button size="icon-md" variant="outline">
        <PhTextB />
      </Button>
      <Button size="icon-md" variant="outline">
        <PhTextUnderline />
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button size="icon-md" variant="outline">
        <PhImageSquare />
      </Button>
      <Button size="icon-md" variant="outline">
        <PhBracketsCurly />
      </Button>
    </ButtonGroup>
  </ButtonGroup>
</template>
