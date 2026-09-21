document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       LUCIDE ICONS
    ===================================================== */

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }



    /* =====================================================
       NAVBAR
    ===================================================== */

    const navbar =
        document.getElementById("navbar");


    function updateNavbar() {

        if (!navbar) return;

        navbar.classList.toggle(
            "is-scrolled",
            window.scrollY > 30
        );

    }


    updateNavbar();


    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );



    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menu-toggle");

    const mobileMenu =
        document.getElementById("mobile-menu");


    if (menuToggle && mobileMenu) {


        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    mobileMenu.classList.toggle("open");


                menuToggle.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );


                menuToggle.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Tutup menu navigasi"
                        : "Buka menu navigasi"
                );


                menuToggle.innerHTML =
                    isOpen
                        ? '<i data-lucide="x"></i>'
                        : '<i data-lucide="menu"></i>';


                if (
                    typeof lucide !== "undefined"
                ) {

                    lucide.createIcons();

                }

            }
        );


        document
            .querySelectorAll(".mobile-anchor")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        mobileMenu.classList.remove(
                            "open"
                        );


                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );


                        menuToggle.setAttribute(
                            "aria-label",
                            "Buka menu navigasi"
                        );


                        menuToggle.innerHTML =
                            '<i data-lucide="menu"></i>';


                        if (
                            typeof lucide !== "undefined"
                        ) {

                            lucide.createIcons();

                        }

                    }
                );

            });

    }



    /* =====================================================
       WHATSAPP PRODUCT ORDER
    ===================================================== */

    const whatsappNumber =
        "6281997163058";


    document
        .querySelectorAll("[data-product]")
        .forEach(link => {


            const product =
                link.dataset.product;


            const message =
                `Halo FLORIS JAKSEL, saya ingin memesan ${product}. Mohon informasi harga dan ketersediaannya.`;


            link.href =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


            link.target = "_blank";

        });



    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const reduceMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (
        !reduceMotion &&
        "IntersectionObserver" in window
    ) {


        const observer =
            new IntersectionObserver(
                entries => {


                    entries.forEach(entry => {


                        if (
                            entry.isIntersecting
                        ) {


                            entry.target.classList.add(
                                "show"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        document
            .querySelectorAll(".reveal")
            .forEach(element => {

                observer.observe(element);

            });


    } else {


        document
            .querySelectorAll(".reveal")
            .forEach(element => {

                element.classList.add(
                    "show"
                );

            });

    }



    /* =====================================================
       ANCHOR SCROLL
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {


            anchor.addEventListener(
                "click",
                event => {


                    const targetId =
                        anchor.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior:
                            reduceMotion
                                ? "auto"
                                : "smooth",

                        block: "start"
                    });

                }
            );

        });


});