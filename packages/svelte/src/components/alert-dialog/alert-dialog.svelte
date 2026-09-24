<script lang="ts">
import type { ComponentProps, Snippet } from "svelte";
import AlertDialogContent from "./alert-dialog-content.svelte";
import AlertDialogDescription from "./alert-dialog-description.svelte";
import AlertDialogFooter from "./alert-dialog-footer.svelte";
import AlertDialogHeader from "./alert-dialog-header.svelte";
import AlertDialogRoot from "./alert-dialog-root.svelte";
import AlertDialogTitle from "./alert-dialog-title.svelte";
import AlertDialogTrigger from "./alert-dialog-trigger.svelte";

type Props = Omit<ComponentProps<typeof AlertDialogRoot>, "children" | "title"> & {
  actions?: Snippet;
  description?: string | Snippet;
  title?: string | Snippet;
  trigger?: Snippet;
};

let { actions, description, title, trigger, ...rest }: Props = $props();
</script>

<AlertDialogRoot {...rest}>
  {#if trigger}
    <AlertDialogTrigger>
      {#snippet asChild(
  props,
)}
        {@const merged = props({})}
        <span {...merged} style="display: contents"> {@render trigger()} </span>
      {/snippet}
    </AlertDialogTrigger>
  {/if}

  <AlertDialogContent>
    {#if title || description}
      <AlertDialogHeader>
        {#if title}
          <AlertDialogTitle>
            {#if typeof title === "string"}
              {title}
            {:else}
              {@render title()}
            {/if}
          </AlertDialogTitle>
        {/if}
        {#if description}
          <AlertDialogDescription>
            {#if typeof description === "string"}
              {description}
            {:else}
              {@render description()}
            {/if}
          </AlertDialogDescription>
        {/if}
      </AlertDialogHeader>
    {/if}
    {#if actions}
      <AlertDialogFooter> {@render actions()} </AlertDialogFooter>
    {/if}
  </AlertDialogContent>
</AlertDialogRoot>
