import styles from './LoveYourselfThirdImage.module.sass'
import { ParallaxBanner } from 'react-scroll-parallax';

const LoveYourselfThirdImageSection = () => {
    return (
        <div className={styles.container} align='center'>
            <ParallaxBanner
                layers={[{ image: '/love-yourself-third-image.jpeg', speed: -15 }]}
                className={styles.parallaxBanner}
            />
            <div className={styles.overlay}/>
        </div>
    )
}
export default LoveYourselfThirdImageSection