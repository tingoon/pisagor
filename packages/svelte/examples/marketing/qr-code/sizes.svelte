<script lang="ts">
  import { QrCode } from "@pisagor/svelte";
</script>

<div class="flex flex-wrap items-end justify-center gap-2">
  <QrCode
    class="[--qr-code-size:6rem]"
    classNames={{ frame: "rounded-md border" }}
  />
  <QrCode
    class="[--qr-code-size:8rem]"
    classNames={{ frame: "rounded-md border" }}
  />
</div>
