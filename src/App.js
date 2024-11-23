import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Componentes/Dashboard.js";
import Login from "./Componentes/Login.js";
import Register from "./Componentes/Register.js";
import ForgotPassword from "./Componentes/ForgotPassword.js";
import ExportData from "./Componentes/ExportData.js";
import Map from "./Componentes/Map.js";
import Settings from "./Componentes/Settings.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Estado para controlar o menu lateral
  const [menuOpen, setMenuOpen] = useState(false);

  // Alterna entre abrir/fechar o menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Router>
      <div className="d-flex bg-light min-vh-100">
        {/* Menu Lateral */}
        <aside
          className={`bg-white shadow-sm d-flex flex-column p-3 position-fixed ${menuOpen ? "w-250px" : "w-75px"}`}
          style={{
            height: "100%",
            transition: "width 0.3s",
          }}
        >
          <button
            className="btn btn-light mb-4"
            onClick={toggleMenu} // Alternar menu
            title="Abrir/Fechar Menu"
          >
            <i className="bi bi-list"></i>
          </button>
          {/* Links do Menu */}
          <nav className="flex-grow-1">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/dashboard" className="nav-link text-dark">
                  <i className="bi bi-house-door"></i> {menuOpen && "Dashboard"}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/exportar" className="nav-link text-dark">
                  <i className="bi bi-download"></i> {menuOpen && "Exportar Dados"}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/mapa" className="nav-link text-dark">
                  <i className="bi bi-map"></i> {menuOpen && "Mapa Regional"}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/configuracoes" className="nav-link text-dark">
                  <i className="bi bi-gear"></i> {menuOpen && "Configurações"}
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Conteúdo Principal */}
        <main
          className="flex-grow-1"
          style={{
            marginLeft: menuOpen ? "250px" : "75px",
            transition: "margin-left 0.3s",
          }}
        >
          {/* Rotas da aplicação */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard menuOpen={menuOpen} toggleMenu={toggleMenu} />} />
            <Route path="/exportar" element={<ExportData />} />
            <Route path="/mapa" element={<Map />} />
            <Route path="/configuracoes" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

