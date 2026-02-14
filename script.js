const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const items = document.querySelectorAll(".portfolio-item img");
const closeBtn = document.querySelector(".close");

items.forEach(item => {
    item.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}

modal.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}
