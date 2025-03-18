document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero-subtitle", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from(".btn-primary", { opacity: 0, scale: 0.8, duration: 1, delay: 1 });

    gsap.utils.toArray("section").forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });
});
