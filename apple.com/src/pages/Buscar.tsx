import React from "react";
import "../styles/Buscar.css";

export default function Buscar() {
    const [query, setQuery] = React.useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Procurando por: ${query}`);
        // AQUI POSSO INTEGRAR COM API OU FILTAR PRODUTOS
    };

    return (
        <main className="buscar-page">
            <h1>Buscar na loja Apple</h1>
            <form onSubmit={handleSearch} className="buscar-form">
                <input
                    type="text"
                    placeholder="Digite sua busca..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="buscar-button">Buscar</button>
            </form>
        </main>
    );
    }