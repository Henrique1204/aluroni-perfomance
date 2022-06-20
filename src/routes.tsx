import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from 'components/Footer';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';

// import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
import Sobre from 'pages/Sobre';

const Cardapio = React.lazy(() => import('pages/Cardapio'));

const AppRouter = () => {
  return (
    <main className="container">
      <Router>
        <React.Suspense fallback={<p>Carregando...</p>}>
          <Menu />

          <Routes>
            <Route path="/" element={<PaginaPadrao />}>
              <Route index element={<Inicio />} />
              <Route path="cardapio" element={<Cardapio />} />
              <Route path="sobre" element={<Sobre />} />
            </Route>

            <Route path="prato/:id" element={<Prato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </React.Suspense>
      </Router>
    </main>
  );
};

export default AppRouter;
