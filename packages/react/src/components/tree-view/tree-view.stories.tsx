import {
  ArrowSquareOutIcon,
  FileCodeIcon,
  FileJsIcon,
  FilePlusIcon,
  FileTextIcon,
  FolderPlusIcon,
  LinkIcon,
  PackageIcon,
  PencilSimpleIcon,
  StarIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import type { NodeProviderProps, TreeNodeType } from "@pisagor/react";
import { ContextMenu, createFileIcons, createTreeCollection, TreeView } from "@pisagor/react";
import { useState } from "react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: TreeView,
  parameters: {
    docs: {
      aliases: ["tree"],
      api: "compound",
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component:
          "Browses nested folders or categories in an expandable tree for files, navigation, and hierarchies.",
      },
      taxonomy: "pattern",
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
  render: () => {
    const collection = createTreeCollection({
      rootNode: {
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
      },
    });

    const TreeNode = ({ node, indexPath, ...rest }: NodeProviderProps) => {
      return (
        <TreeView.Node {...rest} indexPath={indexPath} node={node}>
          {node.children ? (
            <TreeView.Branch>
              <TreeView.BranchItem>{node.name}</TreeView.BranchItem>

              <TreeView.BranchContent>
                {node.children.map((child, index) => (
                  <TreeNode indexPath={[...indexPath, index]} key={child.id} node={child} />
                ))}
              </TreeView.BranchContent>
            </TreeView.Branch>
          ) : (
            <TreeView.Content>
              <TreeView.Item>{node.name}</TreeView.Item>
            </TreeView.Content>
          )}
        </TreeView.Node>
      );
    };
    return (
      <div>
        <TreeView collection={collection}>
          <TreeView.Tree>
            {collection.rootNode.children?.map((node, index) => (
              <TreeNode indexPath={[index]} key={node.id} node={node} />
            ))}
          </TreeView.Tree>
        </TreeView>
      </div>
    );
  },
});

export const Links = meta.story({
  render: () => {
    interface TreeNodeWithLinks extends TreeNodeType<unknown> {
      href?: string;
    }
    const collection = createTreeCollection({
      rootNode: {
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
      },
    });

    const TreeNode = ({ node, indexPath }: NodeProviderProps<TreeNodeWithLinks>) => {
      return (
        <TreeView.Node indexPath={indexPath} node={node}>
          {node.children ? (
            <TreeView.Branch>
              <TreeView.BranchItem icon={null}>{node.name}</TreeView.BranchItem>
              <TreeView.BranchContent>
                {node.children.map((child, index) => (
                  <TreeNode indexPath={[...indexPath, index]} key={child.id} node={child} />
                ))}
              </TreeView.BranchContent>
            </TreeView.Branch>
          ) : (
            <TreeView.Content asChild>
              <a
                href={node.href ?? "#"}
                rel={node.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                target={node.href?.startsWith("http") ? "_blank" : undefined}
              >
                <TreeView.Item icon={LinkIcon}>
                  {node.name}
                  {node.href?.startsWith("http") && <ArrowSquareOutIcon />}
                </TreeView.Item>
              </a>
            </TreeView.Content>
          )}
        </TreeView.Node>
      );
    };
    return (
      <div>
        <TreeView collection={collection}>
          <TreeView.Label>Docs</TreeView.Label>
          <TreeView.Tree>
            {collection.rootNode.children?.map((node, index) => (
              <TreeNode indexPath={[index]} key={node.id} node={node} />
            ))}
          </TreeView.Tree>
        </TreeView>
      </div>
    );
  },
});

export const CheckboxTree = meta.story({
  render: () => {
    const collection = createTreeCollection({
      rootNode: {
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
      },
    });

    const TreeNode = ({ node, indexPath }: { node: TreeNodeType; indexPath: number[] }) => {
      return (
        <TreeView.Node indexPath={indexPath} node={node}>
          {node.children ? (
            <TreeView.Branch>
              <TreeView.BranchItem>
                <TreeView.Checkbox />
                {node.name}
              </TreeView.BranchItem>
              <TreeView.BranchContent>
                {node.children.map((child, index) => (
                  <TreeNode indexPath={[...indexPath, index]} key={child.id} node={child} />
                ))}
              </TreeView.BranchContent>
            </TreeView.Branch>
          ) : (
            <TreeView.Content>
              <TreeView.Checkbox />
              <TreeView.Item>{node.name}</TreeView.Item>
            </TreeView.Content>
          )}
        </TreeView.Node>
      );
    };
    const [checkedNodes, setCheckedNodes] = useState<string[]>(["readme.md"]);

    return (
      <div className="flex items-center gap-2">
        <div>
          <TreeView
            checkedValue={checkedNodes}
            collection={collection}
            onCheckedChange={({ checkedValue }) => setCheckedNodes(checkedValue)}
          >
            <TreeView.Tree>
              {collection.rootNode.children?.map((node, index) => (
                <TreeNode indexPath={[index]} key={node.id} node={node} />
              ))}
            </TreeView.Tree>
          </TreeView>
        </div>
        <p className="whitespace-pre-wrap text-muted-foreground text-sm">
          {JSON.stringify(checkedNodes, null, 2)}
        </p>
      </div>
    );
  },
});

export const WithContextMenu = meta.story({
  render: () => {
    const collection = createTreeCollection({
      rootNode: {
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
      },
    });

    const TreeNode = ({ node, indexPath, ...rest }: NodeProviderProps) => {
      return (
        <TreeView.Node {...rest} indexPath={indexPath} node={node}>
          {node.children ? (
            <TreeView.Branch>
              <ContextMenu>
                <ContextMenu.Trigger asChild>
                  <TreeView.BranchItem>{node.name}</TreeView.BranchItem>
                </ContextMenu.Trigger>
                <ContextMenu.Content className="w-40">
                  <ContextMenu.Item value="add-folder">
                    <FolderPlusIcon aria-hidden />
                    Add folder
                  </ContextMenu.Item>
                  <ContextMenu.Item value="add-file">
                    <FilePlusIcon aria-hidden />
                    Add file
                  </ContextMenu.Item>
                  <ContextMenu.Separator />
                  <ContextMenu.Item value="rename">
                    <PencilSimpleIcon aria-hidden />
                    Rename
                  </ContextMenu.Item>
                  <ContextMenu.Separator />
                  <ContextMenu.Item value="delete" variant="destructive">
                    <TrashIcon aria-hidden />
                    Delete
                  </ContextMenu.Item>
                </ContextMenu.Content>
              </ContextMenu>
              <TreeView.BranchContent>
                {node.children.map((child, index) => (
                  <TreeNode indexPath={[...indexPath, index]} key={child.id} node={child} />
                ))}
              </TreeView.BranchContent>
            </TreeView.Branch>
          ) : (
            <ContextMenu>
              <ContextMenu.Trigger asChild>
                <TreeView.Content>
                  <TreeView.Item>{node.name}</TreeView.Item>
                </TreeView.Content>
              </ContextMenu.Trigger>
              <ContextMenu.Content className="w-40">
                <ContextMenu.Item value="add-file">
                  <PencilSimpleIcon aria-hidden />
                  Rename
                </ContextMenu.Item>
                <ContextMenu.Separator />
                <ContextMenu.Item value="delete" variant="destructive">
                  <TrashIcon aria-hidden />
                  Delete
                </ContextMenu.Item>
              </ContextMenu.Content>
            </ContextMenu>
          )}
        </TreeView.Node>
      );
    };
    return (
      <div>
        <TreeView collection={collection}>
          <TreeView.Tree>
            {collection.rootNode.children?.map((node, index) => (
              <TreeNode indexPath={[index]} key={node.id} node={node} />
            ))}
          </TreeView.Tree>
        </TreeView>
      </div>
    );
  },
});

export const CustomIconsFolder = meta.story({
  render: () => {
    const collection = createTreeCollection({
      rootNode: {
        children: [
          {
            children: [
              { id: "app/page.tsx", name: "page.tsx" },
              { id: "app/layout.tsx", name: "layout.tsx" },
            ],
            expandedIcon: PackageIcon,
            icon: PackageIcon,
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

    const TreeNode = ({ node, indexPath, ...rest }: NodeProviderProps) => {
      return (
        <TreeView.Node {...rest} indexPath={indexPath} node={node}>
          {node.children ? (
            <TreeView.Branch>
              <TreeView.BranchItem expandedIcon={node.expandedIcon} icon={node.icon}>
                {node.name}
              </TreeView.BranchItem>
              <TreeView.BranchContent>
                {node.children.map((child, index) => (
                  <TreeNode indexPath={[...indexPath, index]} key={child.id} node={child} />
                ))}
              </TreeView.BranchContent>
            </TreeView.Branch>
          ) : (
            <TreeView.Content>
              <TreeView.Item>{node.name}</TreeView.Item>
            </TreeView.Content>
          )}
        </TreeView.Node>
      );
    };
    return (
      <div>
        <TreeView collection={collection}>
          <TreeView.Tree>
            {collection.rootNode.children?.map((node, index) => (
              <TreeNode indexPath={[index]} key={node.id} node={node} />
            ))}
          </TreeView.Tree>
        </TreeView>
      </div>
    );
  },
});

export const CustomIconsItem = meta.story({
  render: () => {
    const collection = createTreeCollection({
      rootNode: {
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
      },
    });

    const TreeNode = ({ node, indexPath, ...rest }: NodeProviderProps) => {
      return (
        <TreeView.Node {...rest} indexPath={indexPath} node={node}>
          {node.children ? (
            <TreeView.Branch>
              <TreeView.BranchItem>{node.name}</TreeView.BranchItem>

              <TreeView.BranchContent>
                {node.children.map((child, index) => (
                  <TreeNode indexPath={[...indexPath, index]} key={child.id} node={child} />
                ))}
              </TreeView.BranchContent>
            </TreeView.Branch>
          ) : (
            <TreeView.Content>
              <TreeView.Item icon={StarIcon}>{node.name}</TreeView.Item>
            </TreeView.Content>
          )}
        </TreeView.Node>
      );
    };
    return (
      <div>
        <TreeView collection={collection}>
          <TreeView.Tree>
            {collection.rootNode.children?.map((node, index) => (
              <TreeNode indexPath={[index]} key={node.id} node={node} />
            ))}
          </TreeView.Tree>
        </TreeView>
      </div>
    );
  },
});

export const CustomIcons = meta.story({
  render: () => {
    const fileIcons = createFileIcons({
      ".json": FileJsIcon,
      ".md": FileTextIcon,
      ".tsx": FileCodeIcon,
    });
    const collection = createTreeCollection({
      rootNode: {
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
      },
    });

    const TreeNode = ({ node, indexPath, ...rest }: NodeProviderProps) => {
      return (
        <TreeView.Node {...rest} indexPath={indexPath} node={node}>
          {node.children ? (
            <TreeView.Branch>
              <TreeView.BranchItem>{node.name}</TreeView.BranchItem>

              <TreeView.BranchContent>
                {node.children.map((child, index) => (
                  <TreeNode indexPath={[...indexPath, index]} key={child.id} node={child} />
                ))}
              </TreeView.BranchContent>
            </TreeView.Branch>
          ) : (
            <TreeView.Content>
              <TreeView.Item>{node.name}</TreeView.Item>
            </TreeView.Content>
          )}
        </TreeView.Node>
      );
    };
    return (
      <div>
        <TreeView collection={collection} fileIcons={fileIcons}>
          <TreeView.Tree>
            {collection.rootNode.children?.map((node, index) => (
              <TreeNode indexPath={[index]} key={node.id} node={node} />
            ))}
          </TreeView.Tree>
        </TreeView>
      </div>
    );
  },
});

export const MultipleSelection = meta.story({
  render: () => {
    const collection = createTreeCollection({
      rootNode: {
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
      },
    });

    const TreeNode = ({ node, indexPath, ...rest }: NodeProviderProps) => {
      return (
        <TreeView.Node {...rest} indexPath={indexPath} node={node}>
          {node.children ? (
            <TreeView.Branch>
              <TreeView.BranchItem>{node.name}</TreeView.BranchItem>

              <TreeView.BranchContent>
                {node.children.map((child, index) => (
                  <TreeNode indexPath={[...indexPath, index]} key={child.id} node={child} />
                ))}
              </TreeView.BranchContent>
            </TreeView.Branch>
          ) : (
            <TreeView.Content>
              <TreeView.Item>{node.name}</TreeView.Item>
            </TreeView.Content>
          )}
        </TreeView.Node>
      );
    };
    return (
      <div>
        <TreeView collection={collection} selectionMode="multiple">
          <TreeView.Tree>
            {collection.rootNode.children?.map((node, index) => (
              <TreeNode indexPath={[index]} key={node.id} node={node} />
            ))}
          </TreeView.Tree>
        </TreeView>
      </div>
    );
  },
});

export const Rename = meta.story({
  render: () => {
    const initialCollection = createTreeCollection({
      rootNode: {
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
      },
    });

    const TreeNode = ({ node, indexPath, ...rest }: NodeProviderProps) => {
      return (
        <TreeView.Node {...rest} indexPath={indexPath} node={node}>
          {node.children ? (
            <TreeView.Branch>
              <TreeView.BranchItem>{node.name}</TreeView.BranchItem>

              <TreeView.BranchContent>
                {node.children.map((child, index) => (
                  <TreeNode indexPath={[...indexPath, index]} key={child.id} node={child} />
                ))}
              </TreeView.BranchContent>
            </TreeView.Branch>
          ) : (
            <TreeView.Content>
              <TreeView.Item>{node.name}</TreeView.Item>
            </TreeView.Content>
          )}
        </TreeView.Node>
      );
    };
    const [collection, setCollection] = useState(initialCollection);

    return (
      <div>
        <TreeView
          canRename={() => true}
          collection={collection}
          onRenameComplete={(details) => {
            setCollection((prev) => {
              const node = prev.at(details.indexPath);
              if (!node) {
                return prev;
              }
              return prev.replace(details.indexPath, {
                ...node,
                name: details.label,
              });
            });
          }}
        >
          <TreeView.Tree>
            {collection.rootNode.children?.map((node, index) => (
              <TreeNode indexPath={[index]} key={node.id} node={node} />
            ))}
          </TreeView.Tree>
        </TreeView>
      </div>
    );
  },
});

export const Controlled = meta.story({
  render: () => {
    const collection = createTreeCollection({
      rootNode: {
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
      },
    });

    const TreeNode = ({ node, indexPath }: NodeProviderProps) => {
      return (
        <TreeView.Node indexPath={indexPath} key={node.id} node={node}>
          {node.children ? (
            <TreeView.Branch>
              <TreeView.BranchItem>{node.name}</TreeView.BranchItem>

              <TreeView.BranchContent>
                {node.children.map((child, index) => (
                  <TreeNode indexPath={[...indexPath, index]} key={child.id} node={child} />
                ))}
              </TreeView.BranchContent>
            </TreeView.Branch>
          ) : (
            <TreeView.Content>
              <TreeView.Item>{node.name}</TreeView.Item>
            </TreeView.Content>
          )}
        </TreeView.Node>
      );
    };
    const [selected, setSelected] = useState<string[]>([]);

    const isCorrectSelection = selected[0] === "components/input.tsx";

    return (
      <div className="flex flex-col items-center gap-2">
        <p className="text-muted-foreground text-sm">Select input.tsx</p>

        <TreeView
          className="overflow-hidden"
          collection={collection}
          onSelectionChange={({ selectedValue }) => setSelected(selectedValue)}
          selectedValue={selected}
        >
          <TreeView.Tree>
            {collection.rootNode.children?.map((node, index) => (
              <TreeNode indexPath={[index]} key={node.id} node={node} />
            ))}
          </TreeView.Tree>
        </TreeView>
        <p className="text-muted-foreground text-sm">{isCorrectSelection ? "✅" : "❌"}</p>
      </div>
    );
  },
});
