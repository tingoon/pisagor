<script lang="ts">
  import { InputGroup, PasswordInput } from "@pisagor/svelte";
  import { EyeIcon, EyeSlashIcon } from "phosphor-svelte";
</script>

<PasswordInput.Root class="w-64">
  <PasswordInput.Control>
    {#snippet asChild(props)}
      <InputGroup {...props()}>
        <PasswordInput.Input>
          {#snippet asChild(inputProps)}
            <InputGroup.Input {...inputProps()} placeholder="Password" />
          {/snippet}
        </PasswordInput.Input>
        <InputGroup.Addon align="inline-end">
          <PasswordInput.VisibilityTrigger>
            {#snippet asChild(triggerProps)}
              <InputGroup.Button
                {...triggerProps()}
                size="icon-xs"
                variant="ghost"
              >
                <PasswordInput.Indicator>
                  {#snippet fallback()}
                    <EyeSlashIcon />
                  {/snippet}
                  <EyeIcon />
                </PasswordInput.Indicator>
              </InputGroup.Button>
            {/snippet}
          </PasswordInput.VisibilityTrigger>
        </InputGroup.Addon>
      </InputGroup>
    {/snippet}
  </PasswordInput.Control>
</PasswordInput.Root>
