<script lang="ts">
  import { RatingGroup as RatingGroupPrimitive } from "@ark-ui/svelte";
  import type {
    RatingGroupControlProps,
    RatingGroupItemProps,
    RatingGroupRootProps,
  } from "@ark-ui/svelte";
  import type { RatingContract, RatingRootContract } from "@pisagor/contracts";

  import { StarIcon } from "phosphor-svelte";
  import type { Component } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  import RatingControl from "./rating-control.svelte";
  import RatingIndicator from "./rating-indicator.svelte";
  import RatingItem from "./rating-item.svelte";
  import RatingRoot from "./rating-root.svelte";

  type Props = Omit<RatingGroupRootProps, "children" | "onValueChange"> & {
    /** Extra props forwarded to the rating control element */
    controlProps?: Omit<RatingGroupControlProps, "children" | "class">;
    icon?: Component;
    /** Extra props forwarded to each rating item indicator element */
    indicatorProps?: Omit<
      HTMLAttributes<HTMLSpanElement>,
      "children" | "class"
    >;
    /** Extra props forwarded to each rating item element */
    itemProps?: Omit<RatingGroupItemProps, "children" | "index" | "class">;
    /**
     * Called when the rating value changes.
     *
     * Receives the numeric value directly, not Ark UI event details.
     */
    onValueChange?: (value: number) => void;
  } & RatingRootContract &
    RatingContract;

  let {
    controlProps,
    icon: Icon = StarIcon,
    indicatorProps,
    itemProps,
    onValueChange,
    classNames,
    ...rest
  }: Props = $props();

  function handleValueChange(
    details: Parameters<NonNullable<RatingGroupRootProps["onValueChange"]>>[0],
  ) {
    onValueChange?.(details.value);
  }
</script>

<RatingRoot
  {...rest}
  onValueChange={onValueChange ? handleValueChange : undefined}
>
  <RatingControl {...controlProps} class={classNames?.control}>
    <RatingGroupPrimitive.Context>
      {#snippet render(api)}
        {#each api().items as item (item)}
          <RatingItem {...itemProps} class={classNames?.item} index={item}>
            <RatingGroupPrimitive.ItemContext>
              {#snippet render(itemState)}
                <RatingIndicator
                  {...indicatorProps}
                  class={classNames?.indicator}
                  data-half={itemState().half ? "" : undefined}
                  data-highlighted={itemState().highlighted ? "" : undefined}
                >
                  <Icon data-bg="" />
                  <Icon data-fg="" weight="fill" />
                </RatingIndicator>
              {/snippet}
            </RatingGroupPrimitive.ItemContext>
          </RatingItem>
        {/each}
      {/snippet}
    </RatingGroupPrimitive.Context>

    <RatingGroupPrimitive.HiddenInput />
  </RatingControl>
</RatingRoot>
