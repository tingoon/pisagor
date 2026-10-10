<script lang="ts">
import { tabsRecipe } from "@pisagor/recipes";
import { Tabs } from "@pisagor/svelte";
import { tv } from "tailwind-variants";
import { profileTabs } from "./helpers";

const brandTabsRecipe = tv({
  extend: tabsRecipe,
  slots: {
    trigger:
      "aria-selected:text-emerald-700 dark:aria-selected:text-emerald-300",
  },
  variants: {},
});
</script>

<Tabs defaultValue="tab-1" items={profileTabs()} recipe={brandTabsRecipe} />
