<script lang="ts">
  import { cn } from "@pisagor/utils";
  import type { ComponentProps } from "svelte";
  import DialogBody from "../dialog/dialog-body.svelte";
  import { useStyles } from "./sheet.context";

  let {
    children,
    class: className,
    ...rest
  }: ComponentProps<typeof DialogBody> = $props();
  const styles = useStyles();
</script>

<DialogBody {...rest} class={styles.slots.body({ class: cn(className) })}>
  {@render children?.()}
</DialogBody>
