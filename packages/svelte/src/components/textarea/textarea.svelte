<script lang="ts">
  import type { FieldTextareaProps } from "@ark-ui/svelte";
  import type {
    TextareaContract,
    TextareaRootContract,
  } from "@pisagor/contracts";

  import TextareaClearAddon from "./textarea-clear-addon.svelte";
  import TextareaClearableRoot from "./textarea-clearable-root.svelte";
  import TextareaGroup from "./textarea-group.svelte";
  import TextareaProvider from "./textarea-provider.svelte";
  import TextareaRoot from "./textarea-root.svelte";

  type Props = FieldTextareaProps &
    TextareaRootContract &
    TextareaContract & {
      /**
       * Whether to show a clear button when the textarea has a value.
       *
       * @defaultValue false
       */
      clearable?: boolean;
      /** Called with the string value when the textarea changes. */
      onValueChange?: (value: string) => void;
    };

  let {
    size = "md",
    variant,
    clearable = false,
    disabled,
    readonly,
    value = $bindable<string | undefined>(undefined),
    oninput,
    onValueChange,
    recipe,
    class: className,
    classNames,
    ...rest
  }: Props = $props();

  const canClear = $derived(
    clearable && !disabled && !readonly && String(value ?? "").length > 0,
  );

  function handleInput(event: Event & { currentTarget: HTMLTextAreaElement }) {
    const next = event.currentTarget.value;
    value = next;
    onValueChange?.(next);
    oninput?.(event as never);
  }

  function handleClear() {
    value = "";
    onValueChange?.("");
  }
</script>

{#if !clearable}
  <TextareaRoot
    {...rest}
    class={className}
    {disabled}
    oninput={handleInput}
    {readonly}
    {recipe}
    {size}
    {variant}
    bind:value
  />
{:else}
  <TextareaProvider {recipe} {size} {variant}>
    <TextareaGroup class={classNames?.group} {variant}>
      <TextareaClearableRoot
        {...rest}
        class={className}
        clearable={canClear}
        {disabled}
        oninput={handleInput}
        {readonly}
        bind:value
      />
      {#if canClear}
        <TextareaClearAddon onClear={handleClear} />
      {/if}
    </TextareaGroup>
  </TextareaProvider>
{/if}
