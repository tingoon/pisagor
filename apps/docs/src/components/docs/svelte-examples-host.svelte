<script lang="ts">
import { type Component, mount, unmount } from "svelte";
import {
  armExamplesHost,
  type ExampleGlobs,
  type ExampleModule,
  type ExamplesHostProps,
  renderMissingExample,
} from "#/lib/examples-host";

const globs: ExampleGlobs = {
  block: import.meta.glob<ExampleModule>("../../examples/svelte/*/index.ts"),
  component: import.meta.glob<ExampleModule>(
    "../../../../../packages/svelte/examples/*/index.ts",
  ),
  form: import.meta.glob<ExampleModule>(
    "../../../../../packages/svelte-form/examples/*/index.ts",
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
