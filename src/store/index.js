import { createStore } from "vuex";

export default createStore({
  state: {
    error: null,
    listCompanies:
      JSON.parse(localStorage.getItem("@wecode-query:companies")) || [],
    companyData: null,
    errors: {
      required: { message: "Campo obrigatório" },
      invalid: { message: "CPNJ inválido" },
      notFound: { message: "CNPJ não encontrado" },
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
