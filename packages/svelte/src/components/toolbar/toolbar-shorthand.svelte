<script lang="ts">
  import type {
    ToolbarContract,
    ToolbarRootContract,
  } from "@pisagor/contracts";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import ToolbarActions from "./toolbar-actions.svelte";
  import ToolbarDescription from "./toolbar-description.svelte";
  import ToolbarHeading from "./toolbar-heading.svelte";
  import ToolbarRoot from "./toolbar-root.svelte";
  import ToolbarTitle from "./toolbar-title.svelte";

  type Props = Omit<HTMLAttributes<HTMLDivElement>, "children" | "title"> &
    ToolbarRootContract & {
      actions?: Snippet;
      description?: Snippet | string;
      title?: Snippet | string;
    } & ToolbarContract;

  let {
    actions,
    classNames,
    description,
    title,
    class: className,
    ...rest
  }: Props = $props();
  const hasHeading = $derived(title !== undefined || description !== undefined);
</script>

<ToolbarRoot {...rest} class={className}>
  {#if hasHeading}
    <ToolbarHeading class={classNames?.heading}>
      {#if title !== undefined}
        <ToolbarTitle class={classNames?.title}>
          {#if typeof title === "string"}
            {title}
          {:else}
            {@render title()}
          {/if}
        </ToolbarTitle>
      {/if}
      {#if description !== undefined}
        <ToolbarDescription class={classNames?.description}>
          {#if typeof description === "string"}
            {description}
          {:else}
            {@render description()}
          {/if}
        </ToolbarDescription>
      {/if}
    </ToolbarHeading>
  {/if}
  {#if actions}
    <ToolbarActions class={classNames?.actions}
      >{@render actions()}</ToolbarActions
    >
  {/if}
</ToolbarRoot>
