import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../assets/styles/Home.css";

export default (props) => {
    return (
        <section id="container">
            <header id="logo">
                <img src={logo} alt="Sua Vida na Estrada" />
            </header>
            <h1>
                Tem um comércio localizado em estradas? Cadastre-se e apareça
                nas buscas do Você na Estrada.
            </h1>
            <div className="buttons">
                <div className="cad_button">
                    <Link className="link" to="/register">
                        Cadastrar meu comércio
                    </Link>
                </div>
                <div className="cad_button">
                    <Link className="link" to="/dashboard">
                        Gerenciar meu comércio
                    </Link>
                </div>
            </div>
        </section>
    );
};
