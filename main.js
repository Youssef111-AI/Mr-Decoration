function initParticles() {
    // تهيئة Particles.js
    particlesJS("particles-js", {
        particles: {
            number: { value: 150, density: { enable: true, value_area: 700 } },
            color: { value: "#CCFF00" },
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 4 },
            },
            opacity: {
                value: 0.7,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                },
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#CCFF00",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 389.79,
                    line_linked: { opacity: 1 },
                },
                bubble: {
                    distance: 515.48,
                    size: 95.9,
                    duration: 3.9,
                    opacity: 8,
                    speed: 3,
                },
                repulse: { distance: 70, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
            },
        },
        retina_detect: false,
    });

    // تفعيل stats.js لعرض الأداء وعدد الجسيمات
    var count_particles, stats, update;
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);

    count_particles = document.querySelector(".js-count-particles");

    update = function () {
        stats.begin();
        stats.end();
        if (
            window.pJSDom[0].pJS.particles &&
            window.pJSDom[0].pJS.particles.array
        ) {
            count_particles.innerText =
                window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
}

// 🧠 تشغيل الدالة بعد تحميل الصفحة
window.addEventListener("load", initParticles);
