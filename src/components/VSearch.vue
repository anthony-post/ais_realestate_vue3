<template>
  <div class="search">
    <label :for="name">{{ label }}</label>
    <input
      :name="name"
      :placeholder="placeholder"
      :title="title"
      :value="inputValue"
      type="text"
      autocomplete="off"
      class="input search__input"
      @input="$emit('update:inputValue', $event.target.value)"
    />
    <v-icon
      icon-id="icon-search"
      width="16"
      height="16"
      class="search__icon"
    ></v-icon>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import VIcon from "@/components/VIcon.vue";

defineProps({
  label: { type: String, default: "" },
  type: { type: String, default: "" },
  name: { type: String, default: "" },
  placeholder: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  inputValue: [String, Number],
});
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.search {
  position: relative;

  &__input {
    width: 100%;
    padding: 10px 0;
    text-indent: 100px;
  }

  &__icon {
    position: absolute;
    top: 11px;
    left: 30px;
  }
}

input {
  font-family: $font;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: $color-grey;
  background: transparent;
  border: 1px solid $color-border-input;
  box-sizing: border-box;
}

// .search__icon {
//   position: absolute;
//   left: 5px;
//   top: 3px;
//   @media #{$media} and (min-width: $tablet-min) and (max-width: $tablet-max) {
//     left: 25px;
//     top: 13px;
//   }
//   @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
//     left: 25px;
//     top: 13px;
//   }
// }
</style>
