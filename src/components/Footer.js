import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Challenge by
      <a
        className={styles.footer__link}
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        rel='noreferrer noopener'
      >
        &thinsp; Frontend Mentor &thinsp;
      </a>
      Coded by
      <a
        className={styles.footer__link}
        href='https://github.com/RedSquirrrel/Time-Tracking-Dashboard'
        target='_blank'
        rel='noreferrer noopener'
      >
        &thinsp; RedSquirrel
      </a>
    </footer>
  );
};

export default Footer;
