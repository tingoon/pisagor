/** @jsxImportSource solid-js */

import {
  type Component,
  createComponent,
  type JSX,
  onCleanup,
  onMount,
} from "solid-js";
import { render } from "solid-js/web";
import {
  armExamplesHost,
  type ExampleGlobs,
  type ExampleModule,
  type ExamplesHostProps,
  renderMissingExample,
} from "#/lib/examples-host";

const globs: ExampleGlobs = {
  block: import.meta.glob<ExampleModule>("../../examples/solid/*/index.ts"),
  component: import.meta.glob<ExampleModule>(
    "../../../../../packages/solid/examples/*/index.ts",
  ),
  form: import.meta.glob<ExampleModule>(
    "../../../../../packages/solid-form/examples/*/index.ts",
  ),
};

/** Single client island for every live preview on a Solid docs page. */
export function SolidExamplesHost(props: ExamplesHostProps): JSX.Element {
  onMount(() => {
    const stop = armExamplesHost(
      globs,
      { exportNames: props.exportNames, id: props.id, kind: props.kind },
      (slot, comp, message) => {
        if (typeof comp !== "function") {
          return renderMissingExample(slot, message);
        }
        return render(
          () => createComponent(comp as Component, {}),
          slot as HTMLElement,
        );
      },
    );
    onCleanup(stop);
  });

  return <div aria-hidden="true" data-solid-examples-host="" hidden />;
}
