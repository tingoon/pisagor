import { Button } from "@pisagor/react";
import { Collapsible } from "..";
export function PartialCollapse() {
  return (
    <Collapsible className="w-96" collapsedHeight="50px">
      <Collapsible.Trigger asChild>
        <Button className="w-full" variant="outline">
          Read more
          <Collapsible.Indicator />
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content className="space-y-2 p-2">
        <p className="text-muted-foreground text-sm">
          This is the first paragraph of content. When collapsed, only a portion
          of this content will be visible.
        </p>
        <p className="text-muted-foreground text-sm">
          This is the second paragraph. It will be hidden when the collapsible
          is in its collapsed state.
        </p>
        <p className="text-muted-foreground text-sm">
          This is the third paragraph. Expand the collapsible to see all the
          content.
        </p>
        <p className="text-muted-foreground text-sm">
          This is the fourth paragraph. The collapsedHeight prop controls how
          much content is visible when collapsed.
        </p>
        <Collapsible.Trigger asChild>
          <Button className="w-full" variant="outline">
            Collapse (cannot be focused when collapsed)
            <Collapsible.Indicator />
          </Button>
        </Collapsible.Trigger>
      </Collapsible.Content>
    </Collapsible>
  );
}
