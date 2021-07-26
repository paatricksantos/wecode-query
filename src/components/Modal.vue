<template>
  <teleport to="body">
    <div v-if="$store.state.companyData" class="overlay" @click="closeModal">
      <div class="modal">
        <button class="close-modal">
          <img src="../assets/images/icons/close.svg " alt="close modal" />
        </button>
        <h1>
          {{ companyData.nome }}
        </h1>
        <p><strong>CNPJ: </strong>{{ companyData.cnpj }}</p>
        <p><strong>Nome Fantasia: </strong>{{ companyData.fantasia }}</p>
        <p>
          <strong>Natureza Jurídica: </strong
          >{{ companyData.natureza_juridica }}
        </p>
        <p><strong>Capital Social: </strong>{{ capitalFormat }}</p>
        <p><strong>Porte: </strong>{{ companyData.porte }}</p>
        <p>
          <strong>Atividade principal: </strong
          >{{ companyData.atividade_principal[0].text }}
        </p>
        <hr />
        <p><strong>Cep: </strong>{{ companyData.cep }}</p>
        <p><strong>Logradouro: </strong>{{ companyData.logradouro }}</p>
        <p><strong>Número: </strong>{{ companyData.numero }}</p>
        <p><strong>Bairro: </strong>{{ companyData.bairro }}</p>
        <p><strong>Municpio: </strong>{{ companyData.municipio }}</p>
        <p><strong>UF: </strong>{{ companyData.uf }}</p>
      </div>
    </div>
  </teleport>
</template>

<script>
import { valueFormat } from "../helpers";

export default {
  name: "Modal",
  computed: {
    companyData() {
      return this.$store.state.companyData;
    },
    capitalFormat() {
      return valueFormat(this.companyData.capital_social);
    },
  },

  methods: {
    closeModal(event) {
      const btnCloseModal =
        event.target.classList.value === "close-modal" ? true : false;

      if (event.target === event.currentTarget || btnCloseModal) {
        this.$store.state.companyData = null;
        return;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.overlay {
  width: 100%;
  height: 100%;

  padding: 0px 16px;

  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
}

.close-modal {
  position: absolute;
  top: 0;
  right: 0;

  border: 0;
  background: none;

  img {
    pointer-events: none;
  }
}

.modal {
  position: relative;
  width: 100%;
  max-width: 600px;
  max-height: 80vh;
  overflow: auto;

  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);

  padding: 24px;

  border-radius: 4px;
  color: #222;

  h1 {
    font-size: 1.3rem;
    margin-bottom: 16px;
  }

  p {
    color: #444;
    padding: 4px 0px;

    strong {
      color: #222;
    }
  }
}

hr {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>
