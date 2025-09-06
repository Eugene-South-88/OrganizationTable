<script setup>
import {computed, useCssModule} from "vue";

const classes = useCssModule()

const props = defineProps({
  text:{
    type: String,
    required: false,
  },
  size:{
    type: String,
    default: 'medium',
    validator(value) {
      return ['small', 'medium', 'large'].includes(value)
    },
  },
  option:{
    type: String,
    default: 'primary',
    validator(value) {
      return ['primary', 'success', 'danger', 'disabled', 'icon'].includes(value)
    },
  },
})


const buttonColor = computed(()=>{
  if( props.option === 'success'){ return classes.success}
  if( props.option === 'danger'){ return classes.danger}
  if( props.option === 'disabled'){ return classes.disabled}
  if( props.option === 'icon'){ return classes.icon}
  return classes.primary
})

const buttonSize = computed(()=>{
  if( props.size === 'small'){ return classes.small}
  if( props.size === 'large'){ return classes.large}
  return classes.medium
})
</script>

<template>
    <button
        :class="[buttonColor, buttonSize, $style.button]"
    >
      <slot v-if="$slots.default"></slot>
      <span v-else>{{props.text}}</span>
    </button>
</template>

<style module lang="scss">
@import '../assets/style/variables.scss';

.button {
  min-height: 40px;
  border-radius: 8px;
  border: none;
  background: $primary-bg;
  text-decoration: none;
  cursor: pointer;
  color: $primary-text;
  transition: .3s;
}

.primary {
  background: $primary-bg;
  color: $primary-text;
  border: 1px solid black;

  &:hover {
    background: $primary-hover-bg;
  }
  &:active {
    background: $primary-active-bg;
  }
}

.success {
  background: $success-bg;
  color: $success-text;

  &:hover {
    background: $success-hover-bg;
  }
  &:active {
    background: $success-active-bg;
  }
}

.icon{
  background: inherit;
  padding: 0;
  border: 1px solid;
}


.danger {
  background: $danger-bg;
  color: $danger-text;

  &:hover {
    background: $danger-hover-bg;
  }
  &:active {
    background: $danger-active-bg;
  }
}

.disabled {
  background-color: $disabled-bg;
  color: $disabled-text;
  cursor: default;
  border: 2px solid black;
  pointer-events: none;
  opacity: 0.7;
  user-select: none;
}

.small {
  width: 10%;
  font-size: 12px;
}
.medium {
  width: 150px;
  font-size: 16px;

  @media screen and (max-width: 767px) {
    width: 30%;
  }
}
.large {
  width: 100%;
  font-size: 20px;

  @media screen and (max-width: 767px) {
    width: 30%;
  }
}

</style>
