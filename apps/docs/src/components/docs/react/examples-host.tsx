import { Provider } from "@pisagor/react";
import { type ComponentType, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  armExamplesHost,
  type ExampleGlobs,
  type ExamplesHostProps,
} from "#/lib/examples-host";

const globs: ExampleGlobs = {
  block: import.meta.glob("../../../blocks/react/**/*.{ts,tsx}"),
  component: import.meta.glob(
    "../../../../../../packages/react/examples/*/*/*.{ts,tsx}",
  ),
  form: import.meta.glob(
    "../../../../../../packages/react-form/examples/*/*/*.{ts,tsx}",
  ),
};

/**
 * Single client island for every live preview on a React docs page (components,
 * forms, blocks, standalone previews). Props are optional — config is read from
 * the page when omitted.
 *
 * Mounts one root `Provider` (and its toaster) for the page so examples that
 * call `toast.create` work the same as Storybook.
 */
export function ReactExamplesHost({
  id,
  exportNames,
  kind,
}: ExamplesHostProps = {}) {
  useEffect(() => {
    console.info("[ReactExamplesHost] arm", { id, exportNames, kind });
    return armExamplesHost(
      globs,
      { exportNames, id, kind },
      (slot, comp, message) => {
        console.info("[ReactExamplesHost] mount", {
          slot: slot.getAttribute("data-example-slot"),
          compType: typeof comp,
          message,
        });
        const root = createRoot(slot);
        const Comp =
          typeof comp === "function" ? (comp as ComponentType) : null;
        try {
          root.render(
            Comp ? (
              <Comp />
            ) : (
              <p className="text-muted-foreground text-sm">{message}</p>
            ),
          );
        } catch (error) {
          console.error("[ReactExamplesHost] render threw", error);
          root.render(
            <p className="text-destructive text-sm">{String(error)}</p>,
          );
        }
        // Defer so unmount never runs during a React commit (Strict Mode).
        return () => queueMicrotask(() => root.unmount());
      },
    );
  }, [id, exportNames, kind]);

  return (
    <>
      <Provider>{null}</Provider>
      <div aria-hidden="true" data-react-examples-host="" hidden />
    </>
  );
}
