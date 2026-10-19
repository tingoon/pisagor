<script lang="ts">
  import {
    type DialogTriggerProps,
    FileUpload as FileUploadPrimitive,
  } from "@ark-ui/svelte";
  import type { FileUploadContract } from "@pisagor/contracts";
  import { fileUploadItemRecipe } from "@pisagor/recipes";
  import type { MessageKey } from "@pisagor/utils";
  import { UploadIcon, XIcon } from "phosphor-svelte";
  import type { ComponentProps, Snippet } from "svelte";
  import Button from "../button.svelte";
  import { useLocale } from "../provider/context";
  import { useFileUpload } from "./file-upload.context";
  import FileUploadClearTrigger from "./file-upload-clear-trigger.svelte";
  import FileUploadDropzone from "./file-upload-dropzone.svelte";
  import FileUploadItem from "./file-upload-item.svelte";
  import FileUploadItemDeleteTrigger from "./file-upload-item-delete-trigger.svelte";
  import FileUploadItemGroup from "./file-upload-item-group.svelte";
  import FileUploadItemName from "./file-upload-item-name.svelte";
  import FileUploadItemPreview from "./file-upload-item-preview.svelte";
  import FileUploadItemPreviewImage from "./file-upload-item-preview-image.svelte";
  import FileUploadItemSizeText from "./file-upload-item-size-text.svelte";
  import FileUploadLabel from "./file-upload-label.svelte";
  import FileUploadRoot from "./file-upload-root.svelte";
  import FileUploadTrigger from "./file-upload-trigger.svelte";

  type Renderable = Snippet | string;
  type TriggerRender = DialogTriggerProps["asChild"];

  type Props = Omit<
    ComponentProps<typeof FileUploadRoot>,
    "children" | "title"
  > &
    FileUploadContract & {
      /** Clear-all trigger; the snippet receives the trigger props. */
      clearTrigger?: TriggerRender;
      /** Secondary text in the dropzone. */
      description?: Renderable;
      /**
       * Whether to render the dropzone. When `false`, only `trigger` and the
       * file list render.
       *
       * @defaultValue true
       */
      dropzone?: boolean;
      /** Helper text at the bottom of the dropzone. */
      helper?: Renderable;
      /**
       * Dropzone icon. Pass `null` to hide it.
       *
       * @defaultValue UploadIcon
       */
      icon?: Snippet | null;
      /** Visible label rendered above the dropzone. */
      label?: Renderable;
      /**
       * Whether to render the accepted and rejected file list.
       *
       * @defaultValue true
       */
      showList?: boolean;
      /** Primary text in the dropzone. */
      title?: Renderable;
      /** File picker trigger; the snippet receives the trigger props. */
      trigger?: TriggerRender;
    };

  let {
    classNames,
    clearTrigger,
    description,
    dropzone = true,
    helper,
    icon,
    itemClassNames,
    label,
    showList = true,
    title,
    trigger,
    ...rest
  }: Props = $props();
  const { m } = useLocale();
  const itemSlots = fileUploadItemRecipe();
</script>

{#snippet render(value: Renderable)}
  {#if typeof value === "function"}
    {@render value()}
  {:else}
    {value}
  {/if}
{/snippet}

{#snippet triggerNode()}
  {#if trigger}
    <FileUploadTrigger asChild={trigger} class={classNames?.trigger} />
  {/if}
{/snippet}

{#snippet text(
  slot: "description" | "dropzoneIcon" | "helper" | "title",
  value: Renderable,
  className: string | undefined,
)}
  {@const styles = useFileUpload()}
  <div class={styles.slots[slot]({ class: className })}>
    {@render render(value)}
  </div>
{/snippet}

{#snippet fileItem(file: File, errors?: readonly string[])}
  {@const isImage = file.type.startsWith("image/")}
  <FileUploadItem
    class={itemSlots.listItem({ class: itemClassNames?.listItem })}
    {file}
  >
    <FileUploadItemPreview
      class={itemSlots.listPreview({ class: itemClassNames?.listPreview })}
      type={isImage ? "image/*" : ".*"}
    >
      {#if isImage}
        <FileUploadItemPreviewImage class={itemClassNames?.previewImage} />
      {:else}
        <span class={itemSlots.extension({ class: itemClassNames?.extension })}>
          {file.name.split(".").pop()}
        </span>
      {/if}
    </FileUploadItemPreview>
    <div class={itemSlots.content({ class: itemClassNames?.content })}>
      <FileUploadItemName class={itemClassNames?.name} />
      <FileUploadItemSizeText class={itemClassNames?.sizeText} />
      {#each errors ?? [] as code (code)}
        <div class={itemSlots.error({ class: itemClassNames?.error })}>
          {m(`fileUpload.error.${code}` as MessageKey) ?? code}
        </div>
      {/each}
    </div>
    <FileUploadItemDeleteTrigger class={itemClassNames?.deleteTrigger}>
      {#snippet asChild(props)}
        <Button
          {...props({
            class: itemSlots.deleteButton({
              class: itemClassNames?.deleteButton,
            }),
          })}
          size="icon-xs"
          variant="ghost"
        >
          <XIcon aria-hidden="true" />
        </Button>
      {/snippet}
    </FileUploadItemDeleteTrigger>
  </FileUploadItem>
{/snippet}

<FileUploadRoot {...rest}>
  {#if label}
    <FileUploadLabel class={classNames?.label}>
      {@render render(label)}
    </FileUploadLabel>
  {/if}
  {#if clearTrigger}
    <FileUploadClearTrigger
      asChild={clearTrigger}
      class={classNames?.clearTrigger}
    />
  {/if}
  {#if dropzone}
    <FileUploadDropzone class={classNames?.dropzone}>
      {#if icon !== null}
        {@const styles = useFileUpload()}
        <div
          class={styles.slots.dropzoneIcon({ class: classNames?.dropzoneIcon })}
        >
          {#if icon}
            {@render icon()}
          {:else}
            <UploadIcon />
          {/if}
        </div>
      {/if}
      {#if title}
        {@render text("title", title, classNames?.title)}
      {/if}
      {#if description}
        {@render text("description", description, classNames?.description)}
      {/if}
      {@render triggerNode()}
      {#if helper}
        {@render text("helper", helper, classNames?.helper)}
      {/if}
    </FileUploadDropzone>
  {:else}
    {@render triggerNode()}
  {/if}
  {#if showList}
    <FileUploadPrimitive.Context>
      {#snippet render(api)}
        {#if api().acceptedFiles.length > 0}
          <FileUploadItemGroup class={classNames?.itemGroup}>
            {#each api().acceptedFiles as file, index (`${file.name}-${index}`)}
              {@render fileItem(file)}
            {/each}
          </FileUploadItemGroup>
        {/if}
        {#if api().rejectedFiles.length > 0}
          <FileUploadItemGroup class={classNames?.itemGroup} type="rejected">
            {#each api().rejectedFiles as rejection, index (`${rejection.file.name}-${index}`)}
              {@render fileItem(rejection.file, rejection.errors)}
            {/each}
          </FileUploadItemGroup>
        {/if}
      {/snippet}
    </FileUploadPrimitive.Context>
  {/if}
</FileUploadRoot>
