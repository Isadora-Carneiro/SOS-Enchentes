import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        
        <div className="footer-box">
          <h2>SOS Enchentes</h2>
          <p className="subtitle">Rede de Apoio</p>

          <p className="desc">
            Conectando quem precisa de ajuda com quem pode ajudar em situações de emergência.
          </p>
        </div>

        <div className="footer-box">
          <h3>Links Rápidos</h3>
          <ul>
            <li>Pedir Ajuda</li>
            <li>Ser Voluntário</li>
            <li>Fazer Doação</li>
            <li>Ver Abrigos</li>
          </ul>
        </div>


        <div className="footer-box">
          <h3>Informações</h3>
          <ul>
            <li>Sobre o Projeto</li>
            <li>Como Funciona</li>
            <li>Perguntas Frequentes</li>
            <li>Política de Privacidade</li>
          </ul>
        </div>


        <div className="footer-box">
          <h3>Contato de Emergência</h3>

          <ul className="contacts">
            <li>📞 199 - Defesa Civil</li>
            <li>🚒 193 - Bombeiros</li>
            <li>✉️ contato@sosenchentes.org</li>
          </ul>

          <p className="small">
            Central de Operações - Prefeitura Municipal
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2024 SOS Enchentes — Sistema de apoio em emergências
      </div>

    </footer>
  );
}