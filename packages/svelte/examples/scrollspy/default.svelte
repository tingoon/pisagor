<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Scrollspy } from "@pisagor/svelte";
</script>

<Scrollspy>
  <a data-scrollspy-anchor="one" href="#one">One</a>
  <a data-scrollspy-anchor="two" href="#two">Two</a>
</Scrollspy>
