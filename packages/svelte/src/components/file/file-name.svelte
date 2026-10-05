<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { useFile } from "./file.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  class?: string | undefined;
};
let { class: className, children, ...rest }: Props = $props();
const { slots } = useFile();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.name({ class: className })}
  data-part="name"
  data-scope="file"
>
  {@render children?.()}
</Ark>
