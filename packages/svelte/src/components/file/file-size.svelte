<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { Format } from "../format";
import { useFile } from "./file.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class" | "children"> & {
  class?: string | undefined;
  value: number;
};

let { value, class: className, ...rest }: Props = $props();
const { slots } = useFile();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.size({ class: className })}
  data-part="size"
  data-scope="file"
>
  <Format.Byte {value} />
</Ark>
