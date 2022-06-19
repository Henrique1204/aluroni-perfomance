import React from 'react';

import stylesTema from 'styles/Tema.module.scss';

import styles from './Cardapio.module.scss';

import Buscador from './Buscador';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';

const Cardapio: React.FC = () => {
  const [busca, setBusca] = React.useState<string>('');
  const [filtro, setFiltro] = React.useState<number | null>(null);
  const [ordenador, setOrdenador] = React.useState<string>('');

  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTema.titulo}>Cardápio</h3>

      <Buscador busca={busca} setBusca={setBusca} />

      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
    
      <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
    </section>
  );
};

export default Cardapio;
