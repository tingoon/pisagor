<script lang="ts">
import source from "./login-card-custom-spacing.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { loginCardCustomSpacingBlock } from "#/recipes/blocks/card";
import LoginCard from "./login-card.vue";

const styles = loginCardCustomSpacingBlock();
</script>

<template>
  <LoginCard primary-action-label="Login" :class="styles.root()" />
</template>
