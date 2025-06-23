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

// função para abrir página de registro do site
function NovaAba(){
  window.open(
  "registro.html", "_self");
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

// close dropdown menu when the dropdown links are clicked
links.forEach((link) =>
  link.addEventListener("click", () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
    toggleHamburger();
  })
);

// close dropdown menu when you click on the document body
document.documentElement.addEventListener("click", () => {
  closeDropdownMenu();
  setAriaExpandedFalse();
});

// close dropdown when the escape key is pressed
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDropdownMenu();
    setAriaExpandedFalse();
  }
});

// toggle hamburger menu
hamburgerBtn.addEventListener("click", toggleHamburger);

const nome = document.getElementById('nome')
const senha = document.getElementById('senha')
const form = document.getElementById('form')
const erroElemento = document.getElementById('erro')

form.addEventListener('submit', (e) => {
  let messages = []
  if (nome.value === '' || nome.value == null) {
    messages.push('Name is required')
  }

  if (senha.value.length <= 6) {
    messages.push('Senha deve ter mais que 6 caracteres')
  }

  if (senha.value.length >= 20) {
    messages.push('Senha deve ter menos de 20 caracteres')
  }

  if (senha.value === 'senha') {
    messages.push('Sua senha nao pode ser "senha."')
  }

  if (messages.length > 0) {
    e.preventDefault()
    erroElemento.innerText = messages.join(', ')
  }
})