import { ScrollArea } from "@pisagor/react/scroll-area";
import { Separator } from "@pisagor/react/separator";
import { Fragment } from "react";
import preview from "#/react/preview";

const meta = preview.meta({
  component: ScrollArea,
  parameters: {
    docs: {
      api: "closed",
      checklist: {
        definedBehaviors: true,
        definedOptions: true,
        platformScales: true,
      },
      description: {
        component:
          "Scrolls overflow content with styled scrollbars and optional fade edges that match the surrounding interface.",
      },
      taxonomy: "standard",
    },
  },
  title: "Components/Layout/Scroll Area",
});

export const Default = meta.story({
  render: () => {
    const tags = Array.from({ length: 50 }, (_, i) => `v1.0.0-beta.${i}`);
    return (
      <ScrollArea className="h-64 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 font-medium text-sm leading-none">Tags</h4>
          {tags.map((tag) => (
            <Fragment key={tag}>
              <div className="text-sm">{tag}</div>
              <Separator className="my-2" />
            </Fragment>
          ))}
        </div>
      </ScrollArea>
    );
  },
});

export const Horizontal = meta.story({
  render: () => (
    <ScrollArea className="h-auto rounded-lg border">
      <div className="flex w-max gap-2 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            className="flex h-20 w-32 shrink-0 items-center justify-center rounded-md bg-muted"
            key={String(i)}
          >
            <span className="font-medium text-sm">Item {i + 1}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
});

export const ScrollFade = meta.story({
  render: () => {
    const tags = Array.from({ length: 50 }, (_, i) => `v1.0.0-beta.${i}`);
    return (
      <ScrollArea className="h-64 w-48 rounded-md border" scrollFade>
        <div className="p-4">
          <h4 className="mb-4 font-medium text-sm leading-none">Tags</h4>
          {tags.map((tag) => (
            <Fragment key={tag}>
              <div className="text-sm">{tag}</div>
              <Separator className="my-2" />
            </Fragment>
          ))}
        </div>
      </ScrollArea>
    );
  },
});

export const BothDirections = meta.story({
  render: () => (
    <ScrollArea className="h-64 rounded-lg border **:[p]:min-w-100">
      <div className="space-y-4 p-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nulla metus. Ut consequat
          augue et semper porttitor. Integer vel ante arcu. Nullam tincidunt dolor odio, ac
          tincidunt leo dictum eu. Proin auctor, nulla vel tincidunt lacinia, leo erat sagittis
          erat, quis porta orci sem id purus. Nam fermentum turpis vitae pretium facilisis. Mauris
          id iaculis augue, ut tristique purus. Pellentesque sed diam semper, porta nibh ut, sodales
          nunc. Aliquam accumsan a mi eget fringilla. Vestibulum varius mi vitae sem placerat, et
          imperdiet lorem fringilla. Curabitur sed congue mi, quis tincidunt tortor. Suspendisse
          pharetra sem vel risus volutpat, a auctor massa faucibus.
        </p>
        <p>
          Etiam posuere felis et consectetur molestie. Cras sed rhoncus nisl. Aenean quis est sit
          amet quam facilisis lacinia at non magna. In eu orci accumsan, ultrices justo vitae,
          sodales nibh. Curabitur in sagittis dui. Maecenas commodo cursus magna, non fringilla nisl
          commodo in. Vestibulum nec fermentum dolor. Etiam euismod nisl non scelerisque faucibus.
          Aliquam erat volutpat. Donec quis nunc ultrices, viverra quam ut, sagittis tortor. Nullam
          nulla tortor, convallis nec magna ut, lacinia interdum est. Proin lobortis diam
          sollicitudin venenatis dictum.
        </p>
        <p>
          Mauris a dui a nibh ullamcorper tempus. Maecenas laoreet magna venenatis leo mattis
          sagittis. Donec in convallis leo, quis suscipit leo. Sed a augue purus. Integer id
          vulputate erat. Quisque a arcu purus. Nulla feugiat ex tellus, ac elementum magna
          porttitor a. Sed convallis rhoncus aliquam. Praesent euismod metus a fermentum faucibus.
        </p>
      </div>
    </ScrollArea>
  ),
});

export const Nested = meta.story({
  render: () => (
    <ScrollArea className="h-64 w-64 rounded-md border text-sm">
      <div className="space-y-4 p-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <ScrollArea className="h-32 rounded-md border">
          <div className="p-4">
            This is a nested scroll area. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </div>
        </ScrollArea>
      </div>
    </ScrollArea>
  ),
});
