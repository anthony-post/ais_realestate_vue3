<template>
  <div class="container">
    <RealEstateList />
  </div>
</template>

<script setup>
import RealEstateList from "@/views/RealEstateList.vue";
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.container {
  background: $color-background-main;
  padding: 71px 260px;
}
</style>
