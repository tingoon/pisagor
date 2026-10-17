<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Navbar } from "@pisagor/svelte";
</script>

<Navbar>
  <Navbar.Brand>Pisagor</Navbar.Brand>
  <Navbar.Content>
    <Navbar.Nav>Docs</Navbar.Nav>
  </Navbar.Content>
  <Navbar.Actions>
    <button type="button">Sign in</button>
  </Navbar.Actions>
</Navbar>
