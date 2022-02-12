import styles from './InfoSection.module.scss';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Service from '../../basic/service-s/Service';
import LaButton from '../../basic/LaButton/LaButton';
import PlayButton from '../../basic/PlayButton/PlayButton';
import UsedBy from '../../basic/UsedBy/UsedBy';



export default function InfoSection(props) {

    const services = props.services;

    const servicesEl = services.map( (serv, i) => {
        return (
            <Service key={i} text={serv} />
        )
    })

    return (
        
        <div className={`${styles.infosection}`}>
            <h1>{props.head}</h1>
            <h4 className='mt-4'>{props.subtitle}</h4>
            <div className='mt-4'>
                {servicesEl}
            </div>
            <Row className='mt-4'>
                <Col xs={12} sm={6}>
                    <LaButton label={props.laButtonLabel}
                              link={props.laButtonLink}/>
                </Col>
                <Col xs={12} sm={6} className='d-flex align-items-center mt-4 mt-sm-0'>
                    <PlayButton link={props.playBtnLink}/>
                    <span className='m-0 fw-bold'>See It In Action</span>
                </Col>
            </Row>

            <UsedBy />
            
        </div>

    )

}