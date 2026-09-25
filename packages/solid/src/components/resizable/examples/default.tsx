import { cn } from "@pisagor/utils";
import { Resizable } from "../index";

export function Default() {
  return (
    <div class="h-96 w-full">
      <Resizable
        class="size-full rounded-md border"
        defaultSize={[50, 50]}
        panels={[{ id: "a" }, { id: "b" }]}
      >
        <Resizable.Panel id="a">
          <div class={cn("flex size-full items-center justify-center bg-muted/30 text-sm")}>A</div>
        </Resizable.Panel>
        <Resizable.ResizeTrigger id="a:b" />
        <Resizable.Panel id="b">
          <div class={cn("flex size-full items-center justify-center bg-muted/30 text-sm")}>B</div>
        </Resizable.Panel>
      </Resizable>
    </div>
  );
}
