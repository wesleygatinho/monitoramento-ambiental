import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
const Cabecalho = () => {
  return (

    <header className={styles.cabecalhoPrincipal}>
      <div className={styles.logoDoCabecalho}>
        <img className={styles.imgCabecalho} src='/imagens/logo-logo.webp' alt='Logo Alura Flix' />
      </div>
      <div>
        <h1>MonitoramentoAmbiental</h1>
      </div>
      <nav className={styles.botoes}>
        <Link className={styles.botaoInicio} to="/termos">INICIO</Link>
        <Link className={styles.botaoRelatar} to="/relatar-problema">RELATAR PROBLEMA</Link>
      </nav>
    </header>

  );
};

export default Cabecalho;