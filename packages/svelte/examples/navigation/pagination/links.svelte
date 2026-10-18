<script lang="ts">
  import { Pagination } from "@pisagor/svelte";
  import { CaretLeftIcon, CaretRightIcon } from "phosphor-svelte";
</script>

<Pagination count={50} pageSize={10}>
  <Pagination.ItemLink page="previous">
    <CaretLeftIcon />
    Previous
  </Pagination.ItemLink>
  <Pagination.Items />
  <Pagination.ItemLink page="next">
    Next
    <CaretRightIcon />
  </Pagination.ItemLink>
</Pagination>
