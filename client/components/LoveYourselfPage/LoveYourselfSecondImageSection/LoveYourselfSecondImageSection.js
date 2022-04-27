import styles from './LoveYourselfSecondImageSection.module.sass'
import { ParallaxBanner } from 'react-scroll-parallax';

const LoveYourselfSecondImageSection = () => {
    return (
        <div className={styles.container} align='center'>
            <ParallaxBanner
                layers={[{ image: '/love-yourself-second-image.jpg', speed: -15 }]}
                className={styles.parallaxBanner}
            />
            <div className={styles.overlay}/>
        </div>
    )
}
export default LoveYourselfSecondImageSection