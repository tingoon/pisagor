<script lang="ts">
  import { cn } from "@pisagor/utils";
  import type { ComponentProps } from "svelte";
  import DialogFooter from "../dialog/dialog-footer.svelte";
  import { useStyles } from "./sheet.context";

  let {
    children,
    class: className,
    ...rest
  }: ComponentProps<typeof DialogFooter> = $props();
  const styles = useStyles();
</script>

<DialogFooter {...rest} class={styles.slots.footer({ class: cn(className) })}>
  {@render children?.()}
</DialogFooter>
