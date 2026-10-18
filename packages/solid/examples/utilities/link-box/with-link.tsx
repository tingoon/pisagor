import { LinkBox } from "@pisagor/solid";

export function WithLink() {
  return (
    <LinkBox
      asChild={(props) => (
        <article {...props()} class="flex flex-col gap-2 rounded-xl border p-4">
          <LinkBox.Overlay
            asChild={(overlayProps) => (
              <a
                {...overlayProps()}
                href="https://example.com/blog/simple-post"
              >
                Blog post title
              </a>
            )}
          />
          <p class="text-muted-foreground text-sm">A sample blog post.</p>
          <a
            class="text-primary underline"
            href="https://example.com/blog/simple-post/details"
          >
            Inner link
          </a>
        </article>
      )}
    />
  );
}
