<script lang="ts">
  import { Menu as MenuPrimitive, type MenuRootProps } from "@ark-ui/svelte";

  let {
    positioning = { placement: "right-start" },
    children,
    ...rest
  }: MenuRootProps = $props();
</script>

<MenuPrimitive.Root {...rest} {positioning}>
  {@render children?.()}
</MenuPrimitive.Root>
