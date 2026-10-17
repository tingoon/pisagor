<script lang="ts">
  import { type Component, mount, unmount } from "svelte";
  import {
    armExamplesHost,
    type ExampleGlobs,
    type ExamplesHostProps,
    renderMissingExample,
  } from "#/lib/examples-host";

  const globs: ExampleGlobs = {
    block: import.meta.glob("../../examples/svelte/*/*.svelte"),
    component: import.meta.glob(
      "../../../../../packages/svelte/examples/*/*.svelte",
    ),
    form: import.meta.glob(
      "../../../../../packages/svelte-form/examples/*/*.svelte",
    ),
  };

  /** Single client island for every live preview on a Svelte docs page. */
  let { id, exportNames, kind }: ExamplesHostProps = $props();

  $effect(() =>
    armExamplesHost(globs, { exportNames, id, kind }, (slot, comp, message) => {
      if (comp == null) return renderMissingExample(slot, message);
      slot.replaceChildren();
      const instance = mount(comp as Component, { target: slot });
      return () => {
        void unmount(instance);
      };
    }),
  );
</script>

<div aria-hidden="true" data-svelte-examples-host="" hidden></div>
