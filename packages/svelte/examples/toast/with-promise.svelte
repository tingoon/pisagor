<script lang="ts">
import { Button, toast } from "@pisagor/svelte";

function runPromise() {
  toast.promise<{ name: string }>(
    () =>
      new Promise((resolve) =>
        setTimeout(() => resolve({ name: "Event" }), 2000),
      ),
    {
      error: {
        description:
          "Something went wrong. Check your connection and try again.",
        title: "Error generating event",
      },
      loading: {
        description: "Please wait while we generate the event.",
        title: "Generating event...",
      },
      success: (data) => ({
        description: `${data.name} has been created`,
        title: "Event generated",
      }),
    },
  );
}
</script>

<Button onClick={runPromise} variant="outline">Run Promise</Button>
