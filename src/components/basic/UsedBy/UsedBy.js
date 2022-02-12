import styles from './UsedBy.module.scss';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import airbus from '../../../assets/logos/Airbus.png'
import forbes from '../../../assets/logos/Forbes.png'
import nascar from '../../../assets/logos/Nascar.png'
import usc from '../../../assets/logos/USC.png'

export default function UsedBy() {
 
    const logos = [airbus, forbes, nascar, usc];

    const logosEl = logos.map( (logo, i) => {
        return (
            <Col xs={6} md={3} className='text-center' key={i}>
                <img src={logo} alt="" key={i} />
            </Col>
        )
    })

    return (
        <div className='mt-4'>
            <p className={`${styles.usedby} m-0`}>Used by</p>
            <Row className='g-5'>
                {logosEl}
            </Row>
        </div>
    )
 
}