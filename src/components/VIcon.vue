<template>
  <svg class="icon" :width="width" :height="height">
    <use :xlink:href="iconPath" />
  </svg>
</template>

<script setup>
import { computed, defineProps } from "vue";
import spriteUrl from "@/assets/sprite.svg";

const props = defineProps({
  iconId: { type: String, required: true },
  width: { type: [Number, String], default: 32 },
  height: { type: [Number, String], default: 32 },
});

const iconPath = computed(() => {
  return `${spriteUrl}#${props.iconId}`;
});
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
</style>
