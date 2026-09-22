<script setup lang="ts">
import { Pagination } from "..";
</script>

<template>
        <Pagination :count="50" :page-size="10">
          <Pagination.PrevTrigger />
          <Pagination.Items />
          <Pagination.NextTrigger />
        </Pagination>
  
</template>
