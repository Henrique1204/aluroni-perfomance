import React from 'react';
import { CgSearch } from 'react-icons/cg';

import styles from './Buscador.module.scss';

interface IBuscadorProps {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

const Buscador: React.FC<IBuscadorProps> = ({ busca, setBusca }) => {
  const IconElement = React.useMemo(() => <CgSearch size={20} color="#4C4D5E" />, []);

  return (
    <div className={styles.buscador}>
      <input
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
        placeholder="Buscar"
      />

      {IconElement}
    </div>
  );
};

export default React.memo(Buscador);
