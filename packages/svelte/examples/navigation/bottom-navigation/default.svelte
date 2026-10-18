<script lang="ts">
  import { BottomNavigation } from "@pisagor/svelte";
  import { HouseIcon } from "phosphor-svelte";
</script>

<BottomNavigation value="home">
  <BottomNavigation.List>
    <BottomNavigation.Item href="#home" value="home">
      <BottomNavigation.ItemIcon><HouseIcon /></BottomNavigation.ItemIcon>
      <BottomNavigation.ItemLabel>Home</BottomNavigation.ItemLabel>
    </BottomNavigation.Item>
  </BottomNavigation.List>
</BottomNavigation>
