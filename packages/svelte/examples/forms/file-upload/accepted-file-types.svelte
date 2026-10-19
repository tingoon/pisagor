<script lang="ts">
  import { FileUpload } from "@pisagor/svelte";
</script>

<FileUpload
  accept="image/png,image/jpeg"
  title="Drop your images here"
  helper="Only PNG and JPEG formats are allowed."
  classNames={{ dropzone: "w-full" }}
/>
