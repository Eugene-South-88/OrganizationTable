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

const emit = defineEmits(['close', 'submit']);

const company = ref('');
const phone = ref('');
const director = ref('');

function closeModal() {
  emit('close');
}

function submitForm() {
  emit('submit', { company: company.value, phone: phone.value, director: director.value });
}


const addOrganization =()=>{
  mockOrganizations.value.push(draftOrganization.value)

}
</script>

<template>
  <div :class="$style.overlay" @click.self="closeModal">
    <div :class="$style.modal">
      <h2 :class="$style.title">Добавить организацию</h2>

      <input
          type="text"
          :class="$style.input"
          placeholder="Название"
          v-model="company"
      />
      <input
          type="text"
          :class="$style.input"
          placeholder="Номер телефона"
          v-model="phone"
      />
      <input
          type="text"
          :class="$style.input"
          placeholder="ФИО директора"
          v-model="director"
      />

      <div :class="$style.buttons">
        <button :class="$style.cancel" @click="closeModal">Отмена</button>
        <button :class="$style.ok" @click="submitForm">OK</button>
      </div>
    </div>
  </div>
</template>


<style module lang="scss">
.overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal {
  background: #fff;
  border-radius: 10px;
  padding: 32px 24px;
  box-shadow: 0 2px 8px rgba(60,60,60,0.16);
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.title {
  margin: 0 0 12px 0;
  font-weight: 500;
  text-align: center;
}

.input {
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #d3d3d3;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #6979f8;
    box-shadow: 0 0 8px rgba(105, 121, 248, 0.5);
  }
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 12px;
}

.cancel {
  padding: 6px 24px;
  border-radius: 6px;
  border: 1px solid #6979f8;
  background: #fff;
  color: #6979f8;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: #f0f0ff;
  }
}

.ok {
  padding: 6px 24px;
  border-radius: 6px;
  border: none;
  background: #6979f8;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: #5567d2;
  }
}
</style>
