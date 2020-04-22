import React from "react";
import "./styles.css";
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/fi";

export default function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Logo" />

        <form>
          <h1>Faça seu Login</h1>
          <input placeholder="Sua ID"></input>
          <button className="button" type="submit">
            Entrars
          </button>
          <a href="/register">
            <FiLogIn size={16} color="#E02041" /> Não tenho cadastro
          </a>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
