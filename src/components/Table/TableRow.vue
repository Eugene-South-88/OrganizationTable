<script setup>

const props = defineProps({
  columnTemplates:{
    type: String,
    required: false,
  }
})


</script>

<template>
  <div
      :class="$style.tableRow"
      :style="{'grid-template-columns' : props.columnTemplates}"
  >
    <slot></slot>
  </div>
</template>

<style module lang="scss">
.tableRow{
  border-bottom: 2px solid #EEEFF4;
  position: relative;
  display: grid;
  column-gap: 10px;
  align-items: center;
  padding: 0 16px;
  @media screen and (max-width: 767px) {
    display: block;
  }
  &:last-child{
    border-bottom: none;
  }
  &ItemsCenter{
    justify-content: center;
  }
}


</style>
