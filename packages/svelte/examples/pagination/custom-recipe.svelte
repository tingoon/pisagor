<script lang="ts">
import { paginationRecipe } from "@pisagor/recipes";
import { Pagination } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandPaginationRecipe = tv({
  extend: paginationRecipe,
  slots: {
    item: "data-selected:not-[hover]:border-emerald-500 data-selected:not-[hover]:text-emerald-700 dark:data-selected:not-[hover]:text-emerald-300",
  },
  variants: {},
});
</script>

<Pagination count={50} pageSize={10} recipe={brandPaginationRecipe} />
