<script setup>
import Button from "./components/ButtonUi.vue";
import Table from "./components/Table/Table.vue";
import AddOrganizationModal from "./components/AddOrganizationModal.vue";
import {computed, ref} from "vue";
import {mockOrganizations} from "./api/mockOrganizations.js";

const modalToggle = ref(false)

const query = ref('')

const queryDirector = computed(()=>{
  let directors = mockOrganizations.value.director;
  let search = query.value

  if (search){
    directors = directors.filter((director) => director.director.indexOf(search) !== -1)
  }

  return directors;
})
</script>

<template>
  <div :class="$style.container">
    <AddOrganizationModal v-if="modalToggle"/>
    <div :class="$style.containerHeader">
      <input
          placeholder="Найти по ФИО..."
          :class="$style.searchInput"
          v-model="query"
      />

      <Button
          text="Добавить"
          :option="'primary'"
          :size="'medium'"
          @click="modalToggle = !modalToggle"
      />
    </div>

    <Table/>
    <div :class="$style.pageToggle">
      <Button
          size="small"
          option="icon"
      >
        <img src="../src/assets/ArrowLeft.svg" alt="Назад">
      </Button>
      <h3>Страница 1</h3>
      <Button
          size="small"
          option="icon"
      >
        <img src="../src/assets/ArrowRight.svg" alt="Вперёд">
      </Button>
    </div>
  </div>
</template>

<style module lang="scss">
@import "assets/style/variables";
.container{
  padding: 10px;
  max-width: 1200px;
  border-radius: 8px;
  margin: 0 auto;
}

.containerHeader{
  display: flex;
  justify-content: space-between;
}

.pageToggle{
  display: flex;
  align-items: center;
  gap: 10px;
  color: $disabled-text;
  justify-content: flex-end;
}

.searchInput{
  border: 1px solid black;
  border-radius: 8px;
  width: 25%;
  padding: 8px 16px;

  @media screen and (max-width: 767px) {
    width: 55%;
  }
}
</style>

