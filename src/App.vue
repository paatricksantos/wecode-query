<template>
  <header>
    <h1>WeCode-<span>Query</span></h1>
  </header>
  <div :class="['container', modalOpen]">
    <InputSearch />
    <CardList />
  </div>
  <Modal />
</template>

<script>
import InputSearch from "./components/InputSearch.vue";
import CardList from "./components/CardList.vue";
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  components: { InputSearch, CardList, Modal },
  computed: {
    modalOpen() {
      return this.$store.state.companyData ? "modal-open" : "";
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

body {
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: #222;
  background: #f6f5fc;
}

button {
  cursor: pointer;
}

header {
  display: flex;
  justify-content: center;
  margin: 48px 0px;

  h1 span {
    color: #5061fc;
  }
}

.container {
  width: 100%;
  max-width: 700px;

  margin: 8px auto;
  padding: 0 16px;
}

.modal-open {
  height: 60vh;
  overflow: hidden;
}
</style>
