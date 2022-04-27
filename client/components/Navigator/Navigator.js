import styles from './Navigator.module.sass'
import { Container, Row, Col } from 'react-grid-system';
import Link from 'next/link';
const Navigator = () => {
    return (
        <Container>
        <Row justify='center' className={styles.navContainer}>
            <Col lg={2} xl={2}>
                <div className={styles.navItem} align='center'>
                    <Link href={'/'}>
                        <a className={styles.navLink}>
                            ГЛАВНАЯ
                        </a>
                    </Link>
                </div>
            </Col>
            <Col lg={2} xl={2}>
                <div className={styles.navItem} align='center'>
                    <a className={styles.navLink} href='https://bodychic.ru/'>
                        САЙТ СТУДИИ
                    </a>
                </div>
            </Col>
            <Col lg={2} xl={2}>
                <div className={styles.navItem} align='center'>
                    <a className={styles.navLink}>
                        ИНСТАГРАМ
                    </a>
                </div>
            </Col>
        </Row>
        </Container>
    )
}
export default Navigator