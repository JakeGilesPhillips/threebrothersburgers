import { CSSProperties, PropsWithChildren, useMemo } from 'react';
import styles from './block.module.scss';

interface BlockProps extends PropsWithChildren {
  fixed?: boolean;
  align?: string;
  justify?: string;
  backgroundColor?: string;
  backgroundImage?: string;
}

const Block = (props: BlockProps) => {
  const {
    fixed = false,
    align = 'center',
    justify = 'center',
    backgroundColor = '',
    backgroundImage = '',
    children,
  } = props;

  // Set height if fixed
  const height: CSSProperties | undefined = useMemo(() => {
    if (fixed) return { overflow: 'scroll', width: '100%', height: '100vh' };
  }, [fixed]);

  // Set background
  const background: CSSProperties | undefined = useMemo(() => {
    if (backgroundColor) return { backgroundColor };
    if (backgroundImage) return { backgroundImage: `url(${backgroundImage})` };
  }, [backgroundColor, backgroundImage]);

  // Set styles
  const style: CSSProperties | undefined = useMemo(() => {
    return {
      ...height,
      ...background,
      alignItems: align,
      justifyBlock: justify,
    };
  }, [height, background, align, justify]);

  // Create Block element
  return (
    <div className={styles.block} style={style}>
      <div className={styles.blockCentered}>{children}</div>
    </div>
  );
};

export default Block;
