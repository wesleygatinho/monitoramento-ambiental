// src/App.js
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import TelaDeCarregamento from './componentes/TelaDeCarregamento/TelaDeCarregamento';
import TelaDeIntroducao from './componentes/TelaDeIntroducao/TelaDeIntroducao';
import TermosCondicoes from './componentes/TermosCondicoes/TermosCondicoes';
import ReportProblem from './componentes/ReportarProblema/ReportarProblema';
import MenuPrincipais from './MenusPrincipais/MenusPrincipais';

function App() {
  const [stage, setStage] = useState('loading'); // Controla o estágio do app
  const [showMenus, setShowMenus] = useState(false); // Controla quando mostrar Menu
  const navigate = useNavigate();

  // Simulação de carregamento com timeout
  useEffect(() => {
    if (stage === 'loading') {
      const timer = setTimeout(() => {
        setStage('intro');
        navigate("/introducao");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [stage, navigate]);

  // Funções de navegação
  const handleLoaded = () => {
    setStage('intro');
    navigate("/introducao");
  };

  const handleAgree = () => {
    setStage('terms');
    navigate("/termos");
  };

  const handleAccept = () => {
    setStage('report');
    setShowMenus(true); // Exibe o Menu após aceitar os termos
    navigate("/relatar-problema");
  };

  return (
    <div className="App">
      <Routes>
        {/* Tela de Carregamento */}
        <Route path="/" element={<TelaDeCarregamento onLoaded={handleLoaded} />} />

        {/* Tela de Introdução */}
        <Route path="/introducao" element={<TelaDeIntroducao onAgree={handleAgree} />} />

        {/* Tela de Termos e Condições */}
        <Route path="/termos" element={<TermosCondicoes onAccept={handleAccept} />} />

        {/* Mostrar Menu e Relatar Problema após os termos serem aceitos */}
        {showMenus && (
          <Route path="/relatar-problema" element={<MenuPrincipais />}>
            <Route index element={<ReportProblem />} />
          </Route>
        )}

        {/* Página não encontrada */}
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </div>
  );
}

export default App;
