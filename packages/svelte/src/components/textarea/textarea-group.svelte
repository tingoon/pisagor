<script lang="ts">
  import type { TextareaRootContract } from "@pisagor/contracts";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import InputGroupRoot from "../input-group/input-group-root.svelte";
  import { withContext } from "./textarea.context";

  type Props = HTMLAttributes<HTMLFieldSetElement> & {
    children?: Snippet;
    variant?: TextareaRootContract["variant"];
  };

  let { variant, children, ...rest }: Props = $props();

  const part = withContext(() => ({ ...rest, variant }), { name: "Group" });
</script>

<InputGroupRoot {...part.props}>
  {@render children?.()}
</InputGroupRoot>
