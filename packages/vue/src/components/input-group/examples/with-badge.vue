<script lang="ts" setup >
import { PhAt } from "@phosphor-icons/vue";
import { Badge } from "@pisagor/vue";
import { InputGroup } from "..";
</script>

<template>
        <InputGroup>
          <InputGroup.Input placeholder="Enter tag" />
          <InputGroup.Addon align="inline-end">
            <Badge pill size="sm" variant="success">
              Available
            </Badge>
          </InputGroup.Addon>
          <InputGroup.Addon align="inline-start">
            <PhAt />
          </InputGroup.Addon>
        </InputGroup>
  
</template>
