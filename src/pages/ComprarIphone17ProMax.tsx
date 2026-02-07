import React from "react";
import "../styles/Comprar.css"; // caminho corrigido

const ComprarIphone17ProMax: React.FC = () => {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Comprar iPhone 17 Pro Max</h1>
      <p>Selecione cor, capacidade e finalize sua compra.</p>

      <div style={{ marginTop: 20 }}>
        <button style={{ padding: "12px 24px", background: "#0071e3", color: "#fff", border: "none", borderRadius: 8 }}>
          Finalizar Compra
        </button>
      </div>
    </main>
  );
};

export default ComprarIphone17ProMax;