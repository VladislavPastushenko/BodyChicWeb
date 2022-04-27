import styles from './LoveYourselfServices.module.sass'
import { Container, Col } from 'react-grid-system';

const LoveYourselfServices = () => {
    return (
        <div className={styles.container} id='love-yourself-services' align='center'>
            <p className={'fontSizeMd ' + styles.header}>
                СЕРВИСЫ
            </p>
            <p className={styles.divider}>
                -
            </p>
            <Container>
                <Col xl={12}>
                    <div className={styles.contentContainer} align='left'>
                        <div className={styles.contentHeader + ' fontSizeSm'}>
                            МЕДИТАЦИЯ
                        </div>
                        <div className={styles.content + ' fontSizeXs'}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>

                        <hr className={styles.line} size={0.5} color='#c0c0c0'/>

                        <div className={styles.contentHeader + ' fontSizeSm'}>
                            ГАЙД
                        </div>
                        <div className={styles.content + ' fontSizeXs'}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>

                        <hr className={styles.line} size={0.5} color='#c0c0c0'/>

                        <div className={styles.contentHeader + ' fontSizeSm'}>
                            МАРАФОН
                        </div>
                        <div className={styles.content + ' fontSizeXs'}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                </Col>
            </Container>
        </div>
    )
}
export default LoveYourselfServices