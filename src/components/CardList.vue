<template>
  <template v-for="companie in $store.state.listCompanies" :key="companie.nome">
    <Card :companie="companie" />
  </template>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "CardList",
  components: { Card },
};
</script>

<style></style>
