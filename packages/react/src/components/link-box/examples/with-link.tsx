import { LinkBox } from "..";

export function WithLink() {
  return (
    <LinkBox asChild>
      <article className="flex flex-col gap-2 rounded-xl border p-4">
        <LinkBox.Overlay asChild>
          <a href="https://example.com/blog/simple-post">Blog post title</a>
        </LinkBox.Overlay>
        <p className="text-muted-foreground text-sm">A sample blog post.</p>
        <a className="text-primary underline" href="https://example.com/blog/simple-post/details">
          Inner link
        </a>
      </article>
    </LinkBox>
  );
}
