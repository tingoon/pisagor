/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid";
import { toast } from "@pisagor/solid/toast";
export function Action() {
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

  return (
    <Button onClick={handleAction} variant="outline">
      Toast
    </Button>
  );
}
