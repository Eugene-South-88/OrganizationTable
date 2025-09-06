import {ref} from "vue";

export const mockOrganizations = ref([
  {
    id: 99,
    company: 'ООО "Вектор 1"',
    director: 'Иванов И.И.',
    number: '+7 000 123 45 67',
  },
  {
    id: 10,
    company: 'ИП Сидоров С.С.',
    director: 'Сидоров С.С.',
    number: '+7000567899',
  },
  {
    id: 6,
    company: 'ООО "Вектор 2"',
    director: 'Иванов И.И.',
    number: '+7 000 123 45 67',
  },
])
