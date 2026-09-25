<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import DotsThreeIcon from "phosphor-svelte/lib/DotsThreeIcon";
import type { HTMLAttributes } from "svelte/elements";
import { useBreadcrumb } from "./breadcrumb.context";

type Props = Omit<HTMLAttributes<HTMLSpanElement>, "class"> & { class?: string | undefined };
let { class: className, ...rest }: Props = $props();
const { slots } = useBreadcrumb();
</script>

<Ark
  as="span"
  {...rest}
  aria-hidden="true"
  class={className}
  data-part="ellipsis"
  data-scope="breadcrumb"
  role="presentation"
>
  <DotsThreeIcon class={slots.ellipsis()} />
</Ark>
