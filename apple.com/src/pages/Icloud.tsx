import React from "react";
import "../styles/Icloud.css";

/**
 * Icloud.tsx — Página iCloud personalizada
 * - Inspirada no visual oficial da Apple
 * - Várias seções: Arquivos, Fotos, Notas, Mail, Calendário, Contatos, Senhas
 * - Fundo limpo e elegante
 * - Responsiva e com animações suaves
 */

const Icloud: React.FC = () => {
  return (
    <main className="icloud-main">
      <div className="icloud-container">
        {/* ================= HERO ================= */}
        <section className="icloud-hero fade-in">
          <h1 className="icloud-title">iCloud</h1>
          <p className="icloud-subtitle">
            Bem-vindo ao seu iCloud personalizado.  
            Acesse seus arquivos, fotos, notas, e-mails, contatos e muito mais em qualquer dispositivo com segurança e praticidade.
          </p>
        </section>

        {/* ================= GRID DE SERVIÇOS ================= */}
        <section className="icloud-grid slide-up">
          <div className="icloud-card">
            <img
              src="https://www.apple.com/br/icloud/images/overview/restore__1dhzlb1j0yqm_large.jpg"
              alt="Arquivos"
              className="icloud-img"
            />
            <h2>Arquivos</h2>
            <p>
              Acesse documentos e pastas salvos no seu iCloud Drive.  
              Sincronização automática entre todos os seus dispositivos.
            </p>
          </div>

          <div className="icloud-card">
            <img
              src="https://www.apple.com/br/icloud/images/overview/everything_hero__o80m7600mtm6_large.jpg"
              alt="Fotos"
              className="icloud-img"
            />
            <h2>Fotos</h2>
            <p>
              Reviva seus momentos com todas as fotos sincronizadas.  
              Biblioteca compartilhada e organização inteligente.
            </p>
          </div>

          <div className="icloud-card">
            <img
              src="https://www.apple.com/br/icloud/images/overview/always_on__djk4uvw7xmky_large.jpg"
              alt="Notas"
              className="icloud-img"
            />
            <h2>Notas</h2>
            <p>
              Organize suas ideias e lembretes com o app Notas.  
              Crie listas, desenhos e colabore em tempo real.
            </p>
          </div>

          <div className="icloud-card">
            <img
              src="https://www.apple.com/v/icloud/h/images/overview/mail__f0u6f4q0k0uq_large.jpg"
              alt="Mail"
              className="icloud-img"
            />
            <h2>Mail</h2>
            <p>
              Acesse seu e-mail iCloud em qualquer lugar.  
              Interface limpa e segura para suas mensagens.
            </p>
          </div>

          <div className="icloud-card">
            <img
              src="https://www.apple.com/v/icloud/h/images/overview/calendar__d9z6f4q0k0uq_large.jpg"
              alt="Calendário"
              className="icloud-img"
            />
            <h2>Calendário</h2>
            <p>
              Organize sua agenda com o Calendário iCloud.  
              Sincronize compromissos e eventos com todos os dispositivos.
            </p>
          </div>

          <div className="icloud-card">
            <img
              src="https://www.apple.com/v/icloud/h/images/overview/contacts__d8z6f4q0k0uq_large.jpg"
              alt="Contatos"
              className="icloud-img"
            />
            <h2>Contatos</h2>
            <p>
              Tenha todos os seus contatos sempre atualizados.  
              Sincronização automática e backup seguro.
            </p>
          </div>

          <div className="icloud-card">
            <img
              src="https://www.apple.com/v/icloud/h/images/overview/keychain__f8z6f4q0k0uq_large.jpg"
              alt="Senhas"
              className="icloud-img"
            />
            <h2>Senhas</h2>
            <p>
              Guarde suas senhas com segurança no iCloud Keychain.  
              Preenchimento automático e criptografia avançada.
            </p>
          </div>
        </section>

        {/* ================= EXTRA SECTION ================= */}
        <section className="icloud-extra fade-in">
          <h2>Segurança e Privacidade</h2>
          <p>
            O iCloud protege seus dados com criptografia ponta a ponta.  
            Apenas você tem acesso às suas informações.  
            Seus arquivos, fotos e notas estão seguros e disponíveis em qualquer dispositivo Apple.
          </p>
          <img
            src="https://www.apple.com/v/icloud/h/images/overview/security__f9z6f4q0k0uq_large.jpg"
            alt="Segurança"
            className="icloud-img-large"
          />
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="icloud-footer fade-in">
          <p>© 2026 iCloud Clone — Inspirado no design da Apple</p>
        </footer>
      </div>
    </main>
  );
};

export default Icloud;