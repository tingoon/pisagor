<script setup lang="ts">
import { Input, Surface } from "@pisagor/vue";
import { Editable } from "..";
</script>

<template>
        <Surface bordered padding="md" variant="default">
          <div class="flex flex-col gap-2">
            <Editable default-value="Primary">
              <Editable.Area>
                <Editable.Input as-child>
                  <Input class="w-full" />
                </Editable.Input>
                <Editable.Preview control-variant="primary" />
              </Editable.Area>
            </Editable>
            <Editable default-value="Secondary">
              <Editable.Area>
                <Editable.Input as-child>
                  <Input class="w-full" />
                </Editable.Input>
                <Editable.Preview control-variant="secondary" />
              </Editable.Area>
            </Editable>
          </div>
        </Surface>
  
</template>
