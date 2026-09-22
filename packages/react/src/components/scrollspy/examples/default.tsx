import { Button, ScrollArea } from "@pisagor/react";
import { useRef } from "react";
import { Scrollspy } from "..";
import { verticalSections } from "./helpers";
export function Default() {
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex w-full grow gap-5">
      <div className="flex w-[150px] flex-col gap-2">
        <Scrollspy className="flex flex-col gap-2.5" offset={50} targetRef={parentRef}>
          {verticalSections.map((item) => (
            <Button
              className="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
              data-scrollspy-anchor={item.id}
              key={item.id}
              variant="outline"
            >
              {item.label}
            </Button>
          ))}
        </Scrollspy>
      </div>

      <div className="grow" ref={parentRef}>
        <ScrollArea className="-me-5 h-[500px] grow pe-5">
          <div className="space-y-8">
            {verticalSections.map((item) => (
              <div className="space-y-2.5" id={item.id} key={item.id}>
                <h3 className="text-base text-foreground">{item.label}</h3>
                <div className="h-[350px] rounded-2xl bg-muted" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
