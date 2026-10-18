<script lang="ts">
  import {
    Field as FieldPrimitive,
    type FieldRootProps as ArkRootProps,
  } from "@ark-ui/svelte";
  import type { FieldRootContract } from "@pisagor/props";
  import { withProvider } from "./field.context";

  type Props = ArkRootProps & FieldRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<FieldPrimitive.Root {...root.props}>
  {@render children?.()}
</FieldPrimitive.Root>
