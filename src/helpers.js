export function changePosition(arr, from, to) {
  arr.splice(to, 0, arr.splice(from, 1)[0]);
  return arr;
}

export function validation(value) {
  const regex = new RegExp(
    /[0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2}/
  );
  const ERRORS = {
    required: { message: "Campo obrigatório" },
    invalid: { message: "CPNJ inválido" },
    notFound: { message: "CNPJ não encontrado" },
  };

  if (!value) {
    return ERRORS.required;
  }

  if (!String(value).match(regex)) {
    return ERRORS.invalid;
  }

  return false;
}

export function valueFormat(value) {
  value = Number(value);
  if (!isNaN(value)) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return "";
}
