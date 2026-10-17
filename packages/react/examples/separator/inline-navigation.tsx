import source from "./inline-navigation.tsx?raw";
import { Separator } from "@pisagor/react";

export function InlineNavigation() {
  return (
    <div className="flex h-5 items-center gap-2 text-sm *:[div]:space-y-1">
      <div>
        <p className="leading-none font-medium">Blog</p>
        <p className="text-muted-foreground text-xs">Latest posts</p>
      </div>
      <Separator orientation="vertical" />
      <div>
        <p className="leading-none font-medium">Docs</p>
        <p className="text-muted-foreground text-xs">API references</p>
      </div>
      <Separator orientation="vertical" />
      <div>
        <p className="leading-none font-medium">Source</p>
        <p className="text-muted-foreground text-xs">View on GitHub</p>
      </div>
    </div>
  );
}

export { source as InlineNavigationSource };
