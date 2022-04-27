import styles from './LoveYourselfHomeSection.module.sass'
import { Container, Row, Col } from 'react-grid-system';
import FadeIn from 'react-fade-in';
import Link from 'next/link';
import { ParallaxBanner } from 'react-scroll-parallax';
import Navigator from '../../Navigator/Navigator';

const LoveYourselfHomeSection = () => {
    const transitionDuration = 1600
    return (
        <div className={styles.container}>
            <ParallaxBanner
                layers={[{ image: '/love-yourself-home-bakcground.jpg', speed: -15 }]}
                className={styles.parallaxBanner}
            />
            <div className={styles.overlay}/>

            <Navigator/>

            <Container fluid className={styles.headerContainer}>
                <Row justify='center'>
                    <Col xs={11} md={9} lg={7} xl={5} xxl={4}>
                        <div align='center' className={styles.fadeInContainer}>
                            <FadeIn transitionDuration={transitionDuration}>
                                <h1 className={styles.header}>
                                    ПОЛЮБИ СЕБЯ
                                </h1>
                            </FadeIn>
                            <FadeIn delay={200} transitionDuration={transitionDuration}>
                                <div className={styles.divider}>
                                    -
                                </div>
                            </FadeIn>
                            <FadeIn delay={500} transitionDuration={transitionDuration}>
                                <div className={styles.linkContainer + ' fontSizeMd'}>
                                    <Link href='/love-yourself#love-yourself-services'>
                                        <a className={styles.link}>
                                            СЕРВИСЫ
                                        </a>
                                    </Link>
                                </div>
                            </FadeIn>
                            <FadeIn delay={1000} transitionDuration={transitionDuration}>
                                <div className={styles.linkContainer + ' fontSizeMd'}>
                                    <Link href='/love-yourself#love-yourself-prices'>
                                        <a className={styles.link}>
                                            ЗАКАЗАТЬ УСЛУГУ
                                        </a>
                                    </Link>
                                </div>
                            </FadeIn>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default LoveYourselfHomeSection