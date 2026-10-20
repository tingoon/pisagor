<script lang="ts" setup>
import { PhEye, PhEyeSlash } from "@phosphor-icons/vue";
import { InputGroup, PasswordInput } from "@pisagor/vue";
</script>

<template>
  <PasswordInput.Root class="w-64">
    <PasswordInput.Control as-child>
      <InputGroup>
        <PasswordInput.Input as-child>
          <InputGroup.Input placeholder="Password" />
        </PasswordInput.Input>
        <InputGroup.Addon align="inline-end">
          <PasswordInput.VisibilityTrigger as-child>
            <InputGroup.Button size="icon-xs" variant="ghost">
              <PasswordInput.Indicator>
                <PhEye />
                <template #fallback>
                  <PhEyeSlash />
                </template>
              </PasswordInput.Indicator>
            </InputGroup.Button>
          </PasswordInput.VisibilityTrigger>
        </InputGroup.Addon>
      </InputGroup>
    </PasswordInput.Control>
  </PasswordInput.Root>
</template>
