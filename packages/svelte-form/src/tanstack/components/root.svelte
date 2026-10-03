<script lang="ts">
import type { Snippet } from "svelte";
import { preventDefaultFormSubmit } from "../field-utils";
import type { AppFormApi } from "../types";

interface Props {
  children?: Snippet;
  class?: string | undefined;
  form: AppFormApi;
  novalidate?: boolean | undefined;
  [key: string]: unknown;
}

let {
  children,
  class: className,
  form,
  novalidate = true,
  ...rest
}: Props = $props();

function handleSubmit(event: Event) {
  preventDefaultFormSubmit(event);
  void form.handleSubmit();
}
</script>

<form class={className} {novalidate} onsubmit={handleSubmit} {...rest}>
  <form.AppForm>
    {#snippet children()}
      {@render children?.()}
    {/snippet}
  </form.AppForm>
</form>
