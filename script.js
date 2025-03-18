document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // GSAP Animations (Check if GSAP is loaded)
    if (typeof gsap !== "undefined") {
        gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1 });
        gsap.from(".hero-subtitle", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
        gsap.from(".btn-primary", { opacity: 0, scale: 0.8, duration: 0.8, delay: 1 });
    } else {
        console.error("GSAP library is missing!");
    }

    // Navbar Toggle for Mobile
    const navToggle = document.createElement("div");
    navToggle.classList.add("nav-toggle");
    navToggle.innerHTML = "☰";
    document.querySelector(".navbar").prepend(navToggle);

    navToggle.addEventListener("click", function () {
        document.querySelector(".nav-links").classList.toggle("active");
    });

    // Lottie Animation (Check if Lottie is loaded)
    if (typeof lottie !== "undefined") {
        lottie.loadAnimation({
            container: document.getElementById("lottie-container"), // Ensure this ID exists in HTML
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "animations/data.json" // Make sure data.json exists in the correct path
        });
    } else {
        console.error("Lottie library is missing!");
    }
});
