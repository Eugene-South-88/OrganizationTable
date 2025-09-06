<script setup>
const props = defineProps({
  columnTitle:{
    type: String,
    required: false
  }
})
</script>

<template>
  <div :class="$style.tableColumn">
    <span
        :class="$style.tableColumnTitle"
        v-if="columnTitle"
    >
      {{columnTitle}}:
    </span>

    <slot></slot>
  </div>
</template>

<style module lang="scss">
 .tableColumn{
   padding: 15px 0;
   position: relative;
   border-right: 2px solid #EEEFF4;
   @media screen and (max-width: 767px) {
     border-right: none;
   }
   &Title{
     margin-right: 5px;
     display: none;
     @media screen and (max-width: 767px) {
       display: inline-block;
     }
   }
   &:last-child{
     border: none;
   }
 }
</style>
