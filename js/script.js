const shareBtn = document.querySelector(".shareBtn");
const popup = document.querySelector(".sharePopup");

shareBtn.addEventListener("click", () => {
    popup.classList.toggle("active");
    shareBtn.classList.toggle("active");
});