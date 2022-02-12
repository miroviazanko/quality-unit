import styles from './Benefit.module.scss';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


 
export default function Benefit(props) {
 
    const title = props.title;
    const text = props.text;
    const amount = props.amount;

    return (
        <Row className={styles.benefitWrapper}>
           <Col xs={4} className={styles.amountCol}>
                
                <h1 className='text-laorange'>{amount}</h1>
           </Col>
            <Col xs={8} className={styles.descCol}>
                <h5>{title}</h5>
                <p>{text}</p>
           </Col>
        </Row>
    )
 
}