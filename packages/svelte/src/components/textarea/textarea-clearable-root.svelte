<script lang="ts">
  import { Field, type FieldTextareaProps } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./textarea.context";

  type Props = FieldTextareaProps & {
    clearable?: boolean;
  };

  let {
    clearable,
    class: className,
    children,
    value = $bindable<string | undefined>(undefined),
    ...rest
  }: Props = $props();
  const styles = useStyles();
</script>

<Field.Textarea
  {...rest}
  class={styles.slots.clearableRoot({ class: cn(className), clearable })}
  data-part="clearable-root"
  data-scope="textarea"
  bind:value
>
  {@render children?.()}
</Field.Textarea>
