<script lang="ts">
  import { Pagination } from "@pisagor/svelte";

  const getHref = (page: number) => `/blog/page/${page}`;
</script>

<Pagination count={50} pageSize={10}>
  <Pagination.ItemLink {getHref} page="previous">Previous</Pagination.ItemLink>
  <Pagination.ItemLink {getHref} page="next">Next</Pagination.ItemLink>
</Pagination>
