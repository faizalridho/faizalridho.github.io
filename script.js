window.addEventListener("scroll", function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (window.scrollY > 500) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
});

document.getElementById("scrollToTopBtn").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
