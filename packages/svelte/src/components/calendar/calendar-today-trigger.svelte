<script lang="ts">
  import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte";
  import type { ButtonRootContract } from "@pisagor/contracts";
  import type { ComponentProps } from "svelte";
  import Button from "../button.svelte";

  type Props = Omit<ComponentProps<typeof Button>, "size" | "variant"> & {
    size?: ButtonRootContract["size"];
    variant?: ButtonRootContract["variant"];
  };

  let { size = "lg", variant = "outline", children, ...rest }: Props = $props();
</script>

<CalendarPrimitive.Context>
  {#snippet render(calendar)}
    <Button
      {...rest}
      data-part="today-trigger"
      data-scope="calendar"
      onclick={() => calendar().selectToday()}
      {size}
      {variant}
    >
      {#if children}
        {@render children()}
      {:else}
        Today
      {/if}
    </Button>
  {/snippet}
</CalendarPrimitive.Context>
