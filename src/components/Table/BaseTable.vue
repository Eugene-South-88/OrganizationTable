<script setup>

const props = defineProps({
  head:{
    type: Array,
    required: false,
  },
  columnTemplates:{
    type: String,
    required: false,
  }
})

const emit = defineEmits(['sorting'])

const clickOnHead = (name) =>{
  emit('sorting', name.toLowerCase())
}
</script>

<template>
  <div :class="$style.tableWrapper">
    <div :class="$style.table">
      <div :class="$style.tableHead"
           :style="{'grid-template-columns' : props.columnTemplates}"
      >
        <div
            v-for="(element, i) in props.head"
            :class="$style.tableHeadName"
            @click="clickOnHead(element.value)"
        >
          {{element.label}}
        </div>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<style module lang="scss">
.table{
  background-color: white;
  width: 100%;
  margin-bottom: 40px;
  margin-top: 15px;
  border: 2px solid #EEEFF4;
  border-radius: 4px;
  &Wrapper {
    display: flex;
    justify-content: center;
  }
  &Head{
    padding: 5px 16px;
    display: grid;
    column-gap: 10px;
    align-items: center;
    border-bottom: 2px solid #EEEFF4;
    background: white;

    &Name{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #999;
      cursor: pointer;
      border-right: 2px solid #EEEFF4;

    }
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
}

</style>
