import styles from './MaxWidthContainer.module.css';

function MaxWidthContainer({ children }) {
    return <main className={styles.wrapper}>{children}</main>;
}

export default MaxWidthContainer;
