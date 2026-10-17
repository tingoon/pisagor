import { type ComponentType, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  armExamplesHost,
  type ExampleGlobs,
  type ExamplesHostProps,
} from "#/lib/examples-host";

const globs: ExampleGlobs = {
  block: import.meta.glob("../../examples/react/*/*.{ts,tsx}"),
  component: import.meta.glob(
    "../../../../../packages/react/examples/*/*.{ts,tsx}",
  ),
  form: import.meta.glob(
    "../../../../../packages/react-form/examples/*/*.{ts,tsx}",
  ),
};

/**
 * Single client island for every live preview on a React docs page (components,
 * forms, blocks, standalone previews). Props are optional — config is read from
 * the page when omitted.
 */
export function ReactExamplesHost({
  id,
  exportNames,
  kind,
}: ExamplesHostProps = {}) {
  useEffect(
    () =>
      armExamplesHost(
        globs,
        { exportNames, id, kind },
        (slot, comp, message) => {
          const root = createRoot(slot);
          const Comp =
            typeof comp === "function" ? (comp as ComponentType) : null;
          root.render(
            Comp ? (
              <Comp />
            ) : (
              <p className="text-muted-foreground text-sm">{message}</p>
            ),
          );
          // Defer so unmount never runs during a React commit (Strict Mode).
          return () => queueMicrotask(() => root.unmount());
        },
      ),
    [id, exportNames, kind],
  );

  return <div aria-hidden="true" data-react-examples-host="" hidden />;
}
