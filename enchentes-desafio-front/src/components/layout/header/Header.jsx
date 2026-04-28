import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./header.scss";
import { AlertTriangle } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* LOGO */}
        <div className="logo">
          <Link to="/">
            <h1>SOS Enchentes</h1>
          </Link>
          <span>Rede de apoio</span>
        </div>

        {/* MENU */}
        <nav className={`nav ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>
            Início
          </Link>

          <Link to="/ajuda" onClick={() => setOpen(false)}>
            Pedir Ajuda
          </Link>

          <Link to="/abrigos" onClick={() => setOpen(false)}>
            Abrigos
          </Link>

          <Link to="/doacoes" onClick={() => setOpen(false)}>
            Doações
          </Link>

          <Link to="/voluntarios" onClick={() => setOpen(false)}>
            Voluntários
          </Link>
        </nav>

        {/* AÇÕES */}
        <div className="emergency-status">
          <AlertTriangle size={16} />
          Alerta de emergência ativo
        </div>

        {/* MOBILE */}
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </div>
      </div>
    </header>
  );
}
