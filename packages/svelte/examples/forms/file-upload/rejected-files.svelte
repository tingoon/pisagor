<script lang="ts">
  import { FileUpload } from "@pisagor/svelte";
</script>

<FileUpload
  accept="image/*"
  maxFileSize={1024 * 1024}
  maxFiles={3}
  title="Drop up to 3 images"
  helper="Images only, max 1 MB each."
  classNames={{ dropzone: "w-full" }}
/>
