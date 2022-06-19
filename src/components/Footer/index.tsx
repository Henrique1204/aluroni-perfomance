import React from 'react';

import { ReactComponent as Logo } from 'assets/logo.svg';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  );
};

export default Footer;
