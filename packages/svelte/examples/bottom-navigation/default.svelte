<script lang="ts">
import { BottomNavigation } from "@pisagor/svelte/bottom-navigation";
import HouseIcon from "phosphor-svelte/lib/HouseIcon";
</script>

<BottomNavigation defaultValue="home">
  <BottomNavigation.List>
    <BottomNavigation.Item value="home">
      <BottomNavigation.ItemIcon><HouseIcon /></BottomNavigation.ItemIcon>
      <BottomNavigation.ItemLabel>Home</BottomNavigation.ItemLabel>
    </BottomNavigation.Item>
  </BottomNavigation.List>
</BottomNavigation>
