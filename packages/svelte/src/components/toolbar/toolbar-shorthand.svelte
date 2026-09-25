<script lang="ts">
import type { ToolbarRecipeSlot } from "@pisagor/recipes/toolbar";
import type { ComponentProps, Snippet } from "svelte";
import ToolbarActions from "./toolbar-actions.svelte";
import ToolbarDescription from "./toolbar-description.svelte";
import ToolbarHeading from "./toolbar-heading.svelte";
import ToolbarRoot from "./toolbar-root.svelte";
import ToolbarTitle from "./toolbar-title.svelte";

type Props = Omit<ComponentProps<typeof ToolbarRoot>, "children"> & {
  actions?: Snippet;
  classNames?: Partial<Record<ToolbarRecipeSlot, string>>;
  description?: Snippet | string;
  title?: Snippet | string;
};

let { actions, classNames, description, title, class: className, ...rest }: Props = $props();
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
    <ToolbarActions class={classNames?.actions}>{@render actions()}</ToolbarActions>
  {/if}
</ToolbarRoot>
