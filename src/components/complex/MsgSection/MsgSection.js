import styles from './MsgSection.module.scss';

import { useSelector, useDispatch } from 'react-redux';

import ChatMsg from '../../basic/chat-msg/ChatMsg';
import face from '../../../assets/fotka.jpg';
import typing from '../../../assets/Typing.png';


export default function MsgSection(props) {
 
    const messages = useSelector(state => state.messageSection.messages)

    const messagesEl = messages.map( (msg, i) => {

        let bg, color;
        if ( msg.sender === 'sent' ) {
            bg = 'laorange';
            color = 'white';
        } else {
            bg = 'lagrey-bg';
            color = 'la-grey-color'
        }

        return (
            <ChatMsg text={msg.text} sender={msg.sender} bg={bg} color={color} key={i}/>
        )

    })

    return (
        <div className='text-end position-relative'>
            <img src={props.image} alt="" className={styles.image}/>
            <div className={`${styles.messages} text-start`}>
                {messagesEl}
                <div>
                    <img src={face} alt="face" className='me-3' />
                    <img src={typing} alt="face" className='me-3' />
                </div>

            </div>
            
        </div>
    )
 
}