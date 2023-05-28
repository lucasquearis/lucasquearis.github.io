const pegaParametros = () => {
  const url = window.location.search.replace("?", "");
  const params = url.split("&");
  const formatedParams = {};

  params.forEach((param) => {
    const splitedParams = param.split("=");
    formatedParams[splitedParams[0]] = decodeURIComponent(
      splitedParams[1]
    ).replaceAll("+", " ");
  });

  return formatedParams;
};

const atribuiDadosAPagina = () => {
  const params = pegaParametros();

  Object.keys(params).forEach((key) => {
    const paragraph = document.getElementById(key);
    paragraph.innerText = params[key];
  });
};

atribuiDadosAPagina();
