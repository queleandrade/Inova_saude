import React, { useState } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";

// Registrar os componentes necessários para o Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,  // Para gráficos de barras
  ArcElement   // Para gráficos de pizza
);

function Dashboard({ menuOpen, toggleMenu }) {
  // Estado para os filtros
  const [month, setMonth] = useState("Jan");
  const [year, setYear] = useState("2024");
  const [city, setCity] = useState("Salvador");
  const [disease, setDisease] = useState("Sarampo");

  // Dados dos gráficos
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sarampo",
        data: [75, 60, 80, 90, 70, 50],
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
        tension: 0.4,
      },
      {
        label: "Meningite",
        data: [25, 30, 35, 45, 40, 30],
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.1)",
        tension: 0.4,
      },
      {
        label: "Coqueluche",
        data: [20, 25, 30, 35, 30, 25],
        borderColor: "green",
        backgroundColor: "rgba(0, 255, 0, 0.1)",
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ["Sarampo", "Meningite", "Coqueluche"],
    datasets: [
      {
        label: "Casos",
        data: [75, 45, 30],
        backgroundColor: ["blue", "red", "green"],
      },
    ],
  };

  const doughnutData = {
    labels: ["Sarampo", "Meningite", "Coqueluche"],
    datasets: [
      {
        label: "Porcentagem",
        data: [40, 35, 25],
        backgroundColor: ["blue", "red", "green"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div className="container py-5">
      <h1>Bem-vindo ao Dashboard</h1>

      <button onClick={toggleMenu} className="btn btn-light mb-4">
        {menuOpen ? "Fechar Menu" : "Abrir Menu"}
      </button>

      {/* Filtros de Mês, Ano, Cidade e Doenças */}
      <div className="mb-4">
        <div className="row">
          <div className="col">
            <label>Mês:</label>
            <select
              className="form-control"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option value="Jan">Jan</option>
              <option value="Feb">Feb</option>
              <option value="Mar">Mar</option>
              <option value="Apr">Apr</option>
              <option value="May">May</option>
              <option value="Jun">Jun</option>
            </select>
          </div>

          <div className="col">
            <label>Ano:</label>
            <select
              className="form-control"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>

          <div className="col">
            <label>Cidade:</label>
            <select
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="Salvador">Salvador</option>
              <option value="Feira de Santana">Feira de Santana</option>
              <option value="Vitória da Conquista">Vitória da Conquista</option>
            </select>
          </div>

          <div className="col">
            <label>Doença:</label>
            <select
              className="form-control"
              value={disease}
              onChange={(e) => setDisease(e.target.value)}
            >
              <option value="Sarampo">Sarampo</option>
              <option value="Meningite">Meningite</option>
              <option value="Coqueluche">Coqueluche</option>
            </select>
          </div>
        </div>
      </div>

      {/* Gráfico de Linha */}
      <div style={{ height: "300px" }}>
        <Line data={lineData} options={options} />
      </div>

      {/* Gráficos de Barra e Rosca Lado a Lado */}
      <div className="row">
        <div className="col-md-6">
          {/* Gráfico de Barra */}
          <div style={{ height: "300px" }}>
            <Bar data={barData} options={options} />
          </div>
        </div>

        <div className="col-md-6">
          {/* Gráfico de Rosca */}
          <div style={{ height: "300px" }}>
            <Doughnut data={doughnutData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
