const criaRequiredNomeProfessor = (e) => {
  const parentLabel = e.target.parentNode;
  const paragraphExistente =
    parentLabel.getElementsByClassName("required-text")[0];

  if (e.target.value.length < 5) {
    if (!paragraphExistente) {
      const criaParagrafo = document.createElement("p");
      criaParagrafo.innerText =
        "Nome do professor deve conter ao menos 5 caracteres";
      criaParagrafo.classList.add("required-text");
      parentLabel.appendChild(criaParagrafo);
    }
  } else if (e.target.value.length > 50) {
    if (!paragraphExistente) {
      const criaParagrafo = document.createElement("p");
      criaParagrafo.innerText =
        "Nome do professor não aceita mais de 50 caracteres";
      criaParagrafo.classList.add("required-text");
      parentLabel.appendChild(criaParagrafo);
    }
  } else {
    if (paragraphExistente) {
      paragraphExistente.remove();
    }
  }
};

const criaRequiredNome = (e) => {
  const parentLabel = e.target.parentNode;
  const paragraphExistente =
    parentLabel.getElementsByClassName("required-text")[0];

  if (e.target.value.length < 5) {
    if (!paragraphExistente) {
      const criaParagrafo = document.createElement("p");
      criaParagrafo.innerText = "Nome deve conter ao menos 5 caracteres";
      criaParagrafo.classList.add("required-text");
      parentLabel.appendChild(criaParagrafo);
    }
  } else if (e.target.value.length > 50) {
    if (!paragraphExistente) {
      const criaParagrafo = document.createElement("p");
      criaParagrafo.innerText = "Nome não aceita mais de 50 caracteres";
      criaParagrafo.classList.add("required-text");
      parentLabel.appendChild(criaParagrafo);
    }
  } else {
    if (paragraphExistente) {
      paragraphExistente.remove();
    }
  }
};

const criaListaRequiredText = (element) => {
  const criaLista = document.createElement("ul");
  criaLista.classList.add("required-text");

  const criaItemQuantidade = document.createElement("li");
  criaItemQuantidade.classList.add("quantidade");
  criaItemQuantidade.innerText = "A senha deve conter de 6 a 20 caracteres";
  criaLista.appendChild(criaItemQuantidade);

  const criaItemLetraMinuscula = document.createElement("li");
  criaItemLetraMinuscula.classList.add("minuscula");
  criaItemLetraMinuscula.innerText =
    "A senha deve conter ao menos uma letra minuscula";
  criaLista.appendChild(criaItemLetraMinuscula);

  const criaItemLetraMaiuscula = document.createElement("li");
  criaItemLetraMaiuscula.classList.add("maiuscula");
  criaItemLetraMaiuscula.innerText =
    "A senha deve conter ao menos uma letra maiúscula";
  criaLista.appendChild(criaItemLetraMaiuscula);

  const criaItemNumero = document.createElement("li");
  criaItemNumero.classList.add("numero");
  criaItemNumero.innerText = "A senha deve conter ao menos um número";
  criaLista.appendChild(criaItemNumero);

  const criaItemCaracterEspecial = document.createElement("li");
  criaItemCaracterEspecial.classList.add("caracter-especial");
  criaItemCaracterEspecial.innerText =
    "A senha deve conter ao menos um caractere especial ex: (, @, !, #, %, )";
  criaLista.appendChild(criaItemCaracterEspecial);

  element.appendChild(criaLista);
};

const handleClass = (className, success) => {
  const itemQuantidade = document.getElementsByClassName(className)[0];

  if (success && itemQuantidade) {
    itemQuantidade.classList.add("success-text");
  } else {
    if (itemQuantidade) {
      itemQuantidade.classList.remove("success-text");
    }
  }
};

const validaCorItensPassword = (value) => {
  const regexMinusculo = /[a-z]/;
  const regexMaiusculo = /[A-Z]/;
  const regexNumero = /\d/;
  const regexCaractereEspecial = /[!@#$%&*()]/;
  const regexQuantidade = /.{6,20}/;

  const temQuantidade = regexQuantidade.test(value);
  handleClass("quantidade", temQuantidade);
  const temMinusculo = regexMinusculo.test(value);
  handleClass("minuscula", temMinusculo);
  const temMaiusculo = regexMaiusculo.test(value);
  handleClass("maiuscula", temMaiusculo);
  const temNumero = regexNumero.test(value);
  handleClass("numero", temNumero);
  const temCaractereEspecial = regexCaractereEspecial.test(value);
  handleClass("caracter-especial", temCaractereEspecial);
};

const criaRequiredPassword = (e) => {
  const parentLabel = e.target.parentNode;
  const paragraphExistente =
    parentLabel.getElementsByClassName("required-text")[0];
  if (!paragraphExistente) {
    criaListaRequiredText(parentLabel);
    validaCorItensPassword(e.target.value);
  } else {
    validaCorItensPassword(e.target.value);
  }
};

const handleBlur = (e) => {
  const parentLabel = e.target.parentNode;
  const paragraphExistente =
    parentLabel.getElementsByClassName("required-text")[0];
  if (paragraphExistente) {
    paragraphExistente.remove();
  }
};

const handleChange = (e) => {
  switch (e.target.name) {
    case "nameProfessor":
      criaRequiredNomeProfessor(e);
      break;
    case "name":
      criaRequiredNome(e);
      break;
    case "password":
      criaRequiredPassword(e);
      break;
    default:
      break;
  }
};

const adicionaEventosInputs = (element) => {
  element.addEventListener("focus", (e) => handleChange(e));
  element.addEventListener("blur", (e) => handleBlur(e));
  element.addEventListener("keyup", (e) => handleChange(e));
};

const adicionaEventosFormularios = () => {
  const nameProfessor = document.getElementsByName("nameProfessor")[0];
  adicionaEventosInputs(nameProfessor);
  const nameAluno = document.getElementsByName("name")[0];
  adicionaEventosInputs(nameAluno);
  const tecnologiaFavorita = document.getElementsByName("tecnologia")[0];
  adicionaEventosInputs(tecnologiaFavorita);
  const notaProjeto = document.getElementsByName("nota")[0];
  adicionaEventosInputs(notaProjeto);
  const comentarioProjeto = document.getElementsByName("comentario")[0];
  adicionaEventosInputs(comentarioProjeto);
  const senhaProfessor = document.getElementsByName("password")[0];
  adicionaEventosInputs(senhaProfessor);
};

adicionaEventosFormularios();
