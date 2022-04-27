import styles from './SecondImageSection.module.sass'
import { ParallaxBanner } from 'react-scroll-parallax';

const SecondImageSection = () => {
    return (
        <div className={styles.container} align='center'>
            <ParallaxBanner
                layers={[{ image: '/home-second-image.jpg', speed: -15 }]}
                className={styles.parallaxBanner}
            />
            <div className={styles.overlay}/>
        </div>
    )
}
export default SecondImageSection