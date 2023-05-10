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

  @media #{$media} and (min-width: $tablet-min) and (max-width: $tablet-max) {
    padding: 100px;
  }

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    padding: 35px 15px;
  }
}
</style>
