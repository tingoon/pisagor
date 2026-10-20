<script lang="ts" setup>
import { PhCaretRight } from "@phosphor-icons/vue";
import { Breadcrumb } from "@pisagor/vue";
</script>

<template>
  <Breadcrumb.Root>
    <Breadcrumb.List>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="https://example.com/">Home</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator>
        <PhCaretRight />
      </Breadcrumb.Separator>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="https://example.com/">
          Components
        </Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator>
        <PhCaretRight />
      </Breadcrumb.Separator>
      <Breadcrumb.Item>
        <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb.Root>
</template>
