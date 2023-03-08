import React, { ReactNode } from 'react';
import styles from './Header.module.less';

interface IProps {
  title: string;
  back?: boolean;
  center?: ReactNode;
  right?: ReactNode;
}

export const Header: React.FC<IProps> = (props) => {
  const handleBack = () => {
    props.back && window.history.back();
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__left} onClick={handleBack}>
        <span
          style={props.back ? { display: 'block' } : { display: 'none' }}
          className={`${styles.header__back} iconfont`}
        >
          &#xe645;
        </span>
        <span className={styles.header__title}>{props.title}</span>
      </div>
      <div className={styles.header__center}>{props.center}</div>
      <div className={styles.header__right}>{props.right}</div>
    </div>
  );
};

export default Header;
