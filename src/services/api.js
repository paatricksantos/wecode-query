const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://www.receitaws.com.br/v1/cnpj/";

export const api = {
  async get(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: { Origin: "www.receitaws.com.br/" },
    });
    const json = await response.json();
    return json;
  },
};
