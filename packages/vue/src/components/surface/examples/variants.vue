<script lang="ts" setup >
import { Surface } from "..";
</script>

<template>
        <div class="grid w-full max-w-3xl gap-2 md:grid-cols-2">
          <Surface bordered class="flex flex-col gap-2" padding="md" variant="default" >
            <h3 class="font-semibold text-sm">Default</h3>
            <p class="text-muted-foreground text-sm">Uses the page background token.</p>
          </Surface>
          <Surface bordered class="flex flex-col gap-2" padding="md" variant="secondary" >
            <h3 class="font-semibold text-sm">Secondary</h3>
            <p class="text-muted-foreground text-sm">First nested emphasis level.</p>
          </Surface>
          <Surface bordered class="flex flex-col gap-2" padding="md" variant="tertiary" >
            <h3 class="font-semibold text-sm">Tertiary</h3>
            <p class="text-muted-foreground text-sm">Second nested emphasis level.</p>
          </Surface>
          <Surface bordered class="flex flex-col gap-2" padding="md" variant="transparent" >
            <h3 class="font-semibold text-sm">Transparent</h3>
            <p class="text-muted-foreground text-sm">No fill — useful for custom backgrounds.</p>
          </Surface>
        </div>
  
</template>
