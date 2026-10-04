<script lang="ts">
import { Pagination } from "@pisagor/svelte";
import CaretLeftIcon from "phosphor-svelte/lib/CaretLeftIcon";
import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";
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
