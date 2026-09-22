import { SkipNav } from "..";

export function Default() {
  return (
    <>
      <SkipNav.Link className="focus:absolute" id="demo-content" />

      <SkipNav.Content
        className="rounded-lg border bg-card p-4 focus:ring-2"
        id="demo-content"
        tabIndex={undefined}
      >
        <h2 className="mb-2 font-semibold">Main content</h2>
        <p className="text-muted-foreground text-sm">
          This is the main content area. When users press Tab and then Enter on the skip link, focus
          jumps here.
        </p>
      </SkipNav.Content>
    </>
  );
}
