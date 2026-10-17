<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Provider } from "@pisagor/svelte";
</script>

<Provider>
  <p>App content</p>
</Provider>
