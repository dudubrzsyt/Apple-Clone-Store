import React, { useState } from "react";

/**
 * IdApple.tsx — Página para gerenciamento do Apple ID
 * - Minimalista e elegante
 * - Entrar na conta
 * - Criar nova conta
 * - Recuperar senha
 * - Inspirado no site oficial da Apple
 * - Redireciona para /icloud do seu site
 */

const IdApple: React.FC = () => {
  const [mode, setMode] = useState<"login" | "signup" | "forgot">("login");

  // Função para simular login e redirecionar para sua página iCloud
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/icloud"; // redireciona para a rota interna do seu site
  };

  return (
    <main
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", Helvetica, Arial, sans-serif',
        backgroundColor: "#f5f5f7",
        color: "#1d1d1f",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          backgroundColor: "#fff",
          padding: 48,
          borderRadius: 20,
          boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: 32,
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          Apple ID
        </h1>

        {/* ================= LOGIN ================= */}
        {mode === "login" && (
          <>
            <form
              onSubmit={handleLogin}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <input
                type="email"
                placeholder="Seu Apple ID"
                style={{
                  padding: 12,
                  borderRadius: 8,
                  border: "1px solid #ccc",
                  fontSize: 16,
                }}
              />
              <input
                type="password"
                placeholder="Senha"
                style={{
                  padding: 12,
                  borderRadius: 8,
                  border: "1px solid #ccc",
                  fontSize: 16,
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#0071e3",
                  color: "#fff",
                  padding: "12px",
                  borderRadius: 8,
                  border: "none",
                  fontSize: 16,
                  cursor: "pointer",
                }}
              >
                Entrar
              </button>
            </form>
            <div style={{ marginTop: 24, textAlign: "center" }}>
              <button
                onClick={() => setMode("forgot")}
                style={{
                  background: "none",
                  border: "none",
                  color: "#0071e3",
                  cursor: "pointer",
                  marginRight: 16,
                }}
              >
                Esqueceu a senha?
              </button>
              <button
                onClick={() => setMode("signup")}
                style={{
                  background: "none",
                  border: "none",
                  color: "#0071e3",
                  cursor: "pointer",
                }}
              >
                Criar Apple ID
              </button>
            </div>
          </>
        )}

        {/* ================= SIGNUP ================= */}
        {mode === "signup" && (
          <>
            <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <input
                type="text"
                placeholder="Nome completo"
                style={{
                  padding: 12,
                  borderRadius: 8,
                  border: "1px solid #ccc",
                  fontSize: 16,
                }}
              />
              <input
                type="email"
                placeholder="Seu e-mail"
                style={{
                  padding: 12,
                  borderRadius: 8,
                  border: "1px solid #ccc",
                  fontSize: 16,
                }}
              />
              <input
                type="password"
                placeholder="Crie uma senha"
                style={{
                  padding: 12,
                  borderRadius: 8,
                  border: "1px solid #ccc",
                  fontSize: 16,
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#0071e3",
                  color: "#fff",
                  padding: "12px",
                  borderRadius: 8,
                  border: "none",
                  fontSize: 16,
                  cursor: "pointer",
                }}
              >
                Criar Apple ID
              </button>
            </form>
            <div style={{ marginTop: 24, textAlign: "center" }}>
              <button
                onClick={() => setMode("login")}
                style={{
                  background: "none",
                  border: "none",
                  color: "#0071e3",
                  cursor: "pointer",
                }}
              >
                Já tem uma conta? Entrar
              </button>
            </div>
          </>
        )}

        {/* ================= FORGOT PASSWORD ================= */}
        {mode === "forgot" && (
          <>
            <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <input
                type="email"
                placeholder="Digite seu Apple ID"
                style={{
                  padding: 12,
                  borderRadius: 8,
                  border: "1px solid #ccc",
                  fontSize: 16,
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#0071e3",
                  color: "#fff",
                  padding: "12px",
                  borderRadius: 8,
                  border: "none",
                  fontSize: 16,
                  cursor: "pointer",
                }}
              >
                Recuperar senha
              </button>
            </form>
            <div style={{ marginTop: 24, textAlign: "center" }}>
              <button
                onClick={() => setMode("login")}
                style={{
                  background: "none",
                  border: "none",
                  color: "#0071e3",
                  cursor: "pointer",
                }}
              >
                Voltar para login
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default IdApple;