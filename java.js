const sliders = document.querySelectorAll(".slider");

sliders.forEach(slider => {
    let slides = slider.querySelectorAll(".slide");
    let current = 0;

    slides[current].style.display = "flex";

    const nextBtn = slider.querySelector(".next");
    const prevBtn = slider.querySelector(".prev");

    nextBtn.addEventListener("click", () => {
        slides[current].style.display = "none";
        current = (current + 1) % slides.length;
        slides[current].style.display = "flex";
    });

    prevBtn.addEventListener("click", () => {
        slides[current].style.display = "none";
        current = (current - 1 + slides.length) % slides.length;
        slides[current].style.display = "flex";
    });
});