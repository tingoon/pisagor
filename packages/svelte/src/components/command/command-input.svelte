<script lang="ts">
  import type { ComboboxInputProps } from "@ark-ui/svelte";
  import type { FormControlGroupShellVariantProps } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { MagnifyingGlassIcon } from "phosphor-svelte";
  import ComboboxControl from "../combobox/combobox-control.svelte";
  import ComboboxInput from "../combobox/combobox-input.svelte";
  import { InputGroup } from "../input-group";
  import { useStyles } from "./command.context";

  type Props = Omit<ComboboxInputProps, "size"> &
    Pick<FormControlGroupShellVariantProps, "size" | "variant">;

  let { size = "md", variant, class: className, ...rest }: Props = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<ComboboxControl class={slots.control()}>
  <InputGroup class={slots.input({ class: cn(className) })} {size} {variant}>
    <InputGroup.Addon>
      <MagnifyingGlassIcon aria-hidden="true" class={slots.inputIcon()} />
    </InputGroup.Addon>
    <ComboboxInput>
      {#snippet asChild(props)}
        <!-- biome-ignore lint/a11y/noAutofocus: command palette focuses search on open -->
        <InputGroup.Input {...props(rest)} autofocus />
      {/snippet}
    </ComboboxInput>
  </InputGroup>
</ComboboxControl>
