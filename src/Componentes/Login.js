import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-light min-vh-100">
      <div className="card p-4">
        <h3 className="text-center mb-4">Login</h3>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Digite seu email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Senha</label>
          <input type="password" className="form-control" id="password" placeholder="Digite sua senha" />
        </div>
        <button className="btn btn-primary w-100" onClick={handleLogin}>Entrar</button>
        <div className="text-center mt-3">
          <a href="/forgot-password">Esqueceu a senha?</a> | <a href="/register">Cadastrar</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
