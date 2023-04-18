import React from 'react';
import './dashboard.css';

import camaleon from "../../assets/logo-your-event.svg";

export const Dashboard = () => {

    // const html = document.documentElement;
    // const body = document.body;
    // const menuLinks = document.querySelectorAll(".admin-menu a");
    // const collapseBtn = document.querySelector(".admin-menu .collapse-btn");
    // const toggleMobileMenu = document.querySelector(".toggle-mob-menu");
    // const switchInput = document.querySelector(".switch input");
    // const switchLabel = document.querySelector(".switch label");
    // const switchLabelText = switchLabel.querySelector("span:last-child");
    // const collapsedClass = "collapsed";
    // const lightModeClass = "light-mode";

    /*TOGGLE HEADER STATE*/
    // collapseBtn.addEventListener("click", function () {
    //     body.classList.toggle(collapsedClass);
    //     this.getAttribute("aria-expanded") == "true"
    //         ? this.setAttribute("aria-expanded", "false")
    //         : this.setAttribute("aria-expanded", "true");
    //     this.getAttribute("aria-label") == "collapse menu"
    //         ? this.setAttribute("aria-label", "expand menu")
    //         : this.setAttribute("aria-label", "collapse menu");
    // });
    // const collapsed = () => {
    //     body.classList.toggle(collapsedClass);
    //     this.getAttribute("aria-expanded") == "true"
    //         ? this.setAttribute("aria-expanded", "false")
    //         : this.setAttribute("aria-expanded", "true");
    //     this.getAttribute("aria-label") == "collapse menu"
    //         ? this.setAttribute("aria-label", "expand menu")
    //         : this.setAttribute("aria-label", "collapse menu");
    // };

    // /*TOGGLE MOBILE MENU*/
    // toggleMobileMenu.addEventListener("click", function () {
    //     body.classList.toggle("mob-menu-opened");
    //     this.getAttribute("aria-expanded") == "true"
    //         ? this.setAttribute("aria-expanded", "false")
    //         : this.setAttribute("aria-expanded", "true");
    //     this.getAttribute("aria-label") == "open menu"
    //         ? this.setAttribute("aria-label", "close menu")
    //         : this.setAttribute("aria-label", "open menu");
    // });

    // /*SHOW TOOLTIP ON MENU LINK HOVER*/
    // for (const link of menuLinks) {
    //     link.addEventListener("mouseenter", function () {
    //         if (
    //         body.classList.contains(collapsedClass) &&
    //         window.matchMedia("(min-width: 768px)").matches
    //         ) {
    //         const tooltip = this.querySelector("span").textContent;
    //         this.setAttribute("title", tooltip);
    //         } else {
    //         this.removeAttribute("title");
    //         }
    //     });
    // }

    // /*TOGGLE LIGHT/DARK MODE*/
    // if (localStorage.getItem("dark-mode") === "false") {
    //     html.classList.add(lightModeClass);
    //     switchInput.checked = false;
    //     // switchLabelText.textContent = "Light";
    // }

    // switchInput.addEventListener("input", function () {
    //     html.classList.toggle(lightModeClass);
    //     if (html.classList.contains(lightModeClass)) {
    //         // switchLabelText.textContent = "Light";
    //         localStorage.setItem("dark-mode", "false");
    //     } else {
    //         // switchLabelText.textContent = "Dark";
    //         localStorage.setItem("dark-mode", "true");
    //     }
    // });

    return (
        <>

            {/* HEADER */}
            <header className="page-header">
                <img src={camaleon} alt="camaleon" />
                <nav>
                    <button className="toggle-mob-menu" aria-expanded="false" aria-label="open menu">
                        <svg width="20" height="20" aria-hidden="true"><use href="#down"></use></svg>
                    </button>
                    <ul className="admin-menu">
                    <li className="menu-heading">
                        <h3>Admin</h3>
                    </li>
                    <li>
                        <a href="#0">
                        <svg>
                            <use href="#pages"></use>
                        </svg>
                        <span>Eventos</span>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                        <svg>
                            <use href="#users"></use>
                        </svg>
                        <span>Usuarios</span>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                        <svg>
                            <use href="#trends"></use>
                        </svg>
                        <span>Trends</span>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                        <svg>
                            <use href="#collection"></use>
                        </svg>
                        <span>Colecciones</span>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                        <svg>
                            <use href="#comments"></use>
                        </svg>
                        <span>Comentarios</span>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                        <svg>
                            <use href="#appearance"></use>
                        </svg>
                        <span>Apariencia</span>
                        </a>
                    </li>
                    <li className="menu-heading">
                        <h3>OPCIONES</h3>
                    </li>
                    <li>
                        <a href="#0">
                        <svg>
                            <use href="#settings"></use>
                        </svg>
                        <span>Herramientas</span>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                        <svg>
                            <use href="#options"></use>
                        </svg>
                        <span>Opciones </span>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                        <svg>
                            <use href="#charts"></use>
                        </svg>
                        <span>Estadisticas</span>
                        </a>
                    </li>
                    {/* <li>
                        <div className="switch">
                        <input type="checkbox" id="mode" checked />
                        <label htmlFor="mode">
                            <span></span>
                            <span>Dark</span>
                        </label>
                        </div>
                        <button className="collapse-btn" onClick={ collapsed } aria-expanded="true" aria-label="collapse menu">
                            <svg aria-hidden="true">
                                <use href="#collapse"></use>
                            </svg>
                            <span>Contraer</span>
                        </button>
                    </li> */}
                    </ul>
                </nav>
            </header>
            {/* HEADER */}

            <section className="page-content">

                <section className="search-and-user">
                    <form>
                        <input type="search" placeholder="Busca lo que necesites..." />
                        <button type="submit" aria-label="submit form">
                            <svg aria-hidden="true">
                            <use href="#search"></use>
                            </svg>
                        </button>
                    </form>
                    <div className="admin-profile">
                        <span className="greeting">Nombre user</span>
                        <div className="notifications">
                            <span className="badge">1</span>
                            <svg><use href="#users"></use></svg>
                        </div>
                    </div>
                </section>

                <section className="grid">
                    <article></article>
                    <article></article>
                    <article></article>
                    <article></article>
                    <article></article>
                    <article></article>
                    <article></article>
                    <article></article>
                </section>

                <footer className="page-footer">
                    <span>YourEvent </span>
                    {/* </a> */}
                </footer>

            </section>

        </>
    )

}