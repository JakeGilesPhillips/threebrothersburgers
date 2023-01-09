/* eslint-disable @next/next/no-img-element */
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../providers/storeProvider/storeProvider';

import styles from './burger.module.scss';

const Burger = () => {
  const { uiStore } = useStore();
  const { menuOpen } = uiStore;

  return (
    <div id={styles.burger} className={menuOpen ? styles.open : ''} onClick={() => uiStore.toggleMenu()}>
      <img
        className={styles.burgerTop}
        src="/images/menu-button/burger_top.png"
        alt="burger menu top bun"
        width={30}
        height={15}
      />
      <span className={styles.burgerText}>MENU</span>
      <img
        className={styles.burgerFadeIn}
        src="/images/menu-button/tomatoes.png"
        alt="burger menu tomatoes"
        width={30}
        height={5}
      />
      <img
        className={styles.burgerBottom}
        src="/images/menu-button/burger_bot.png"
        alt="burger menu top bun"
        width={30}
        height={5}
      />
    </div>
  );
};

export default observer(Burger);
