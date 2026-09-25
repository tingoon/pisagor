<script lang="ts" setup>
import { Table } from "..";

const items = [
  { id: "1", item: "Wireless mouse", qty: 2, unitPrice: 29.99 },
  { id: "2", item: "Mechanical keyboard", qty: 1, unitPrice: 149.99 },
  { id: "3", item: "USB-C hub", qty: 3, unitPrice: 45.0 },
];
</script>

<template>
  <Table>
    <Table.Caption class="sr-only"
      >Order summary with footer totals.</Table.Caption
    >
    <Table.Header>
      <Table.Row>
        <Table.Head>Item</Table.Head>
        <Table.Head class="text-right">Qty</Table.Head>
        <Table.Head class="text-right">Unit price</Table.Head>
        <Table.Head class="text-right">Amount</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row v-for="row in items" :key="row.id">
        <Table.Cell>{{ row.item }}</Table.Cell>
        <Table.Cell class="text-right">{{ row.qty }}</Table.Cell>
        <Table.Cell class="text-right"
          >${{ row.unitPrice.toFixed(2) }}</Table.Cell
        >
        <Table.Cell class="text-right">
          ${{ (row.qty * row.unitPrice).toFixed(2) }}
        </Table.Cell>
      </Table.Row>
    </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.Cell colspan="3">Total</Table.Cell>
        <Table.Cell class="text-right">$379.47</Table.Cell>
      </Table.Row>
    </Table.Footer>
  </Table>
</template>
