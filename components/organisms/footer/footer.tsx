import { observer } from 'mobx-react-lite';
import { RiFacebookCircleLine, RiTwitterLine } from 'react-icons/ri';
import { useStore } from '../../../providers/storeProvider/storeProvider';

import Column from '../../slayouts/column/column';
import Content from '../../slayouts/content/content';
import Row from '../../slayouts/row/row';

import styles from './footer.module.scss';

const Footer = () => {
  const { uiStore } = useStore();
  const { threshold, pageHeight, scrollHeight } = uiStore;

  const showFooter = scrollHeight < threshold || scrollHeight > pageHeight - threshold;

  return (
    <footer id={styles.footer} className={showFooter ? styles.show : ''}>
      <Content>
        <Row alignItems="flex-end">
          <Column>
            <span>Three Brothers Burgers</span>
            <span>Aboard Spyglass</span>
            <span>Welsh Back</span>
            <span>Bristol, BS1 4SB</span>
          </Column>
          <Column alignItems="flex-end">
            <span>01179 277050</span>
            <span>info@threebrothersburgers.co.uk</span>
          </Column>
        </Row>
      </Content>
    </footer>
  );
};

export default observer(Footer);
