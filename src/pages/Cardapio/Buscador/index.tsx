import React from 'react';
import { CgSearch } from 'react-icons/cg';

import styles from './Buscador.module.scss';

interface IBuscadorProps {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

const Buscador: React.FC<IBuscadorProps> = ({ busca, setBusca }) => {
  return (
    <div className={styles.buscador}>
      <input
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
        placeholder="Buscar"
      />

      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
};

export default Buscador;
