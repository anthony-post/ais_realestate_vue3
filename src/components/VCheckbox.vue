<template>
  <label class="checkbox-wrp">
    <input
      type="checkbox"
      v-model="model"
      :value="value"
      @click="updateCheckAll"
    />
    {{ label }}
  </label>
</template>

<script setup>
import { computed, defineEmits, defineProps } from "vue";
const props = defineProps({
  modelValue: { type: [Array, Boolean] },
  value: { type: [Boolean, Object] },
  label: { type: String },
});
const emit = defineEmits(["update:modelValue", "updateCheckall"]);
const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const updateCheckAll = () => {
  emit("updateCheckall");
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.checkbox-wrp {
  display: flex;
  gap: 5px;
}
</style>
