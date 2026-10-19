<script lang="ts">
  import { Field, type FieldTextareaProps } from "@ark-ui/svelte";
  import type { TextareaRootContract } from "@pisagor/contracts";

  import { withProvider } from "./textarea.context";

  type Props = FieldTextareaProps & TextareaRootContract;

  let {
    children,
    value = $bindable<string | undefined>(undefined),
    ...rest
  }: Props = $props();

  const root = withProvider(() => rest, { name: "Root", slot: "rootLayout" });
</script>

<Field.Textarea {...root.props} bind:value>
  {@render children?.()}
</Field.Textarea>
