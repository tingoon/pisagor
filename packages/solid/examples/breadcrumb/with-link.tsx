/** @jsxImportSource solid-js */
import { Breadcrumb } from "@pisagor/solid";

export function WithLink() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link
            asChild={(props) => (
              <a {...props()} href="/docs">
                Docs
              </a>
            )}
          />
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link
            asChild={(props) => (
              <a {...props()} href="/docs/components">
                Components
              </a>
            )}
          />
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
}
