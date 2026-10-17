<script lang="ts" setup>
import { PhCopy, PhFile } from "@phosphor-icons/vue";
import { InputGroup } from "@pisagor/vue";
import { codeEditorInputBlock } from "#/styles/recipes/input-group";

const styles = codeEditorInputBlock();
</script>

<template>
  <InputGroup>
    <InputGroup.Textarea
      placeholder="console.log('Hello, world!');"
      :class="styles.textarea()"
    />
    <InputGroup.Addon align="block-start">
      <PhFile :class="styles.icon()" />
      <InputGroup.Text :class="styles.filename()">script.js</InputGroup.Text>
      <InputGroup.Button
        aria-label="Copy"
        size="icon-xs"
        type="button"
        variant="ghost"
        :class="styles.copy()"
      >
        <PhCopy aria-hidden="true" />
      </InputGroup.Button>
    </InputGroup.Addon>
  </InputGroup>
</template>
