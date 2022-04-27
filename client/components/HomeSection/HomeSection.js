import styles from './HomeSection.module.sass'
import { Container, Row, Col } from 'react-grid-system';
import FadeIn from 'react-fade-in';
import Link from 'next/link';
import { ParallaxBanner } from 'react-scroll-parallax';

const HomeSection = () => {
    const transitionDuration = 1600
    return (
        <div className={styles.container}>
            <ParallaxBanner
                layers={[{ image: '/background.jpg', speed: -15 }]}
                className={styles.parallaxBanner}
            />
            <div className={styles.overlay}/>

            <Container>
            <Row justify='center' className={styles.navContainer}>
                <Col lg={2} xl={2}>
                    <div className={styles.navItem} align='center'>
                        <a className={styles.navLink}>
                            ГЛАВНАЯ
                        </a>
                    </div>
                </Col>
                <Col lg={2} xl={2}>
                    <div className={styles.navItem} align='center'>
                        <a className={styles.navLink}>
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

            <Container fluid className={styles.headerContainer}>
                <Row justify='center'>
                    <Col xs={11} md={9} lg={7} xl={5} xxl={4}>
                        <div align='center' className={styles.fadeInLogoContainer}>
                            <FadeIn transitionDuration={transitionDuration}>
                                <div className={styles.peachAndStudio}>
                                <img src='/peach_white.png' width={180} height={180} className={styles.peach}/>
                                <span className={styles.studio}>STUDIO</span>
                                </div>
                            </FadeIn>
                            <FadeIn delay={500} transitionDuration={transitionDuration}>
                                <h1 className={styles.bodyChic}>
                                    BODY CHIC
                                </h1>
                            </FadeIn>
                            <FadeIn delay={1000} transitionDuration={transitionDuration}>
                            <Row className={styles.buttonsContainer}>
                                <Col xs={12} lg={6} id={styles.loveYourselfCol}>
                                    <div className={styles.button}>
                                        ПОЛЮБИ СЕБЯ
                                    </div>
                                </Col>
                                <Col xs={12} lg={6} id={styles.startYourBusinessCol}>
                                    <div className={styles.button}>
                                        НАЧНИ СВОЙ БИЗНЕС
                                    </div>
                                </Col>
                            </Row>
                            </FadeIn>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default HomeSection