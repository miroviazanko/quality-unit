import styles from './LaButton.module.scss';
 


export default function LaButton(props) {
 
    return (

        <div className={styles.laButton}>
            <a href={props.link}
               >
    
                {props.label}
    
            </a>
        </div>
    )
 
}