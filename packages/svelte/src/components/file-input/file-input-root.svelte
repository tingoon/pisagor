<script lang="ts">
  import type { FileInputRootContract } from "@pisagor/contracts";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { withProvider } from "./file-input.context";

  type Props = HTMLAttributes<HTMLDivElement> &
    FileInputRootContract & {
      children?: Snippet;
      /** Disables the control and sets `data-disabled` on the root. */
      disabled?: boolean;
    };

  let { disabled, children, ...rest }: Props = $props();

  const root = withProvider(
    () => ({
      ...rest,
      "data-disabled": disabled ? true : undefined,
    }),
    {
      defaultProps: {
        role: "group",
      },
      name: "Root",
      slot: "root",
    },
  );
</script>

<div {...root.props}>
  {@render children?.()}
</div>
