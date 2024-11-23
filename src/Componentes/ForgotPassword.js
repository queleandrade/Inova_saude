import React from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  const handleResetPassword = () => {
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-light min-vh-100">
      <div className="card p-4">
        <h3 className="text-center mb-4">Recuperar Senha</h3>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Digite seu email" />
        </div>
        <button className="btn btn-primary w-100" onClick={handleResetPassword}>Recuperar Senha</button>
        <div className="text-center mt-3">
          <a href="/login">Voltar para o login</a>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

