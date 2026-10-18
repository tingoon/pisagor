<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { Format } from "../format";
  import { withContext } from "./file.context";

  type Props = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    value: number;
  };

  let { value, ...rest }: Props = $props();
  const part = withContext(() => rest, { name: "Size" });
</script>

<div {...part.props}>
  <Format.Byte {value} />
</div>
