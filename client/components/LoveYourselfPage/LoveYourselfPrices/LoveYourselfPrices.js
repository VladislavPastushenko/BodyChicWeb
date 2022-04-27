import styles from './LoveYourselfPrices.module.sass'
import { Container, Col } from 'react-grid-system';

const LoveYourselfPrices = () => {
    return (
        <div className={styles.container} id='love-yourself-prices' align='center'>
            <p className={'fontSizeMd ' + styles.header}>
                ЗАКАЗАТЬ УСЛУГУ
            </p>
            <p className={styles.divider}>
                -
            </p>
            <Container>
                <Col xl={12}>
                    <div className={styles.contentContainer} align='center'>
                        <div className={styles.contentItem}>
                            <a className={styles.contentLink + ' fontSizeSm'}>
                                МЕДИТАЦИЯ - ₽590
                            </a>
                        </div>
                        <div className={styles.contentItem}>
                            <a className={styles.contentLink + ' fontSizeSm'}>
                                ГАЙД - ₽990
                            </a>
                        </div>
                        <div className={styles.contentItem}>
                            <a className={styles.contentLink + ' fontSizeSm'}>
                                МЕДИТАЦИЯ + ГАЙД + НЕДЕЛЯ МАРАФОНА - ₽1190
                            </a>
                        </div>
                        <div className={styles.contentItem}>
                            <a className={styles.contentLink + ' fontSizeSm'}>
                                МАРАФОН + ТРЕКЕРЫ + РАБОЧАЯ ТЕТРАДЬ - ₽4990
                            </a>
                        </div>
                    </div>
                </Col>
            </Container>
        </div>
    )
}
export default LoveYourselfPrices