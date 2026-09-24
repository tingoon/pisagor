<script lang="ts">
import HouseIcon from "phosphor-svelte/lib/HouseIcon";
import { BottomNavigation } from "../index";
</script>

<BottomNavigation defaultValue="home">
  <BottomNavigation.List>
    <BottomNavigation.Item value="home">
      <BottomNavigation.ItemIcon><HouseIcon /></BottomNavigation.ItemIcon>
      <BottomNavigation.ItemLabel>Home</BottomNavigation.ItemLabel>
    </BottomNavigation.Item>
  </BottomNavigation.List>
</BottomNavigation>
