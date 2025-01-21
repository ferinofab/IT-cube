const modal = document.getElementById("modal");
const btn_open = document.getElementById("login");
const close = document.getElementById("close");

const openModal = () => {
    modal.style.display = "block";
};
const closeModal = () => {
    modal.style.display = "none";
};

btn_open.addEventListener("click", openModal);
close.addEventListener("click", closeModal);

