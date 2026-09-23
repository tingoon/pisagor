import { Separator } from "@pisagor/react";
import { Fragment } from "react";
import { ScrollArea } from "..";
export function Default() {
  const tags = Array.from({ length: 50 }, (_, i) => `v1.0.0-beta.${i}`);
  return (
    <ScrollArea className="h-64 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 font-medium text-sm leading-none">Tags</h4>
        {tags.map((tag) => (
          <Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}
