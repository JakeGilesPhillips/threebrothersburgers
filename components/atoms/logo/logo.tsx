import { observer } from 'mobx-react-lite';
import styles from './logo.module.scss';

interface LogoProps {
  small?: boolean;
}

const Logo = (props: LogoProps) => {
  const { small } = props;

  const onClick = () => {
    window.location.href = '/';
  };

  return (
    <span id={styles.logo} className={small ? styles.small : ''} onClick={onClick}>
      THREE BROTHERS <span className={styles.light}>BURGERS</span>
    </span>
  );
};

export default observer(Logo);
