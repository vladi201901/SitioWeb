const d = document;

const $activador = d.querySelector("#btn-menu");
function mostrar() {
  const $menu = d.querySelector("nav-container-responsive");
  $menu.style.display = "block";
  console.error("error");
}
function mensaje() {
  $activador.addEventListener("click", (e) => {
    mostrar;
    console.log("No funciona");
  });
}
