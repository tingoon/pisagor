<script lang="ts" setup>
import { PhGear, PhSignOut, PhUser } from "@phosphor-icons/vue";
import { menuRecipe } from "@pisagor/recipes";
import { Menu } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandMenuRecipe = tv({
  extend: menuRecipe,
  slots: {
    groupLabel: "text-emerald-700 dark:text-emerald-300",
    item: "hover:bg-emerald-500/10 hover:text-emerald-900 dark:hover:text-emerald-100",
  },
  variants: {},
});
</script>

<template>
  <div class="w-56 rounded-xl border bg-background p-1 shadow-xs/5">
    <Menu aria-label="Account" :recipe="brandMenuRecipe">
      <Menu.List>
        <Menu.Link active href="#profile">
          <PhUser />
          Profile
        </Menu.Link>
        <Menu.Link href="#settings">
          <PhGear />
          Settings
        </Menu.Link>
        <Menu.Separator />
        <Menu.Item>
          <PhSignOut />
          Sign out
          <Menu.Shortcut>⇧⌘Q</Menu.Shortcut>
        </Menu.Item>
      </Menu.List>
    </Menu>
  </div>
</template>
