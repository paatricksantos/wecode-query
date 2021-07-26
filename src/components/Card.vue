<template>
  <div v-if="companie" :class="['card', { fall: fall }]">
    <div className="contact-name">
      <strong>{{ companie.nome }}</strong>
      <small>{{ companie.situacao }}</small>
    </div>
    <div className="info">
      <span>{{ capitalFormat }}</span>
      <span>{{ companie.email }}</span>
      <span>{{ companie.telefone }}</span>
      <span>{{ companie.municipio }} - {{ companie.uf }} </span>
    </div>
    <div class="actions">
      <button @click="openModal">
        <img src="../assets/images/icons/search.svg" alt="view" />
      </button>
      <button @click="removeCompanie(companie.nome)">
        <img src="../assets/images/icons/delete.svg" alt="delete" />
      </button>
    </div>
  </div>
</template>

<script>
import { valueFormat } from "../helpers";
export default {
  name: "Card",
  props: ["companie"],
  data: function () {
    return {
      fall: false,
    };
  },
  methods: {
    openModal() {
      this.$store.state.companyData = this.companie;
      this.$store.state.companyData;
    },
    removeCompanie(name) {
      (this.fall = true),
        setTimeout(() => {
          this.$store.state.listCompanies =
            this.$store.state.listCompanies.filter(
              (companie) => companie.nome !== name
            );
          localStorage.setItem(
            "@wecode-query:companies",
            JSON.stringify(this.$store.state.listCompanies)
          );
        }, 500);
    },
  },
  computed: {
    capitalFormat() {
      return valueFormat(this.companie.capital_social);
    },
  },
};
</script>

<style scoped lang="scss">
.fall {
  transform: translateY(8rem) rotateZ(20deg);
  opacity: 0;
}

.card {
  margin-top: 16px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  padding: 16px;
  border-radius: 4px;

  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 1fr;

  transition: all 0.5s ease;
}

.info {
  span {
    display: block;
    font-size: 14px;
    color: #bcbcbc;
    margin: 4px 0;
  }
}

.contact-name {
  grid-column: 1/ 3;
  grid-row: 1 / 3;

  display: flex;
  align-items: center;
  margin-bottom: 8px;

  small {
    background: #e0e3ff;
    color: #5061fc;
    font-weight: bold;
    text-transform: uppercase;

    padding: 4px;
    border-radius: 4px;
    margin-left: 16px;
  }
}

.actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 4px;

  button {
    background: none;
    border: 0;
  }
}

@media (max-width: 420px) {
  .card {
    font-size: 14px;
  }
  .contact-name {
    justify-content: space-between;
    margin-left: 0;
  }
}
</style>
