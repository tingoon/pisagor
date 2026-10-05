<script lang="ts">
import { Portal } from "@ark-ui/svelte/portal";
import type { CommandProps as BaseCommandProps } from "@pisagor/props";
import { commandRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "svelte";
import DialogBackdrop from "../dialog/dialog-backdrop.svelte";
import DialogContent from "../dialog/dialog-content.svelte";
import DialogDescription from "../dialog/dialog-description.svelte";
import DialogHeader from "../dialog/dialog-header.svelte";
import DialogPositioner from "../dialog/dialog-positioner.svelte";
import DialogTitle from "../dialog/dialog-title.svelte";
import { setCommandContext } from "./command.context";

type Props = Omit<
  ComponentProps<typeof DialogContent>,
  "showCloseButton" | "title" | "recipe"
> & {
  description?: string;
  title?: string;
} & BaseCommandProps;

let {
  size = "lg",
  children,
  description = "Search for a command to run...",
  title = "Command Palette",
  recipe = commandRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
setCommandContext({
  get slots() {
    return slots;
  },
});
</script>

<Portal>
  <DialogBackdrop />
  <DialogPositioner>
    <DialogContent
      {...rest}
      class={slots.dialogContent({ class: className })}
      showCloseButton={false}
      {size}
    >
      <DialogHeader class={slots.dialogHeader()}>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      {@render children?.()}
    </DialogContent>
  </DialogPositioner>
</Portal>
