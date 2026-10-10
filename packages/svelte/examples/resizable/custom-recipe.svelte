<script lang="ts">
import { resizableRecipe } from "@pisagor/recipes";
import { Resizable } from "@pisagor/svelte";
import { cn } from "@pisagor/utils";
import { tv } from "tailwind-variants";

const brandResizableRecipe = tv({
  extend: resizableRecipe,
  slots: {
    resizeTrigger:
      "hover:bg-emerald-500/40 focus-visible:bg-emerald-500/40 active:bg-emerald-500",
  },
  variants: {},
});

function panelClassName(orientation: "horizontal" | "vertical" = "horizontal") {
  return cn(
    "flex items-center justify-center bg-muted/30 text-sm",
    orientation === "vertical"
      ? "min-h-0 h-full w-full"
      : "min-w-0 h-full w-full",
  );
}
</script>

<div class="h-96 w-full">
  <Resizable
    class="size-full rounded-md border"
    defaultSize={[50, 50]}
    panels={[
      { id: "1", minSize: 10 },
      { id: "2", minSize: 10 },
    ]}
    recipe={brandResizableRecipe}
  >
    <Resizable.Panel class={panelClassName()} id="1">One</Resizable.Panel>
    <Resizable.ResizeTrigger id="1:2" withHandle />

    <Resizable.Panel class="h-full min-h-0 min-w-0" id="2">
      <Resizable
        class="size-full"
        defaultSize={[50, 50]}
        orientation="vertical"
        panels={[
          { id: "3", minSize: 10 },
          { id: "4", minSize: 10 },
        ]}
      >
        <Resizable.Panel class={panelClassName("vertical")} id="3">
          Two
        </Resizable.Panel>
        <Resizable.ResizeTrigger id="3:4" withHandle />

        <Resizable.Panel class={panelClassName("vertical")} id="4">
          Three
        </Resizable.Panel>
      </Resizable>
    </Resizable.Panel>
  </Resizable>
</div>
