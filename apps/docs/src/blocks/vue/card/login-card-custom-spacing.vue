<script lang="ts" setup>
import { loginCardCustomSpacingBlock } from "#/styles/recipes/card";
import LoginCard from "./login-card.vue";

const styles = loginCardCustomSpacingBlock();
</script>

<template>
  <LoginCard primary-action-label="Login" :class="styles.root()" />
</template>
