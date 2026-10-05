<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import DotsThreeIcon from "phosphor-svelte/lib/DotsThreeIcon";
import type { HTMLAttributes } from "svelte/elements";
import { useBreadcrumb } from "./breadcrumb.context";

let { class: className, ...rest }: HTMLAttributes<HTMLSpanElement> = $props();
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
