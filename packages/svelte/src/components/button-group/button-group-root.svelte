<script lang="ts">
  import type { ButtonGroupRootContract } from "@pisagor/contracts";
  import type { HTMLFieldsetAttributes } from "svelte/elements";
  import { withProvider } from "./button-group.context";

  type Props = HTMLFieldsetAttributes & {
    children?: import("svelte").Snippet;
  } & ButtonGroupRootContract;

  let { children, ...rest }: Props = $props();

  const root = withProvider(() => rest, { name: "Root" });
</script>

<fieldset {...root.props}>
  {@render children?.()}
</fieldset>
