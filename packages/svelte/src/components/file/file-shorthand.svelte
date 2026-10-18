<script lang="ts">
  import type { FileContract, FileRootContract } from "@pisagor/props";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import FileActions from "./file-actions.svelte";
  import FileContent from "./file-content.svelte";
  import FileMedia from "./file-media.svelte";
  import FileMeta from "./file-meta.svelte";
  import FileName from "./file-name.svelte";
  import FileRoot from "./file-root.svelte";
  import FileSize from "./file-size.svelte";

  type Props = Omit<HTMLAttributes<HTMLDivElement>, "children"> &
    FileRootContract & {
      actions?: Snippet;
      media?: Snippet;
      meta?: Snippet | string;
      name: Snippet | string;
      size?: number;
    } & FileContract;

  let { size, name, actions, media, meta, ...rest }: Props = $props();
</script>

<FileRoot {...rest}>
  <FileMedia>
    {#if media}
      {@render media()}
    {/if}
  </FileMedia>
  <FileContent>
    <FileName>
      {#if typeof name === "string"}
        {name}
      {:else}
        {@render name()}
      {/if}
    </FileName>
    {#if meta}
      <FileMeta>
        {#if typeof meta === "string"}
          {meta}
        {:else}
          {@render meta()}
        {/if}
      </FileMeta>
    {/if}
    {#if size !== undefined}
      <FileSize value={size} />
    {/if}
  </FileContent>
  {#if actions}
    <FileActions>{@render actions()}</FileActions>
  {/if}
</FileRoot>
