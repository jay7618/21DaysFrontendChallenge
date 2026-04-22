let hm = document.querySelector(".hamburger-btn");
let menu = document.querySelector(".menu");
let isOpen = false;

hm.addEventListener("click", () => {
    if (!isOpen) {
        menu.style.display = "block";
        setTimeout(() => {
            menu.classList.add("show"); 
        }, 10);
        hm.innerHTML = `<i class="ri-close-large-line"></i>`;
        isOpen = true;
    } else {
        menu.classList.remove("show"); 
        setTimeout(() => {
            menu.style.display = "none";
        }, 300);
        hm.innerHTML = `<i class="ri-menu-fill"></i>`;
        isOpen = false;
    }
});