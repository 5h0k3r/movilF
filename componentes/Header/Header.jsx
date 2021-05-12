import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';

export default function Header(){
    useEffect(() => {
        const mainNavigation = document.querySelector(".main-navigation");
        const overlay = mainNavigation.querySelector(".overlay");
        const toggler = mainNavigation.querySelector(".navbar-toggler");

        const openSideNav = () => mainNavigation.classList.add("active");
        const closeSideNav = () => mainNavigation.classList.remove("active");

        toggler.addEventListener("click", openSideNav);
        overlay.addEventListener("click", closeSideNav);
    });
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top main-navigation">
                <div className="container-fluid">
                    <a className="navbar-brand order-2 order-lg-1 mx-auto mr-lg-3 ml-3 ml-lg-0" href="#home">
                        <Image src={'/images/logo.png'} alt="Logo de e-consulta" className="prueba lazyload" width="136" height="35" />
                    </a>
                    <button className="navbar-toggler " type="button" aria-label="Justify">
                        <span className="navbar-toggler-icon" aria-hidden="true"></span>
                    </button>
                    <div className="overlay d-flex d-lg-none"></div>
                    <div className="order-lg-2 d-lg-flex w-100 sidebar pb-3 pb-lg-0 menu">
                        <ul className="navbar-nav mr-lg-auto mb-2 mb-lg-0">
                            <li className="nav-item link-item">
                                <a className="nav-link px-3 px-lg-2" href="#home">Link</a>
                            </li>
                            <li className="nav-item link-item">
                                <a className="nav-link px-3 px-lg-2" href="#home">Link</a>
                            </li>
                            <li className="nav-item link-item">
                                <a className="nav-link px-3 px-lg-2" href="#home">Link</a>
                            </li>
                            <li className="nav-item link-item">
                                <a className="nav-link px-3 px-lg-2" href="#home">Link</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="scrollmenu">
                    <Link href="/">
                        <a className="active">Inicio</a>
                    </Link>
                    <Link href="/seccion/gobierno">
                        <a>Gobierno</a>
                    </Link>
                    <Link href="/seccion/seguridad">
                        <a>Seguridad</a>
                    </Link>
                    <Link href="/seccion/politica">
                        <a>Política</a>
                    </Link>
                    <Link href="/seccion/nacion">
                        <a>Nación</a>
                    </Link>
                    <Link href="/seccion/salud">
                        <a>Salud</a>
                    </Link>
                    <Link href="/seccion/sociedad">
                        <a>Sociedad</a>
                    </Link>
                    <Link href="/opinion">
                        <a>Opinión</a>
                    </Link>
                    <Link href="/seccion/educacion">
                        <a>Educación</a>
                    </Link>
                    <Link href="/seccion/municipios">
                        <a>Municipios</a>
                    </Link>
                    <Link href="/seccion/ciudad">
                        <a>Ciudad</a>
                    </Link>
                    <Link href="/seccion/saludable">
                        <a>Saludable</a>
                    </Link>
                    <Link href="/seccion/virales">
                        <a>Virales</a>
                    </Link>
                    <Link href="/seccion/espectaculos">
                        <a>Espectáculos</a>
                    </Link>
                    <Link href="/seccion/entretenimiento">
                        <a>Entretenimiento</a>
                    </Link>
                    <Link href="/seccion/deportes">
                        <a>Deportes</a>
                    </Link>
                    <Link href="/seccion/ciencia">
                        <a>Ciencia</a>
                    </Link>
                    <Link href="/seccion/cultura">
                        <a>Cultura</a>
                    </Link>
                    <Link href="/seccion/en-su-tinta">
                        <a>En su Tinta</a>
                    </Link>
                    <Link href="/seccion/elecciones">
                        <a>Elecciones</a>
                    </Link>
                    <Link href="/seccion/mundo">
                        <a>Mundo</a>
                    </Link>
                    <Link href="/seccion/medio-ambiente">
                        <a>Medio Ambiente</a>
                    </Link>
                    <Link href="/seccion/universidades">
                        <a>Universidades</a>
                    </Link>
                    <Link href="/seccion/economia">
                        <a>Economía</a>
                    </Link>
                    <Link href="/seccion/obiturario">
                        <a>Obiturario</a>
                    </Link>
                </div>
            </nav>
        </>
    )
}