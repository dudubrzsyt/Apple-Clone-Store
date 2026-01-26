import React from "react";

const ComprarMacbookM4: React.FC = () => {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Comprar MacBook Pro M4</h1>
      <p>Selecione configuração, memória e finalize sua compra.</p>

      <div style={{ marginTop: 20 }}>
        <button style={{ padding: "12px 24px", background: "#0071e3", color: "#fff", border: "none", borderRadius: 8 }}>
          Finalizar Compra
        </button>
      </div>
    </main>
  );
};

export default ComprarMacbookM4;