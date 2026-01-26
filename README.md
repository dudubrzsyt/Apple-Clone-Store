# 🍎 Apple Clone Website

Um site inspirado no **Apple.com**, recriado com **React + Vite** para fins de estudo e prática de design moderno.  
Este projeto busca reproduzir a experiência visual e interativa do site oficial da Apple, com páginas de produtos, login Apple ID, busca, compras e muito mais.

---

## ✨ Funcionalidades

- **Página inicial (Apple Showcase)**  
  - Destaques dos principais produtos (iPhone, MacBook, etc).  
  - Layout responsivo e minimalista inspirado no design oficial da Apple.  

- **Páginas de produtos**  
  - iPhone 17 Pro  
  - iPhone 17 Pro Max  
  - MacBook M4  
  - Cada página com descrição, imagens e botão de compra.  

- **Sistema de compras**  
  - Páginas dedicadas para comprar cada produto.  
  - Formulário simples e funcional.  

- **Apple ID (IdApple.tsx)**  
  - Login com redirecionamento para `/icloud`.  
  - Criação de novo Apple ID.  
  - Recuperação de senha.  
  - Interface limpa e elegante, com logo da Apple e design premium.  

- **Busca (Buscar.tsx)**  
  - Campo de pesquisa para encontrar produtos e páginas.  

- **Menu e Header**  
  - Navegação superior com estilo Apple.  
  - Links para páginas principais.  

---

## 🎨 Design

- **Minimalista e elegante**: inspirado no site oficial da Apple.  
- **Tipografia**: uso de fontes do sistema (`-apple-system, SF Pro Text, SF Pro Display`).  
- **Cores**: paleta neutra (branco, cinza claro, preto e azul Apple #0071e3).  
- **Responsividade**: adaptado para desktop e mobile.  
- **Componentização**: cada página e seção é um componente React separado.  

---

## 🛠️ Tecnologias utilizadas

- [React](https://reactjs.org/) — biblioteca principal para construção da interface.  
- [Vite](https://vitejs.dev/) — bundler rápido e moderno.  
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática para maior segurança.  
- [CSS Modules / Styles](src/styles) — estilização separada por componentes.  
- [React Router](https://reactrouter.com/) — navegação entre páginas.  

---

## 🚀 Como executar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/seuusuario/apple-clone.git
cd apple-clone



2. Instalar dependências

npm install

O projeto estará disponível em: http://localhost:5173


4. Build para produção

npm run preview

📂 Estrutura de pastas
apple-clone/
├── public/                # Arquivos estáticos
├── src/
│   ├── components/        # Componentes reutilizáveis (Header, Menu, Showcase)
│   ├── pages/             # Páginas principais (Iphone17Pro, MacbookM4, IdApple, Buscar, Compras)
│   ├── styles/            # Arquivos CSS separados por página
│   ├── App.tsx            # Configuração principal
│   ├── main.tsx           # Ponto de entrada
└── vite.config.ts         # Configuração do Vite



🖼️ Páginas disponíveis
- / → Apple Showcase (home)
- /iphone17pro → Página do iPhone 17 Pro
- /iphone17promax → Página do iPhone 17 Pro Max
- /macbookm4 → Página do MacBook M4
- /compras → Página de compras

- /buscar → Página de busca
- /idapple → Página Apple ID (login, signup, recuperação)
- /icloud → Redirecionamento após login

🔮 Melhorias futuras
- Adicionar animações suaves (transições entre páginas).
- Implementar carrinho de compras real.
- Integração com API para produtos dinâmicos.
- Autenticação real para Apple ID (com backend).
- Dark mode inspirado no site da - Apple.

📜 Licença
Este projeto é apenas para fins educacionais e não possui vínculo com a Apple Inc.
Todos os direitos de design pertencem à Apple. Este clone é apenas uma reprodução visual para estudo.

👨‍💻 Autor
Desenvolvido por Igor ✨
