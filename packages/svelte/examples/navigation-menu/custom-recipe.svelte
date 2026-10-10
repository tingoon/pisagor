<script lang="ts">
import { navigationMenuRecipe } from "@pisagor/recipes";
import { NavigationMenu } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandNavigationMenuRecipe = tv({
  extend: navigationMenuRecipe,
  slots: { link: "hover:text-emerald-700 dark:hover:text-emerald-300" },
  variants: {},
});
</script>

<NavigationMenu aria-label="Main" recipe={brandNavigationMenuRecipe}>
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Link active href="#overview">
        Overview
      </NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link href="#projects">Projects</NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link href="#analytics">Analytics</NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link href="#settings">Settings</NavigationMenu.Link>
    </NavigationMenu.Item>
  </NavigationMenu.List>
</NavigationMenu>
