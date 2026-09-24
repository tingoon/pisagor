<script lang="ts">
import type { PaginationEllipsisProps } from "@ark-ui/svelte/pagination";
import { Pagination as PaginationPrimitive } from "@ark-ui/svelte/pagination";
import { cn } from "@pisagor/utils";
import DotsThreeIcon from "phosphor-svelte/lib/DotsThreeIcon";
import { usePagination } from "./pagination.context";

type Props = Omit<PaginationEllipsisProps, "class"> & { class?: string | undefined };

let { class: className, ...rest }: Props = $props();
const { slots } = usePagination();
</script>

<PaginationPrimitive.Ellipsis {...rest} class={slots.ellipsis({ class: cn(className) })}>
  <DotsThreeIcon />
</PaginationPrimitive.Ellipsis>
