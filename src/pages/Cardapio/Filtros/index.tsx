import React from 'react';
import classNames from 'classnames';

import styles from './Filtros.module.scss';

import filtros from './filtros.json';

type IOpcao = typeof filtros[0];

interface IFiltrosProps {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

const Filtros: React.FC<IFiltrosProps> = ({ filtro, setFiltro }) => {
  const selecionarFiltro = (opcao: IOpcao) => {
    if (filtro === opcao.id) return setFiltro(null);

    return setFiltro(opcao.id);
  };

  return (
    <div className={styles.filtros}>
      {filtros.map(opcao => (
        <button className={classNames({
          [styles.filtros__filtro]: true,
          [styles['filtros__filtro--ativo']]: filtro === opcao.id
        })} key={opcao.id} onClick={() => selecionarFiltro(opcao)}>
          {opcao.label}
        </button>
      ))}
    </div>
  );
};

export default Filtros;
  