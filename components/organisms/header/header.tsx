import { observer } from 'mobx-react-lite';
import { useStore } from '../../../providers/storeProvider/storeProvider';

import Row from '../../slayouts/row/row';
import Content from '../../slayouts/content/content';

import Logo from '../../atoms/logo/logo';
import Burger from '../../atoms/burger/burger';
import Menu from '../../organisms/menu/menu';

import styles from './header.module.scss';

const Header = () => {
  const { uiStore } = useStore();
  const { threshold, scrollHeight } = uiStore;

  const small = scrollHeight > threshold;

  return (
    <div id={styles.header} className={small ? styles.small : ''}>
      <Content>
        <Row alignItems="center" justifyContent="space-between">
          <Logo small={small} />
          <Burger />
        </Row>
        <Menu />
      </Content>
    </div>
  );
};

export default observer(Header);
