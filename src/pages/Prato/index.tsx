import React from 'react';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';

import cardapio from 'data/cardapio.json';

const NotFound = React.lazy(() => import('pages/NotFound'));

const TagsPrato = React.lazy(() => import('components/TagsPrato'));
const PaginaPadrao = React.lazy(() => import('components/PaginaPadrao'));

import styles from './Prato.module.scss';

const Prato: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const prato = cardapio.find((item) => item.id === Number(id));

  if (!prato) return <NotFound />;

  return (
    <Routes>
      <Route path='*' element={<PaginaPadrao />}>
        <Route
          index
          element={
            <>
              <button className={styles.voltar} onClick={() => navigate(-1)}>
                {'< Voltar'}
              </button>

              <section className={styles.container}>
                <h1 className={styles.titulo}>{prato.title}</h1>

                <div className={styles.imagem}>
                  <img src={prato.photo} alt={prato.title} />
                </div>

                <div className={styles.conteudo}>
                  <p className={styles.conteudo__descricao}>
                    {prato.description}
                  </p>

                  <TagsPrato {...prato} />
                </div>
              </section>
            </>
          }
        />
      </Route>
    </Routes>
  );
};

export default Prato;
