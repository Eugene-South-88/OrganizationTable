<script setup>
const props = defineProps({
  placeholder:{
    type: String,
    required: true,
  }
})
</script>

<template>
  <input
      :placeholder="props.placeholder"
      :class="$style.input"
  />
</template>

<style module lang="css">
.input{
  padding: 8px 16px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;
}
</style>
