import React, { useState } from 'react';

function Settings() {
  const [password, setPassword] = useState('');
  const [userInfo] = useState({
    nome: 'João Silva',
    email: 'joao.silva@exemplo.com',
    cidade: 'Salvador',
  });

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSavePassword = () => {
    alert('Senha alterada com sucesso!');
    setPassword('');
  };

  return (
    <div className="container py-5">
      <h1>Configurações</h1>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Informações do Usuário</h5>
          <p><strong>Nome:</strong> {userInfo.nome}</p>
          <p><strong>Email:</strong> {userInfo.email}</p>
          <p><strong>Cidade:</strong> {userInfo.cidade}</p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Alterar Senha</h5>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">Nova Senha</label>
            <input
              type="password"
              id="newPassword"
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button className="btn btn-success" onClick={handleSavePassword}>Salvar Alteração</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
