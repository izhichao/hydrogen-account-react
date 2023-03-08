import { Link } from 'react-router-dom';
import styles from './Docker.module.less';

export default function Docker(props: { currentIndex: number }) {
  const dockerList = [
    { icon: '&#xe64e;', text: '首页', to: '/' },
    { icon: '&#xe667;', text: '统计', to: '/show' },
    { icon: '&#xe78b;', text: '我的', to: '/my' }
  ];

  return (
    <div className={styles.docker}>
      {dockerList.map((item, index) => (
        <Link
          to={item.to}
          key={item.text}
          className={`${styles.docker__item} ${props.currentIndex === index ? styles['docker__item--active'] : ''}`}
        >
          <i className="iconfont" dangerouslySetInnerHTML={{ __html: item.icon }}></i>
          <p>{item.text}</p>
        </Link>
      ))}
    </div>
  );
}

export { Docker };
