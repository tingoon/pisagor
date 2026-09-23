<script lang="ts" setup >
import { Button } from "@pisagor/vue";
import { Toolbar } from "..";
</script>

<template>
        <Toolbar.Root>
          <Toolbar.Heading>
            <Toolbar.Title>Projects</Toolbar.Title>
            <Toolbar.Description>Manage deployments and monitor activity.</Toolbar.Description>
          </Toolbar.Heading>
          <Toolbar.Actions>
            <Button variant="outline">Import</Button>
            <Button>New project</Button>
          </Toolbar.Actions>
        </Toolbar.Root>
  
</template>
