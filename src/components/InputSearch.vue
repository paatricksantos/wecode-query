<template>
  <form class="form-group" @submit.prevent="handleSubmit">
    <label for="cpnj">CNPJ</label>
    <div class="input-container">
      <input
        type="text"
        id="cpnj"
        class=""
        v-model.trim="cnpj"
        @input="handleChange"
      />
      <button type="submit">Pesquisar</button>
    </div>
    <p v-if="$store.state.error" class="error-message">
      {{ $store.state.error.message }}
    </p>
  </form>
</template>

<script>
import { changePosition, validation } from "../helpers";
export default {
  name: "InputSearch",
  data: function () {
    return {
      cnpj: "",
    };
  },
  methods: {
    async handleSubmit() {
      const formatCNPJ = this.cnpj.replace(/\D+/g, "");

      if (validation(formatCNPJ)) {
        this.$store.state.error = validation(formatCNPJ);
        return;
      }

      const alreadySearch = this.$store.state.listCompanies.find(
        (companie) => companie.cnpj.replace(/\D+/g, "") === formatCNPJ
      );

      if (alreadySearch) {
        const index = this.$store.state.listCompanies.findIndex(
          (companie) => companie.cnpj.replace(/\D+/g, "") === formatCNPJ
        );
        this.$store.state.listCompanies = changePosition(
          this.$store.state.listCompanies,
          index,
          0
        );
        this.cnpj = "";
        return;
      }

      const response = await fetch(
        `https://www.receitaws.com.br/v1/cnpj/${formatCNPJ}`
      );
      const companie = await response.json();
      if (companie.status === "ERROR") {
        this.$store.state.error = this.$store.state.errors.notFound;
        return;
      }

      this.$store.state.listCompanies.unshift(companie);
      localStorage.setItem(
        "@wecode-query:companies",
        JSON.stringify(this.$store.state.listCompanies)
      );
      this.$store.state.error = null;
      this.cnpj = "";
    },
    handleChange() {
      if (this.$store.state.error) {
        this.$store.state.error = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-group label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
}

input {
  width: 100%;
  height: 100%;

  background: #fff;

  outline: none;
  border: 2px solid transparent;
  border-radius: 4px 0px 0px 4px;

  padding: 0 16px;

  font-size: 16px;

  appearance: none;

  transition: border-color 0.2s ease-in;

  &.error {
    border-color: #fc5050;
  }
}

.input-container {
  display: flex;
  height: 48px;
  align-items: center;

  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
}

.input-container {
  button {
    height: 100%;

    background: #5061fc;

    padding: 0 16px;

    color: #fff;
    font-weight: bold;
    font-size: 16px;

    border: 0;
    border-radius: 0 4px 4px 0px;

    transition: background 0.2s ease-in;

    &:hover {
      background: #3346f0;
    }
  }
}

.error-message {
  color: #fc5050;
  font-size: 14px;
  margin-top: 4px;
}
</style>
