/* Código para funcionámento do menu de navegação, e menu hamburguer */
const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");
const links = document.querySelectorAll(".dropdown a");


function setAriaExpandedFalse() {
  dropdownBtn.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

function closeDropdownMenu() {
  dropdown.forEach((drop) => {
    drop.classList.remove("active");
    drop.addEventListener("click", (e) => e.stopPropagation());
  });
}

function toggleHamburger() {
  navMenu.classList.toggle("show");
}

dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownIndex = e.currentTarget.dataset.dropdown;
    const dropdownElement = document.getElementById(dropdownIndex);

    dropdownElement.classList.toggle("active");
    dropdown.forEach((drop) => {
      if (drop.id !== btn.dataset["dropdown"]) {
        drop.classList.remove("active");
      }
    });
    e.stopPropagation();
    btn.setAttribute(
      "aria-expanded",
      btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
  });
});

// fecha o menu expandido quando algum link é clicado
links.forEach((link) =>
  link.addEventListener("click", () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
    toggleHamburger();
  })
);

// fecha o menu expandido quando o corpo do documento é clicado
document.documentElement.addEventListener("click", () => {
  closeDropdownMenu();
  setAriaExpandedFalse();
});

// fecha o menu expandido quando o ESC é pressionado
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDropdownMenu();
    setAriaExpandedFalse();
  }
});

// ativa menu hamburguer
hamburgerBtn.addEventListener("click", toggleHamburger);

document.getElementById('contatoForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let nome = document.getElementById('nome').value.trim();
  let email = document.getElementById('email').value.trim();
  let mensagem = document.getElementById('mensagem').value.trim();

  let erroNome = document.getElementById('erroNome');
  let erroEmail = document.getElementById('erroEmail');
  let erroMensagem = document.getElementById('erroMensagem');

  let valido = true;

  // limpa erros anteriores
  erroNome.textContent = '';
  erroEmail.textContent = '';
  erroMensagem.textContent = '';

  // validação do nome
  if (nome === '') {
    erroNome.textContent = 'Por favor, preencha o nome.';
    valido = false;
  }

  // validação do email
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    erroEmail.textContent = 'Por favor, preencha o email.';
    valido = false;
  } else if (!regexEmail.test(email)) {
    erroEmail.textContent = 'Email inválido.';
    valido = false;
  }

  // validação da mensagem
  if (mensagem === '') {
    erroMensagem.textContent = 'Por favor, escreva uma mensagem.';
    valido = false;
  }

  // se tudo estiver ok
  if (valido) {
    alert('Formulário enviado com sucesso!');
    this.reset();
  }
});


