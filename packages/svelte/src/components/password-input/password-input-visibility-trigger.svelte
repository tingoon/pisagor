<script lang="ts">
  import {
    PasswordInput as PasswordInputPrimitive,
    type PasswordInputVisibilityTriggerProps,
  } from "@ark-ui/svelte";
  import { useLocale } from "../provider/context";
  import { withContext } from "./password-input.context";

  /** Visibility trigger with a localized default `aria-label`. */
  let { children, ...rest }: PasswordInputVisibilityTriggerProps = $props();
  const { m } = useLocale();
  const part = withContext(
    () => ({
      "aria-label": m("passwordInput.togglePasswordVisibility"),
      ...rest,
    }),
    { name: "VisibilityTrigger" },
  );
</script>

<PasswordInputPrimitive.VisibilityTrigger {...part.props}>
  {@render children?.()}
</PasswordInputPrimitive.VisibilityTrigger>
