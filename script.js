const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("open");
    const opened = navLinks.classList.contains("open");
    menuButton.innerHTML = opened ? "✕" : "☰";
    menuButton.setAttribute("aria-expanded", opened);
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
            navLinks.classList.remove("open");
            menuButton.innerHTML = "☰";
            menuButton.setAttribute("aria-expanded", "false");
        }
    });
});
