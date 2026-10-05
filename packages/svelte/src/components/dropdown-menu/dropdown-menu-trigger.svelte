<script lang="ts">
import {
  Menu as MenuPrimitive,
  type MenuTriggerProps,
} from "@ark-ui/svelte/menu";

let { children, ...rest }: MenuTriggerProps = $props();
</script>

<MenuPrimitive.Trigger {...rest}>
  {@render children?.()}
</MenuPrimitive.Trigger>
