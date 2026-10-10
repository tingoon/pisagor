<script lang="ts">
import {
  type PaginationEllipsisProps,
  Pagination as PaginationPrimitive,
} from "@ark-ui/svelte/pagination";
import { cn } from "@pisagor/utils";
import DotsThreeIcon from "phosphor-svelte/lib/DotsThreeIcon";
import { usePagination } from "./pagination.context";

let { class: className, ...rest }: PaginationEllipsisProps = $props();
const styles = usePagination();
const slots = $derived(styles.slots);
</script>

<PaginationPrimitive.Ellipsis
  {...rest}
  class={slots.ellipsis({ class: cn(className) })}
>
  <DotsThreeIcon />
</PaginationPrimitive.Ellipsis>
