<script setup>
import Button from "./ButtonUi.vue";
import {ref} from "vue";
import {mockOrganizations} from "../api/mockOrganizations.js";

const props = defineProps({
  modalToggle:{
    type: Boolean,
    required: false
  }
})

const defaultOrganization = Object.freeze({
  id: '',
  company: '',
  director: '',
  number: '',
})

const draftOrganization = ref({...defaultOrganization})

const addOrganization =()=>{
  mockOrganizations.value.push(draftOrganization.value)

}
</script>

<template>
  <div :class="$style.modalContainer">
    <h2 :class="$style.modalTitle">Добавить организацию</h2>

    <form
        :class="$style.modalForm"
        @submit.prevent="console.log(draftOrganization)"
    >
      <input
          type="text"
          placeholder="Название"
          v-model="draftOrganization.company"
          :class="$style.modalFormInput"
      />

      <input
          placeholder="ФИО директора"
          v-model="draftOrganization.director"
          :class="$style.modalFormInput"
      />

      <input
          placeholder="Номер телефона"
          v-model="draftOrganization.number"
          :class="$style.modalFormInput"
      />

      <div :class="$style.buttonForm">
        <Button
            text="Отмена"
            size="medium"
            :option="'danger'"
        />
        <Button
            text="Ок"
            size="medium"
            :option="'success'"
            @click="addOrganization"
        />
      </div>
    </form>
  </div>
</template>

<style module lang="scss">
.modalContainer{
  border: 1px solid black;
  border-radius: 8px;
  padding: 30px;
  width: 400px;
  margin: 0 auto;
}

.modalTitle{
  text-align: center;
  align-items: center;
  font-size: 24px;
}

.modalForm{
  display: grid;
}

.modalFormInput{
  border-radius: 8px;
  border: 3px solid black;
  font-size: 16px;
  padding: 8px  16px;
  margin-bottom: 20px;
}

.buttonForm{
  display: flex;
  justify-content:space-between;
  margin-top: 30px;
}
</style>
