function abrirMenu() {
  //   const menuMobile = document.getElementById("menu-mobile");

  //   if (menuMobile.className === "active") {
  //     menuMobile.className = "menu-mobile";
  //   } else {
  //     menuMobile.className = "active";
  //   }

  let menu = document.querySelector(".menu-mobile");

  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
}
