<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { BottomNavigation } from "@pisagor/svelte";
  import HouseIcon from "phosphor-svelte/lib/HouseIcon";
</script>

<BottomNavigation value="home">
  <BottomNavigation.List>
    <BottomNavigation.Item href="#home" value="home">
      <BottomNavigation.ItemIcon><HouseIcon /></BottomNavigation.ItemIcon>
      <BottomNavigation.ItemLabel>Home</BottomNavigation.ItemLabel>
    </BottomNavigation.Item>
  </BottomNavigation.List>
</BottomNavigation>
