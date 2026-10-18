<script lang="ts">
  import { Ark } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import { useAlertDialog } from "./alert-dialog.context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
  };

  let { children, class: className, ...rest }: Props = $props();
  const { slots } = useAlertDialog();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.header({ class: cn(className) })}
  data-part="header"
  data-scope="alert-dialog"
>
  {@render children?.()}
</Ark>
