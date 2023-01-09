import { PropsWithChildren } from 'react';

import styles from './content.module.scss';

interface ContentProps extends PropsWithChildren {}

const Content = (props: ContentProps) => {
  const { children } = props;

  return <div className={styles.content}>{children}</div>;
};

export default Content;
