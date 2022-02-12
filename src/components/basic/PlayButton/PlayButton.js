import styles from './PlayButton.module.scss'
 
export default function PlayButton(props) {
 
    return (

        <div className={`position-relative ${styles.playBtnWrapper}`}>
            <a href={props.link} className={`position-absolute ${styles.playBtn}`}>
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 5.13397C10.1667 5.51888 10.1667 6.48113 9.5 6.86603L2 11.1962C1.33333 11.5811 0.5 11.0999 0.5 10.3301L0.500001 1.66987C0.500001 0.900072 1.33333 0.418947 2 0.803847L9.5 5.13397Z" fill="white" />
                </svg>
            </a>
            <div className={`position-absolute ${styles.stLayout}`}>

            </div>
            <div className={`position-absolute ${styles.ndLayout}`}>

            </div>
        </div>
    )
 
}