import React, { useState, useEffect } from "react";
import "../styles/IdApple.css"; // CSS externo para animações e responsividade

const IdApple: React.FC = () => {
  const [mode, setMode] = useState<"login" | "signup" | "forgot">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Verifica se já está logado na sessão
  useEffect(() => {
    const loggedIn = sessionStorage.getItem("appleLoggedIn");
    if (loggedIn === "true") {
      window.location.href = "/icloud";
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simula login
    if (email && password) {
      sessionStorage.setItem("appleLoggedIn", "true");
      window.location.href = "/icloud";
    }
  };

  const handleForgot = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Um e-mail de recuperação foi enviado para " + email);
    setMode("login");
  };

  return (
    <main className="idapple-main">
      <div className={`idapple-card animate ${mode}`}>
        <h1 className="idapple-title">Apple ID</h1>
        <p className="idapple-subtitle">
          Seu Apple ID é a chave para acessar todos os serviços da Apple —
          iCloud, App Store, Apple Music e muito mais.
        </p>

        {/* ================= LOGIN ================= */}
        {mode === "login" && (
          <form onSubmit={handleLogin} className="idapple-form">
            <input
              type="email"
              placeholder="Seu Apple ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="idapple-input"
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="idapple-input"
            />
            <button type="submit" className="idapple-btn-primary">
              Entrar
            </button>
            <div className="idapple-links">
              <button
                type="button"
                onClick={() => setMode("forgot")}
                className="idapple-link"
              >
                Esqueceu a senha?
              </button>
              <button
                type="button"
                onClick={() => setMode("signup")}
                className="idapple-link"
              >
                Criar Apple ID
              </button>
            </div>
          </form>
        )}

        {/* ================= SIGNUP ================= */}
        {mode === "signup" && (
          <form className="idapple-form animate">
            <input type="text" placeholder="Nome completo" className="idapple-input" />
            <input type="email" placeholder="Seu e-mail" className="idapple-input" />
            <input type="password" placeholder="Crie uma senha" className="idapple-input" />
            <button type="submit" className="idapple-btn-primary">
              Criar Apple ID
            </button>
            <div className="idapple-links">
              <button
                type="button"
                onClick={() => setMode("login")}
                className="idapple-link"
              >
                Já tem uma conta? Entrar
              </button>
            </div>
          </form>
        )}

        {/* ================= FORGOT PASSWORD ================= */}
        {mode === "forgot" && (
          <form onSubmit={handleForgot} className="idapple-form animate">
            <input
              type="email"
              placeholder="Digite seu Apple ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="idapple-input"
            />
            <button type="submit" className="idapple-btn-primary">
              Recuperar senha
            </button>
            <div className="idapple-links">
              <button
                type="button"
                onClick={() => setMode("login")}
                className="idapple-link"
              >
                Voltar para login
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
};

export default IdApple;