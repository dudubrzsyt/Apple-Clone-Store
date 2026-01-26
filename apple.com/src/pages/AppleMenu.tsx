import React from "react";
import { Link } from "react-router-dom";
import "../styles/AppleMenu.css";

export default function AppleMenu() {
  return (
   <main className="apple-menu">
  <h1>Menu Apple</h1>

  <section className="apple-ads">
    <div className="ad-card">
      <img src="/https://i.zst.com.br/thumbs/12/2c/3a/-1584066151.jpg" alt="iPhone 17 Pro" />
      <h2>iPhone 17 Pro</h2>
      <p>O futuro chegou. Mais rápido, mais inteligente.</p>
      <Link to="/iphone" className="btn-comprar">Comprar</Link>
    </div>

    <div className="ad-card">
      <img src="/images/mac.jpg" alt="MacBook Pro" />
      <h2>MacBook Pro</h2>
      <p>Potência para tudo que você imagina.</p>
      <Link to="/mac" className="btn-comprar">Comprar</Link>
    </div>

    <div className="ad-card">
      <img src="/images/ipad.jpg" alt="iPad Air" />
      <h2>iPad Air</h2>
      <p>Versátil, leve e poderoso para estudar e criar.</p>
      <Link to="/ipad" className="btn-comprar">Comprar</Link>
    </div>
  </section>
</main>
  );
}