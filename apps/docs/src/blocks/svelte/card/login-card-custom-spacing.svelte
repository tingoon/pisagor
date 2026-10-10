<script lang="ts">
import { loginCardCustomSpacingBlock } from "#/recipes/blocks/card";
import LoginCard from "./login-card.svelte";

const styles = loginCardCustomSpacingBlock();
</script>

<LoginCard class={styles.root()} primaryActionLabel="Login" />
