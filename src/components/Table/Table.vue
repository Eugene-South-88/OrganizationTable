<script setup>
import BaseTable from "./BaseTable.vue";
import TableRow from "./TableRow.vue";
import {mockOrganizations} from "../../api/mockOrganizations.js";
import TableColumn from "./TableColumn.vue";
import Button from "../ButtonUi.vue";
import {computed, ref} from "vue";

const tableHeads = [
  {
    value: 'company',
    label: 'Название'
  },
  {
    value: 'director',
    label: 'ФИО директора'
  },
  {
    value: 'number',
    label: 'Номер телефона'
  },
  {
    value: '',
    label: ''
  },
];

const tableSizeColumns = '1fr 1fr 1fr 50px';

const sortField = ref('id')
const typeSort = ref('asc')

const organizationsSorting = computed(()=>{
  return [...mockOrganizations.value].sort((a, b)=>{
    let modifier = 1;
    if (typeSort.value === 'desc') modifier = -1;
    if (a[sortField.value] < b[sortField.value]) return -1 * modifier;
    if (a[sortField.value] > b[sortField.value]) return modifier;
    return 0
  })
})

const setSort = (name) =>{
  console.log(name)
  if (sortField.value === name) {
    if (typeSort.value === 'asc'){
      typeSort.value = 'desc'
    } else{
      typeSort.value = 'asc'
    }
  } else{
    sortField.value = name
  }
}
</script>

<template>
  <BaseTable
      :head="tableHeads"
      :columnTemplates="tableSizeColumns"
      @sorting="setSort"
  >
    <TableRow
      v-for="organization in organizationsSorting"
      :key="organization.id"
      :column-templates="tableSizeColumns">
      <TableColumn :column-title="tableHeads[0].label">
        {{organization.company}}
      </TableColumn>

      <TableColumn :column-title="tableHeads[1].label">
        {{organization.director}}
      </TableColumn>

      <TableColumn :column-title="tableHeads[2].label">
        {{organization.number}}
      </TableColumn>

      <TableColumn>
        <Button
            text="X"
            size="large"
            option="danger"
        />
      </TableColumn>
    </TableRow>
  </BaseTable>
</template>

<style module lang="scss">

</style>
