import { Button, ScrollArea } from "@pisagor/react";
import { useRef } from "react";
import { Scrollspy } from "..";
import { horizontalSections } from "./helpers";
export function Horizontal() {
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full space-y-5">
      <div className="flex w-full gap-2">
        <Scrollspy className="flex gap-2.5" offset={50} targetRef={parentRef}>
          {horizontalSections.map((item) => (
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

      <div className="w-full" ref={parentRef}>
        <ScrollArea className="h-100 grow">
          <div className="space-y-8">
            {horizontalSections.map((item) => (
              <div className="space-y-2.5" id={item.id} key={item.id}>
                <h3 className="text-base text-foreground">{item.label}</h3>
                <div className="h-87.5 rounded-2xl bg-muted" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
