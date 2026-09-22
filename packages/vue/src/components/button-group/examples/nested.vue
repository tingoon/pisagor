<script setup lang="ts">
import {
  PhBracketsCurly,
  PhImageSquare,
  PhTextB,
  PhTextItalic,
  PhTextUnderline,
} from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { ButtonGroup } from "..";
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
