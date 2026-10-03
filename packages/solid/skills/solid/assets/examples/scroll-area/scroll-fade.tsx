/** @jsxImportSource solid-js */

import { Separator } from "@pisagor/solid";
import { ScrollArea } from "@pisagor/solid/scroll-area";
export function ScrollFade() {
  const tags = Array.from({ length: 50 }, (_, i) => `v1.0.0-beta.${i}`);
  return (
    <ScrollArea class="h-64 w-48 rounded-md border" scrollFade>
      <div class="p-4">
        <h4 class="mb-4 font-medium text-sm leading-none">Tags</h4>
        {tags.map((tag) => (
          <>
            <div class="text-sm">{tag}</div>
            <Separator class="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  );
}
