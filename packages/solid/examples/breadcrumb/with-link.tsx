import source from "./with-link.tsx?raw";
import { Breadcrumb } from "@pisagor/solid";

export function WithLink() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link
            asChild={(props) => (
              <a {...props()} href="https://example.com/docs">
                Docs
              </a>
            )}
          />
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link
            asChild={(props) => (
              <a {...props()} href="https://example.com/docs/components">
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

export { source as WithLinkSource };
