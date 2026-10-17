<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { LinkBox } from "@pisagor/svelte";
</script>

<LinkBox>
  <h3>Card title</h3>
  <p>Description</p>
  <LinkBox.Overlay href="#">Read more</LinkBox.Overlay>
</LinkBox>
