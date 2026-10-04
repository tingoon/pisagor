/** @jsxImportSource solid-js */

import { ToggleGroup } from "@pisagor/solid";
import { cn } from "@pisagor/utils";
import { createSignal } from "solid-js";
export function FontWeight() {
  const FONT_WEIGHTS = [
    { className: "font-light", label: "Light", value: "light" },
    { className: "font-normal", label: "Normal", value: "normal" },
    { className: "font-medium", label: "Medium", value: "medium" },
    { className: "font-bold", label: "Bold", value: "bold" },
  ] as const;
  const [value, setValue] = createSignal<string[]>(["normal"]);

  return (
    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-2">
        <span class="font-medium text-sm">Font weight</span>
        <ToggleGroup.Root
          class="flex-wrap"
          multiple={false}
          onValueChange={(value) =>
            setValue(Array.isArray(value) ? value : [value])
          }
          size="lg"
          spacing={2}
          value={value()}
          variant="outline"
        >
          {FONT_WEIGHTS.map((weight) => (
            <ToggleGroup.Item
              aria-label={`Set font weight to ${weight.label}`}
              class="size-16 flex-col gap-1 py-2"
              value={weight.value}
            >
              <span class={cn("text-lg", weight.className)}>Aa</span>
              <span class="text-muted-foreground text-xs">{weight.label}</span>
            </ToggleGroup.Item>
          ))}
        </ToggleGroup.Root>
      </div>
    </div>
  );
}
