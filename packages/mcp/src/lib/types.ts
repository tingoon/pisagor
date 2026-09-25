import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export type Framework = "react" | "vue" | "astro";

interface CatalogFile {
  path: string;
  content: string;
}

interface CatalogExample {
  id: string;
  exportName: string;
}

export interface CatalogComponent {
  name: string;
  package: string;
  storiesPath: string | null;
  storiesContent: string | null;
  examples: CatalogExample[];
  sources: CatalogFile[];
}

export interface ComponentsCatalog {
  kind: "components";
  package: string;
  framework: Framework;
  components: CatalogComponent[];
}

export interface RecipesCatalog {
  kind: "recipes";
  package: string;
  recipes: Record<string, CatalogFile>;
}

export interface ResolvedPackage {
  name: string;
  root: string;
  framework: Framework | null;
  catalog: ComponentsCatalog | RecipesCatalog;
}

export interface ToolConfig {
  frameworks: Framework[];
  packages: ResolvedPackage[];
}

export interface Tool<T = unknown> {
  name: string;
  description: string;
  ctx?(config: ToolConfig): Promise<T>;
  exec(
    server: McpServer,
    opts: { ctx: T; name: string; description: string; config: ToolConfig },
  ): void | Promise<void>;
}

export interface ComponentEntry {
  name: string;
  package: string;
  hasStories: boolean;
}

export interface ExampleEntry {
  id: string;
  exportName: string;
}

export function frameworkInputSchema(frameworks: Framework[]) {
  return z
    .enum(frameworks as [Framework, ...Framework[]])
    .describe(
      frameworks.length === 1
        ? `Framework (locked to ${frameworks[0]}).`
        : `Framework for this call. Allowed: ${frameworks.join(", ")}.`,
    );
}

export function resolveFramework(
  config: ToolConfig,
  framework?: Framework,
): Framework {
  const [only] = config.frameworks;
  if (config.frameworks.length === 1 && only) {
    return only;
  }
  if (config.frameworks.length === 0) {
    throw new Error("No framework packages installed.");
  }
  if (!framework) {
    throw new Error(
      `framework is required when multiple are installed (${config.frameworks.join(", ")}).`,
    );
  }
  if (!config.frameworks.includes(framework)) {
    throw new Error(
      `Framework "${framework}" is not installed. Available: ${config.frameworks.join(", ")}.`,
    );
  }
  return framework;
}
