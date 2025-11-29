let btnSidebar = document.getElementById("header__btn");
let sidebar = document.getElementById("sidebar");

btnSidebar.addEventListener('click', () => {
  if (sidebar.style.display === "none" || sidebar.style.display === "") {
    sidebar.style.display = "block";
    btnSidebar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    sidebar.style.display = "none";
    btnSidebar.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});

