import React, { useState } from "react";
import "../styles/Menu.css";

const MenuExemplo: React.FC = () => {
  const [menuAberto, setMenuAberto] = useState<null | "comprar" | "saiba">(null);

  return (
    <div>
      {/* Botões principais */}
      <div className="cta-container">
        <button onClick={() => setMenuAberto("comprar")} className="btn-comprar">
          Comprar
        </button>
        <button onClick={() => setMenuAberto("saiba")} className="btn-saiba">
          Saiba mais
        </button>
      </div>

      {/* Menu escondido */}
      {menuAberto && (
        <div className="menu-overlay">
          <div className="menu-content">
            <h2>{menuAberto === "comprar" ? "Comprar iPhone" : "Saiba mais"}</h2>

            {menuAberto === "comprar" ? (
              <ul className="menu-list">
                <li>📱 iPhone 17 Pro Max — US$ 1.199</li>
                <li>📱 iPhone 17 Pro — US$ 1.099</li>
                <li>📱 iPhone 16 Pro Max — US$ 1.099</li>
                <li>📱 iPhone 16 Pro — US$ 999</li>
              </ul>
            ) : (
              <p>
                Descubra todos os detalhes sobre desempenho, câmeras, bateria e design dos novos iPhones.
              </p>
            )}

            <button onClick={() => setMenuAberto(null)} className="btn-fechar">
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuExemplo;