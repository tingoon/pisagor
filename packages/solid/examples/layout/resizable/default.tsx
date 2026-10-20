import { Resizable } from "@pisagor/solid";
import { cn } from "@pisagor/utils";

export function Default() {
  return (
    <div class="h-96 w-full">
      <Resizable
        class="size-full rounded-md border"
        defaultSize={[50, 50]}
        panels={[{ id: "a" }, { id: "b" }]}
      >
        <Resizable.Panel id="a">
          <div
            class={cn(
              "bg-muted/30 flex size-full items-center justify-center text-sm",
            )}
          >
            A
          </div>
        </Resizable.Panel>
        <Resizable.ResizeTrigger id="a:b">
          <Resizable.ResizeTriggerIndicator />
        </Resizable.ResizeTrigger>
        <Resizable.Panel id="b">
          <div
            class={cn(
              "bg-muted/30 flex size-full items-center justify-center text-sm",
            )}
          >
            B
          </div>
        </Resizable.Panel>
      </Resizable>
    </div>
  );
}
