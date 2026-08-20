import {
  PhArrowSquareOut,
  PhFileCode,
  PhFileJs,
  PhFilePlus,
  PhFileText,
  PhFolderPlus,
  PhLink,
  PhPackage,
  PhPencilSimple,
  PhStar,
  PhTrash,
} from "@phosphor-icons/vue";
import type { TreeNodeType } from "@pisagor/vue";
import { ContextMenu, createFileIcons, createTreeCollection, TreeView } from "@pisagor/vue";
import { h, ref, shallowRef, type VNode } from "vue";
import preview from "#/storybook/preview";

type ArkPart = Parameters<typeof h>[0];

interface TreeNodeWithLink extends TreeNodeType {
  href?: string;
}

const meta = preview.meta({
  component: TreeView,
  parameters: {
    docs: {
      description: {
        component:
          "Browses nested folders or categories in an expandable tree for files, navigation, and hierarchies.",
      },
    },
  },
  subcomponents: {
    Branch: TreeView.Branch,
    BranchContent: TreeView.BranchContent,
    BranchIndicator: TreeView.BranchIndicator,
    BranchItem: TreeView.BranchItem,
    Checkbox: TreeView.Checkbox,
    Content: TreeView.Content,
    Item: TreeView.Item,
    Label: TreeView.Label,
    Node: TreeView.Node,
    Tree: TreeView.Tree,
  },
  title: "Components/Navigation/Tree View",
});

export const Default = meta.story({
  render: () => ({
    setup() {
      const collection = createTreeCollection({ rootNode: sampleFileTree });

      const renderNode = (node: TreeNodeType, indexPath: number[]): VNode =>
        h(TreeView.Node as ArkPart, { indexPath, key: node.id, node }, () =>
          node.children
            ? h(TreeView.Branch as ArkPart, null, () => [
                h(TreeView.BranchItem as ArkPart, null, () => node.name),
                h(TreeView.BranchContent as ArkPart, null, () =>
                  node.children?.map((child, index) => renderNode(child, [...indexPath, index])),
                ),
              ])
            : h(TreeView.Content as ArkPart, null, () =>
                h(TreeView.Item as ArkPart, null, () => node.name),
              ),
        );

      return () =>
        h("div", null, [
          h(TreeView as ArkPart, { collection }, () =>
            h(TreeView.Tree as ArkPart, null, () =>
              collection.rootNode.children?.map((node, index) => renderNode(node, [index])),
            ),
          ),
        ]);
    },
  }),
});

export const Links = meta.story({
  render: () => ({
    setup() {
      const collection = createTreeCollection({ rootNode: docsLinkTree });

      const renderNode = (node: TreeNodeWithLink, indexPath: number[]): VNode =>
        h(TreeView.Node as ArkPart, { indexPath, key: node.id, node }, () =>
          node.children
            ? h(TreeView.Branch as ArkPart, null, () => [
                h(TreeView.BranchItem as ArkPart, { icon: null }, () => node.name),
                h(TreeView.BranchContent as ArkPart, null, () =>
                  node.children?.map((child, index) => renderNode(child, [...indexPath, index])),
                ),
              ])
            : h(TreeView.Content as ArkPart, { asChild: true }, () =>
                h(
                  "a",
                  {
                    href: node.href ?? "#",
                    rel: node.href?.startsWith("http") ? "noopener noreferrer" : undefined,
                    target: node.href?.startsWith("http") ? "_blank" : undefined,
                  },
                  h(TreeView.Item as ArkPart, { icon: PhLink }, () => [
                    node.name,
                    node.href?.startsWith("http") ? h(PhArrowSquareOut) : null,
                  ]),
                ),
              ),
        );

      return () =>
        h("div", null, [
          h(TreeView as ArkPart, { collection }, () => [
            h(TreeView.Label as ArkPart, null, () => "Docs"),
            h(TreeView.Tree as ArkPart, null, () =>
              collection.rootNode.children?.map((node, index) => renderNode(node, [index])),
            ),
          ]),
        ]);
    },
  }),
});

export const CheckboxTree = meta.story({
  render: () => ({
    setup() {
      const collection = createTreeCollection({ rootNode: sampleFileTree });
      const checkedNodes = ref<string[]>(["readme.md"]);

      const renderNode = (node: TreeNodeType, indexPath: number[]): VNode =>
        h(TreeView.Node as ArkPart, { indexPath, key: node.id, node }, () =>
          node.children
            ? h(TreeView.Branch as ArkPart, null, () => [
                h(TreeView.BranchItem as ArkPart, null, () => [
                  h(TreeView.Checkbox as ArkPart),
                  node.name,
                ]),
                h(TreeView.BranchContent as ArkPart, null, () =>
                  node.children?.map((child, index) => renderNode(child, [...indexPath, index])),
                ),
              ])
            : h(TreeView.Content as ArkPart, null, () => [
                h(TreeView.Checkbox as ArkPart),
                h(TreeView.Item as ArkPart, null, () => node.name),
              ]),
        );

      return () =>
        h("div", { class: "flex items-center gap-2" }, [
          h("div", null, [
            h(
              TreeView as ArkPart,
              {
                checkedValue: checkedNodes.value,
                collection,
                onCheckedChange: (details: { checkedValue: string[] }) => {
                  checkedNodes.value = details.checkedValue;
                },
              },
              () =>
                h(TreeView.Tree as ArkPart, null, () =>
                  collection.rootNode.children?.map((node, index) => renderNode(node, [index])),
                ),
            ),
          ]),
          h(
            "p",
            { class: "whitespace-pre-wrap text-muted-foreground text-sm" },
            JSON.stringify(checkedNodes.value, null, 2),
          ),
        ]);
    },
  }),
});

export const WithContextMenu = meta.story({
  render: () => ({
    setup() {
      const collection = createTreeCollection({ rootNode: sampleFileTree });

      const renderNode = (node: TreeNodeType, indexPath: number[]): VNode =>
        h(TreeView.Node as ArkPart, { indexPath, key: node.id, node }, () =>
          node.children
            ? h(TreeView.Branch as ArkPart, null, () => [
                h(ContextMenu as ArkPart, null, () => [
                  h(ContextMenu.Trigger as ArkPart, { asChild: true }, () =>
                    h(TreeView.BranchItem as ArkPart, null, () => node.name),
                  ),
                  h(ContextMenu.Content as ArkPart, { class: "w-40" }, () => [
                    h(ContextMenu.Item as ArkPart, { value: "add-folder" }, () => [
                      h(PhFolderPlus, { "aria-hidden": true }),
                      "Add folder",
                    ]),
                    h(ContextMenu.Item as ArkPart, { value: "add-file" }, () => [
                      h(PhFilePlus, { "aria-hidden": true }),
                      "Add file",
                    ]),
                    h(ContextMenu.Separator as ArkPart),
                    h(ContextMenu.Item as ArkPart, { value: "rename" }, () => [
                      h(PhPencilSimple, { "aria-hidden": true }),
                      "Rename",
                    ]),
                    h(ContextMenu.Separator as ArkPart),
                    h(
                      ContextMenu.Item as ArkPart,
                      { value: "delete", variant: "destructive" },
                      () => [h(PhTrash, { "aria-hidden": true }), "Delete"],
                    ),
                  ]),
                ]),
                h(TreeView.BranchContent as ArkPart, null, () =>
                  node.children?.map((child, index) => renderNode(child, [...indexPath, index])),
                ),
              ])
            : h(ContextMenu as ArkPart, null, () => [
                h(ContextMenu.Trigger as ArkPart, { asChild: true }, () =>
                  h(TreeView.Content as ArkPart, null, () =>
                    h(TreeView.Item as ArkPart, null, () => node.name),
                  ),
                ),
                h(ContextMenu.Content as ArkPart, { class: "w-40" }, () => [
                  h(ContextMenu.Item as ArkPart, { value: "add-file" }, () => [
                    h(PhPencilSimple, { "aria-hidden": true }),
                    "Rename",
                  ]),
                  h(ContextMenu.Separator as ArkPart),
                  h(
                    ContextMenu.Item as ArkPart,
                    { value: "delete", variant: "destructive" },
                    () => [h(PhTrash, { "aria-hidden": true }), "Delete"],
                  ),
                ]),
              ]),
        );

      return () =>
        h("div", null, [
          h(TreeView as ArkPart, { collection }, () =>
            h(TreeView.Tree as ArkPart, null, () =>
              collection.rootNode.children?.map((node, index) => renderNode(node, [index])),
            ),
          ),
        ]);
    },
  }),
});

export const CustomIconsFolder = meta.story({
  render: () => ({
    setup() {
      const collection = createTreeCollection({
        rootNode: {
          children: [
            {
              children: [
                { id: "app/page.tsx", name: "page.tsx" },
                { id: "app/layout.tsx", name: "layout.tsx" },
              ],
              expandedIcon: PhPackage,
              icon: PhPackage,
              id: "app",
              name: "app",
            },
            {
              children: [
                { id: "components/button.tsx", name: "button.tsx" },
                { id: "components/input.tsx", name: "input.tsx" },
              ],
              expandedIcon: null,
              icon: null,
              id: "components",
              name: "components",
            },
            { id: "package.json", name: "package.json" },
            { id: "readme.md", name: "README.md" },
          ],
          id: "ROOT",
          name: "",
        },
      });

      const renderNode = (node: TreeNodeType, indexPath: number[]): VNode =>
        h(TreeView.Node as ArkPart, { indexPath, key: node.id, node }, () =>
          node.children
            ? h(TreeView.Branch as ArkPart, null, () => [
                h(
                  TreeView.BranchItem as ArkPart,
                  { expandedIcon: node.expandedIcon, icon: node.icon },
                  () => node.name,
                ),
                h(TreeView.BranchContent as ArkPart, null, () =>
                  node.children?.map((child, index) => renderNode(child, [...indexPath, index])),
                ),
              ])
            : h(TreeView.Content as ArkPart, null, () =>
                h(TreeView.Item as ArkPart, null, () => node.name),
              ),
        );

      return () =>
        h("div", null, [
          h(TreeView as ArkPart, { collection }, () =>
            h(TreeView.Tree as ArkPart, null, () =>
              collection.rootNode.children?.map((node, index) => renderNode(node, [index])),
            ),
          ),
        ]);
    },
  }),
});

export const CustomIconsItem = meta.story({
  render: () => ({
    setup() {
      const collection = createTreeCollection({ rootNode: sampleFileTree });

      const renderNode = (node: TreeNodeType, indexPath: number[]): VNode =>
        h(TreeView.Node as ArkPart, { indexPath, key: node.id, node }, () =>
          node.children
            ? h(TreeView.Branch as ArkPart, null, () => [
                h(TreeView.BranchItem as ArkPart, null, () => node.name),
                h(TreeView.BranchContent as ArkPart, null, () =>
                  node.children?.map((child, index) => renderNode(child, [...indexPath, index])),
                ),
              ])
            : h(TreeView.Content as ArkPart, null, () =>
                h(TreeView.Item as ArkPart, { icon: PhStar }, () => node.name),
              ),
        );

      return () =>
        h("div", null, [
          h(TreeView as ArkPart, { collection }, () =>
            h(TreeView.Tree as ArkPart, null, () =>
              collection.rootNode.children?.map((node, index) => renderNode(node, [index])),
            ),
          ),
        ]);
    },
  }),
});

export const CustomIcons = meta.story({
  render: () => ({
    setup() {
      const fileIcons = createFileIcons({
        ".json": PhFileJs,
        ".md": PhFileText,
        ".tsx": PhFileCode,
      });
      const collection = createTreeCollection({ rootNode: sampleFileTree });

      const renderNode = (node: TreeNodeType, indexPath: number[]): VNode =>
        h(TreeView.Node as ArkPart, { indexPath, key: node.id, node }, () =>
          node.children
            ? h(TreeView.Branch as ArkPart, null, () => [
                h(TreeView.BranchItem as ArkPart, null, () => node.name),
                h(TreeView.BranchContent as ArkPart, null, () =>
                  node.children?.map((child, index) => renderNode(child, [...indexPath, index])),
                ),
              ])
            : h(TreeView.Content as ArkPart, null, () =>
                h(TreeView.Item as ArkPart, null, () => node.name),
              ),
        );

      return () =>
        h("div", null, [
          h(TreeView as ArkPart, { collection, fileIcons }, () =>
            h(TreeView.Tree as ArkPart, null, () =>
              collection.rootNode.children?.map((node, index) => renderNode(node, [index])),
            ),
          ),
        ]);
    },
  }),
});

export const MultipleSelection = meta.story({
  render: () => ({
    setup() {
      const collection = createTreeCollection({ rootNode: sampleFileTree });

      const renderNode = (node: TreeNodeType, indexPath: number[]): VNode =>
        h(TreeView.Node as ArkPart, { indexPath, key: node.id, node }, () =>
          node.children
            ? h(TreeView.Branch as ArkPart, null, () => [
                h(TreeView.BranchItem as ArkPart, null, () => node.name),
                h(TreeView.BranchContent as ArkPart, null, () =>
                  node.children?.map((child, index) => renderNode(child, [...indexPath, index])),
                ),
              ])
            : h(TreeView.Content as ArkPart, null, () =>
                h(TreeView.Item as ArkPart, null, () => node.name),
              ),
        );

      return () =>
        h("div", null, [
          h(TreeView as ArkPart, { collection, selectionMode: "multiple" }, () =>
            h(TreeView.Tree as ArkPart, null, () =>
              collection.rootNode.children?.map((node, index) => renderNode(node, [index])),
            ),
          ),
        ]);
    },
  }),
});

export const Rename = meta.story({
  render: () => ({
    setup() {
      const collection = shallowRef(createTreeCollection({ rootNode: sampleFileTree }));

      const renderNode = (node: TreeNodeType, indexPath: number[]): VNode =>
        h(TreeView.Node as ArkPart, { indexPath, key: node.id, node }, () =>
          node.children
            ? h(TreeView.Branch as ArkPart, null, () => [
                h(TreeView.BranchItem as ArkPart, null, () => node.name),
                h(TreeView.BranchContent as ArkPart, null, () =>
                  node.children?.map((child, index) => renderNode(child, [...indexPath, index])),
                ),
              ])
            : h(TreeView.Content as ArkPart, null, () =>
                h(TreeView.Item as ArkPart, null, () => node.name),
              ),
        );

      const handleRenameComplete = (details: { indexPath: number[]; label: string }) => {
        const node = collection.value.at(details.indexPath);
        if (!node) {
          return;
        }
        collection.value = collection.value.replace(details.indexPath, {
          ...node,
          name: details.label,
        });
      };

      return () =>
        h("div", null, [
          h(
            TreeView as ArkPart,
            {
              canRename: () => true,
              collection: collection.value,
              onRenameComplete: handleRenameComplete,
            },
            () =>
              h(TreeView.Tree as ArkPart, null, () =>
                collection.value.rootNode.children?.map((node, index) => renderNode(node, [index])),
              ),
          ),
        ]);
    },
  }),
});

export const Controlled = meta.story({
  render: () => ({
    setup() {
      const collection = createTreeCollection({ rootNode: controlledFileTree });
      const selected = ref<string[]>([]);

      const renderNode = (node: TreeNodeType, indexPath: number[]): VNode =>
        h(TreeView.Node as ArkPart, { indexPath, key: node.id, node }, () =>
          node.children
            ? h(TreeView.Branch as ArkPart, null, () => [
                h(TreeView.BranchItem as ArkPart, null, () => node.name),
                h(TreeView.BranchContent as ArkPart, null, () =>
                  node.children?.map((child, index) => renderNode(child, [...indexPath, index])),
                ),
              ])
            : h(TreeView.Content as ArkPart, null, () =>
                h(TreeView.Item as ArkPart, null, () => node.name),
              ),
        );

      return () => {
        const isCorrectSelection = selected.value[0] === "components/input.tsx";

        return h("div", { class: "flex flex-col items-center gap-2" }, [
          h("p", { class: "text-muted-foreground text-sm" }, "Select input.tsx"),
          h(
            TreeView as ArkPart,
            {
              class: "overflow-hidden",
              collection,
              onSelectionChange: (details: { selectedValue: string[] }) => {
                selected.value = details.selectedValue;
              },
              selectedValue: selected.value,
            },
            () =>
              h(TreeView.Tree as ArkPart, null, () =>
                collection.rootNode.children?.map((node, index) => renderNode(node, [index])),
              ),
          ),
          h("p", { class: "text-muted-foreground text-sm" }, isCorrectSelection ? "✅" : "❌"),
        ]);
      };
    },
  }),
});

const sampleFileTree = {
  children: [
    {
      children: [
        { id: "app/page.tsx", name: "page.tsx" },
        { id: "app/layout.tsx", name: "layout.tsx" },
      ],
      id: "app",
      name: "app",
    },
    {
      children: [
        { id: "components/button.tsx", name: "button.tsx" },
        { id: "components/input.tsx", name: "input.tsx" },
      ],
      id: "components",
      name: "components",
    },
    { id: "package.json", name: "package.json" },
    { id: "readme.md", name: "README.md" },
  ],
  id: "ROOT",
  name: "",
};

const controlledFileTree = {
  children: [
    {
      children: [
        { id: "components/button.tsx", name: "button.tsx" },
        { id: "components/input.tsx", name: "input.tsx" },
      ],
      id: "components",
      name: "components",
    },
    { id: "package.json", name: "package.json" },
  ],
  id: "ROOT",
  name: "",
};

const docsLinkTree = {
  children: [
    {
      children: [
        {
          href: "/docs",
          id: "docs/introduction",
          name: "Introduction",
        },
        {
          href: "/docs/components",
          id: "docs/components",
          name: "Components",
        },
      ],
      id: "docs",
      name: "Documentation",
    },
    {
      children: [
        {
          href: "https://example.com/source",
          id: "external/github",
          name: "GitHub Repository",
        },
      ],
      id: "external",
      name: "External Links",
    },
    { href: "/llms.txt", id: "llms.txt", name: "llms.txt" },
  ],
  id: "ROOT",
  name: "",
};
