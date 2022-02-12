import styles from './Chatmsg.module.scss';
import vector from '../../../assets/vector/Vector.svg';
import face from '../../../assets/fotka.jpg';

export default function ChatMsg(props) {

    let sender = props.sender;

    return (
        <div className='my-3 d-flex align-items-end'>
            { sender === 'received' && <img src={face} alt="face" className='me-3'/> }
            <div className={`${styles.para} bg-${props.bg} text-${props.color} ${ sender === 'sent' ? styles.sent : styles.received}`}>
                <p>{props.text}</p>
                {sender === 'sent' && <img src={vector} className={styles.vector} alt="" />}
            </div>
        </div>
    )
}