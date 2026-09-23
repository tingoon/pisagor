<script lang="ts" setup >
import { Button } from "@pisagor/vue";

const handleAction = () => {
  const id = toast.create({
    action: {
      label: "Undo",
      onClick() {
        toast.dismiss(id);
        toast.success({
          id: "action-undone",
          title: "User restored",
          type: "success",
        });
      },
    },
    description: "You can restore the user.",
    id: "action-performed",
    title: "User deleted",
    type: "error",
  });
};
</script>

<template>
  <Button variant="outline" @click="handleAction" >Toast</Button>
</template>
