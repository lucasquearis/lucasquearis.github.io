const montaItensUnicosLocalStorage = () => {
  const itensLocalStorage = new Set([]);

  (JSON.parse(localStorage.getItem("itens-realizados")) || []).forEach(
    (frase) => itensLocalStorage.add(frase)
  );

  return itensLocalStorage;
};

const removeItemLocalStorage = (item) => {
  const itensLocalStorage = montaItensUnicosLocalStorage();
  const conteudoDoItem = item.innerText;
  itensLocalStorage.delete(conteudoDoItem);
  localStorage.setItem(
    "itens-realizados",
    JSON.stringify(Array.from(itensLocalStorage))
  );
};

const adicionaItemLocalStorage = (item) => {
  const itensLocalStorage = montaItensUnicosLocalStorage();
  const conteudoDoItem = item.innerText;
  itensLocalStorage.add(conteudoDoItem);
  localStorage.setItem(
    "itens-realizados",
    JSON.stringify(Array.from(itensLocalStorage))
  );
};

const adicionaEventoParaRiscarTexto = (checkbox) => {
  checkbox.addEventListener("change", function () {
    const li = checkbox.parentNode;
    if (checkbox.checked) {
      li.classList.add("riscado");
      adicionaItemLocalStorage(li);
    } else {
      li.classList.remove("riscado");
      removeItemLocalStorage(li);
    }
  });
};

const verificaERiscaCheckbox = (checkbox) => {
  const itensLocalStorage =
    JSON.parse(localStorage.getItem("itens-realizados")) || [];
  itensLocalStorage.forEach((item) => {
    if (item === checkbox.parentNode.innerText) {
      checkbox.checked = true;
      const li = checkbox.parentNode;
      li.classList.add("riscado");
    }
  });
};

const percorreTodosCheckboxes = () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    verificaERiscaCheckbox(checkbox);
    adicionaEventoParaRiscarTexto(checkbox);
  });
};

const adicionaEventoParaTodosCheckboxes = () => {
  document.addEventListener("DOMContentLoaded", function () {
    percorreTodosCheckboxes();
  });
};

adicionaEventoParaTodosCheckboxes();
