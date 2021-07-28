const BASE_URL = "https://www.receitaws.com.br/v1/cnpj/";
//

export const api = {
  async get(endpoint) {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/${BASE_URL}${endpoint}`,
      {
        method: "get",
        headers: {
          Authorization: "Bearer" + process.env.VUE_APP_API_KEY,
          Origin: "https://www.receitaws.com.br",
        },
      }
    );
    const json = await response.json();
    return json;
  },
};
