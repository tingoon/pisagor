<script lang="ts">
  import type { EditableContract } from "@pisagor/contracts";
  import { CheckIcon, XIcon } from "phosphor-svelte";
  import type { ComponentProps } from "svelte";
  import Button from "../button.svelte";
  import { Input as TextInput } from "../input";
  import { useLocale } from "../provider/context";
  import { Textarea } from "../textarea";
  import EditableArea from "./editable-area.svelte";
  import EditableCancelTrigger from "./editable-cancel-trigger.svelte";
  import EditableControl from "./editable-control.svelte";
  import EditableInput from "./editable-input.svelte";
  import EditablePreview from "./editable-preview.svelte";
  import EditableRoot from "./editable-root.svelte";
  import EditableSubmitTrigger from "./editable-submit-trigger.svelte";

  type Size = "sm" | "md" | "lg";

  type Props = Omit<ComponentProps<typeof EditableRoot>, "children"> &
    EditableContract & {
      /** Render a `Textarea` instead of a single-line `Input`. */
      multiline?: boolean;
      /**
       * Whether to render cancel and submit buttons.
       *
       * @defaultValue true
       */
      showControls?: boolean;
      /**
       * Input and preview size.
       *
       * @defaultValue "md"
       */
      size?: Size;
    };

  let {
    classNames,
    multiline = false,
    showControls = true,
    size = "md",
    ...rest
  }: Props = $props();
  const { m } = useLocale();
  const iconSize = { lg: "icon-lg", md: "icon-md", sm: "icon-sm" } as const;
  const buttonSize = $derived(iconSize[size] ?? "icon-md");
</script>

<EditableRoot {...rest}>
  <EditableArea class={classNames?.area}>
    <EditableInput class={classNames?.input}>
      {#snippet asChild(props)}
        {#if multiline}
          <Textarea {...props()} />
        {:else}
          <TextInput {...props()} {size} />
        {/if}
      {/snippet}
    </EditableInput>
    <EditablePreview class={classNames?.preview} {size} />
  </EditableArea>
  {#if showControls}
    <EditableControl class={classNames?.control}>
      <EditableCancelTrigger class={classNames?.cancelTrigger}>
        {#snippet asChild(props)}
          <Button
            {...props()}
            aria-label={m("editable.cancel")}
            size={buttonSize}
            variant="outline"
          >
            <XIcon />
          </Button>
        {/snippet}
      </EditableCancelTrigger>
      <EditableSubmitTrigger class={classNames?.submitTrigger}>
        {#snippet asChild(props)}
          <Button
            {...props()}
            aria-label={m("editable.submit")}
            size={buttonSize}
            variant="outline"
          >
            <CheckIcon />
          </Button>
        {/snippet}
      </EditableSubmitTrigger>
    </EditableControl>
  {/if}
</EditableRoot>
