import { SkipNav } from "../index";

export function Default() {
  return (
    <>
      <SkipNav.Link class="focus:absolute" id="demo-content" />
      <SkipNav.Content
        class="rounded-lg border bg-card p-4 focus:ring-2"
        id="demo-content"
        tabIndex={undefined}
      >
        <h2 class="mb-2 font-semibold">Main content</h2>
        <p class="text-muted-foreground text-sm">
          This is the main content area. When users press Tab and then Enter on
          the skip link, focus jumps here.
        </p>
      </SkipNav.Content>
    </>
  );
}
