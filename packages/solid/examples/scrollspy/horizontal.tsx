/** @jsxImportSource solid-js */
import { Button, ScrollArea, Scrollspy } from "@pisagor/solid";
import { horizontalSections } from "./helpers";

export function Horizontal() {
  let parentEl: HTMLDivElement | undefined;

  return (
    <div class="w-full space-y-5">
      <div class="flex w-full gap-2">
        <Scrollspy
          class="flex gap-2.5"
          offset={50}
          targetRef={() => parentEl ?? null}
        >
          {horizontalSections.map((item) => (
            <Button
              class="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
              data-scrollspy-anchor={item.id}
              variant="outline"
            >
              {item.label}
            </Button>
          ))}
        </Scrollspy>
      </div>

      <div
        class="w-full"
        ref={(el) => {
          parentEl = el;
        }}
      >
        <ScrollArea class="h-100 grow">
          <div class="space-y-8">
            {horizontalSections.map((item) => (
              <div class="space-y-2.5" id={item.id}>
                <h3 class="text-base text-foreground">{item.label}</h3>
                <div class="h-87.5 rounded-2xl bg-muted" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
