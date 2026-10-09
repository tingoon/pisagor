<script lang="ts">
import {
  type FieldRootProps as ArkRootProps,
  Field as FieldPrimitive,
} from "@ark-ui/svelte/field";
import type { FieldProps as BaseFieldProps } from "@pisagor/props";
import { withProvider } from "./field.context";

type Props = ArkRootProps & BaseFieldProps;

let { children, ...rest }: Props = $props();
const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<FieldPrimitive.Root {...root.props}>
  {@render children?.()}
</FieldPrimitive.Root>
