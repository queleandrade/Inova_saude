import React, { useState } from 'react';

function ExportData() {
  const [showPopup, setShowPopup] = useState(false);

  const handleDownload = () => {
    setShowPopup(true); // Exibe o popup para confirmação
  };

  const confirmDownload = (response) => {
    if (response === 'sim') {
      
      alert('Dados exportados com sucesso!');
    }
    setShowPopup(false);
  };

  // Dados de exemplo para a tabela
  const data = [
    { cidade: 'Salvador', casos: 200, doenca: 'Sarampo' },
    { cidade: 'Feira de Santana', casos: 150, doenca: 'Meningite' },
    { cidade: 'Vitória da Conquista', casos: 120, doenca: 'Coqueluche' },
  ];

  return (
    <div className="container py-5">
      <h1>Exportar Dados</h1>

      {/* Tabela de Dados */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Cidade</th>
            <th>Casos</th>
            <th>Doença</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.cidade}</td>
              <td>{row.casos}</td>
              <td>{row.doenca}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Botão de Exportação */}
      <button className="btn btn-primary" onClick={handleDownload}>Baixar Dados</button>

      {/* Popup de Confirmação */}
      {showPopup && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Deseja baixar os dados?</h5>
                <button type="button" className="btn-close" onClick={() => setShowPopup(false)}></button>
              </div>
              <div className="modal-body">
                <button className="btn btn-success" onClick={() => confirmDownload('sim')}>Sim</button>
                <button className="btn btn-danger" onClick={() => confirmDownload('nao')}>Não</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExportData;
