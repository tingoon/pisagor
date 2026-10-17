<script module lang="ts">
  import source from "./as-child.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { buttonRecipe } from "@pisagor/recipes";
</script>

<a class={buttonRecipe().base()} href="/login">Login</a>
