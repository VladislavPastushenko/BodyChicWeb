import styles from './Footer.module.sass'


const Footer = () => {
    return (
        <div className={styles.container} align='center'>
            <div className={styles.headerContainer}>
                <div className={styles.headerItem}>
                    <a className={styles.headerItemLink}>
                        INSTAGRAM
                    </a>
                </div>
                <div className={styles.headerItem}>
                    <a className={styles.headerItemLink}>
                        VKONTAKTE
                    </a>
                </div>
            </div>
            <div className={styles.divider}>-</div>
            <div className={'fontSizeXs ' + styles.contacts}>
                <a href={'tel:+79608720000'} className={styles.contactsLink}>
                    +7 960 872-00-00
                </a>
            </div>
            <div className={'fontSizeXs ' + styles.contacts}>
                <a href={'tel:+79608720000'} className={styles.contactsLink}>
                    franch@bodychic.studio
                </a>
            </div>
        </div>
    )
}
export default Footer