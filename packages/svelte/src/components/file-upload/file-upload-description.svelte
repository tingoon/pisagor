<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { useFileUpload } from "./file-upload.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  class?: string | undefined;
};
let { class: className, children, ...rest }: Props = $props();
const { slots } = useFileUpload();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.description({ class: className })}
  data-part="title"
  data-scope="file-upload"
>
  {@render children?.()}
</Ark>
