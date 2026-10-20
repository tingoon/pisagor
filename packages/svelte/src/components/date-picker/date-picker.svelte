<script lang="ts">
  import { Portal, useDatePickerContext } from "@ark-ui/svelte";
  import type { DatePickerContract } from "@pisagor/contracts";
  import type { FormControlGroupShellVariantProps } from "@pisagor/recipes";
  import {
    CalendarIcon,
    CaretLeftIcon,
    CaretRightIcon,
    XIcon,
  } from "phosphor-svelte";
  import type { ComponentProps, Snippet } from "svelte";
  import Button from "../button.svelte";
  import { Calendar } from "../calendar";
  import type Input from "../input/input.svelte";
  import { InputGroup } from "../input-group";
  import { useLocale } from "../provider/context";
  import { useStyles } from "./date-picker.context";
  import DatePickerClearTrigger from "./date-picker-clear-trigger.svelte";
  import DatePickerContent from "./date-picker-content.svelte";
  import DatePickerControl from "./date-picker-control.svelte";
  import DatePickerInput from "./date-picker-input.svelte";
  import DatePickerPositioner from "./date-picker-positioner.svelte";
  import DatePickerRoot from "./date-picker-root.svelte";
  import DatePickerTrigger from "./date-picker-trigger.svelte";

  type InputProps = ComponentProps<typeof Input>;

  type Props = Omit<ComponentProps<typeof DatePickerRoot>, "children"> &
    DatePickerContract & {
      /** Calendar content; defaults to month/year navigation and the day grid. */
      children?: Snippet;
      /**
       * Whether to show a clear button when a date is selected.
       *
       * @defaultValue false
       */
      clearable?: boolean;
      /** Props forwarded to the text input. */
      inputProps?: Omit<
        InputProps,
        "clearable" | "placeholder" | "size" | "variant"
      >;
      /** Input placeholder. */
      placeholder?: string;
      /** Input size. */
      size?: FormControlGroupShellVariantProps["size"];
    };

  let {
    children,
    classNames,
    clearable = false,
    inputProps,
    placeholder,
    size,
    ...rest
  }: Props = $props();
  const { m } = useLocale();
</script>

{#snippet clearTrigger()}
  {@const api = useDatePickerContext()}
  {#if !api().disabled && !api().readOnly && api().value.length > 0}
    <DatePickerClearTrigger class={classNames?.clearTrigger}>
      {#snippet asChild(props)}
        <InputGroup.Button
          {...props()}
          aria-label={m("datePicker.clear")}
          size="icon-xs"
          type="button"
          variant="ghost"
        >
          <XIcon />
        </InputGroup.Button>
      {/snippet}
    </DatePickerClearTrigger>
  {/if}
{/snippet}

{#snippet field()}
  {@const styles = useStyles()}
  <DatePickerControl class={classNames?.control}>
    <InputGroup {size} variant={rest.variant}>
      <DatePickerInput class={classNames?.input}>
        {#snippet asChild(props)}
          <InputGroup.Input
            {...props(inputProps)}
            clearable={false}
            {placeholder}
          />
        {/snippet}
      </DatePickerInput>

      <InputGroup.Addon align="inline-end">
        {#if clearable}
          {@render clearTrigger()}
        {/if}

        <DatePickerTrigger class={classNames?.trigger}>
          {#snippet asChild(props)}
            <InputGroup.Button
              {...props()}
              aria-label={m("datePicker.openCalendar")}
              size="icon-xs"
              type="button"
              variant="ghost"
            >
              <CalendarIcon
                aria-hidden="true"
                class={styles.slots.icon({ class: classNames?.icon })}
              />
            </InputGroup.Button>
          {/snippet}
        </DatePickerTrigger>
      </InputGroup.Addon>
    </InputGroup>
  </DatePickerControl>
{/snippet}

<DatePickerRoot {...rest}>
  {@render field()}

  <Portal>
    <DatePickerPositioner class={classNames?.positioner}>
      <DatePickerContent class={classNames?.content}>
        {#if children}
          {@render children()}
        {:else}
          <Calendar.ViewControl>
            <Calendar.PrevTrigger>
              {#snippet asChild(props)}
                <Button {...props()} size="icon-md" variant="ghost">
                  <CaretLeftIcon aria-hidden="true" class="rtl:rotate-180" />
                </Button>
              {/snippet}
            </Calendar.PrevTrigger>
            <Calendar.MonthSelect />
            <Calendar.YearSelect />
            <Calendar.NextTrigger>
              {#snippet asChild(props)}
                <Button {...props()} size="icon-md" variant="ghost">
                  <CaretRightIcon aria-hidden="true" class="rtl:rotate-180" />
                </Button>
              {/snippet}
            </Calendar.NextTrigger>
          </Calendar.ViewControl>
          <Calendar.Table>
            <Calendar.WeekDays />
            <Calendar.TableDays />
          </Calendar.Table>
        {/if}
      </DatePickerContent>
    </DatePickerPositioner>
  </Portal>
</DatePickerRoot>
