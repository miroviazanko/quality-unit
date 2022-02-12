import styles from './Service.module.scss'
 
export default function Service(props) {
 
    const text = props.text;

    return (
        <p className={`${styles.services} me-4`}>✓ {text}</p>
    )
 
}