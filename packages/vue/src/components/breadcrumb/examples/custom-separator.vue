<script setup lang="ts">
import { Breadcrumb } from "..";
</script>

<template>
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="https://example.com/">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator>/</Breadcrumb.Separator>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="https://example.com/">Documentation</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator>/</Breadcrumb.Separator>
            <Breadcrumb.Item>
              <Breadcrumb.Page>Introduction</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
  
</template>
