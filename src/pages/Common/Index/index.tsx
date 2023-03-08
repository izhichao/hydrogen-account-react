import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Docker } from '../../../components';
import styles from './index.module.less'
export default function IndexView() {
  const location = useLocation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (location.pathname === '/') {
      setIndex(0);
    } else if (location.pathname === '/show') {
      setIndex(1);
    } else {
      setIndex(2);
    }
  }, [location.pathname]);

  return (
    <div>
      <div className="main-content">
        <div className={styles.bg}></div>
        <Outlet></Outlet>
      </div>
      <Docker currentIndex={index}></Docker>
    </div>
  );
}
