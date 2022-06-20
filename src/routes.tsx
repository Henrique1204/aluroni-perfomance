import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from 'components/Footer';
import Menu from 'components/Menu';

const PaginaPadrao = React.lazy(() => import('components/PaginaPadrao'));

const Inicio = React.lazy(() => import('pages/Inicio'));
const Cardapio = React.lazy(() => import('pages/Cardapio'));
const NotFound = React.lazy(() => import('pages/NotFound'));
const Prato = React.lazy(() => import('pages/Prato'));
const Sobre = React.lazy(() => import('pages/Sobre'));


const AppRouter: React.FC = () => {
  return (
    <main className="container">
      <BrowserRouter>
        <Menu />

        <React.Suspense fallback={<p>Carregando...</p>}>
          <Routes>
            <Route path="/" element={<PaginaPadrao />}>
              <Route index element={<Inicio />} />
              <Route path="cardapio" element={<Cardapio />} />
              <Route path="sobre" element={<Sobre />} />
            </Route>

            <Route path="prato/:id" element={<Prato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Suspense>

        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default AppRouter;
