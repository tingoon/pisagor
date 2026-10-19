import { CaretRightIcon, DotsThreeIcon } from "@squidlab/phosphor-solid/icons";
import { Breadcrumb } from "@pisagor/solid";

export function Collapsed() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="https://example.com/">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>
          <CaretRightIcon />
        </Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Ellipsis>
            <DotsThreeIcon aria-hidden />
          </Breadcrumb.Ellipsis>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>
          <CaretRightIcon />
        </Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="https://example.com/">
            Components
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>
          <CaretRightIcon />
        </Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
}
