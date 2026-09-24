<script lang="ts">
import type { ComponentProps } from "svelte";
import Button from "../button/button.svelte";

type Props = Omit<ComponentProps<typeof Button>, "variant"> & {
  variant?: "default" | "destructive";
};

let { variant = "default", children, ...rest }: Props = $props();
</script>

<Button {...rest} {variant}> {@render children?.()} </Button>
