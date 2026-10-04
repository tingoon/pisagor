<script lang="ts">
import { Button, toast } from "@pisagor/svelte";

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

<Button onClick={handleAction} variant="outline"> Toast </Button>
