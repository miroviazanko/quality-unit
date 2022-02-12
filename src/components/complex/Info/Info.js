import styles from './Info.module.scss';
import image from '../../../assets/BG.jpg';

import { useSelector, useDispatch } from 'react-redux';

import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';

import InfoSection from '../InfoSection/InfoSection';
import MsgSection from '../MsgSection/MsgSection';



export default function Info() {
 
    const title = useSelector( state => state.infoSection.title )
    const subtitle = useSelector( state => state.infoSection.subtitle )
    const services = useSelector(state => state.infoSection.services )
    const laButtonLabel = useSelector( state => state.infoSection.laButton.label )
    const laButtonLink = useSelector( state => state.infoSection.laButton.link )
    const playBtnLink = useSelector(state => state.infoSection.playButtonLink )
    
    
    return (
        <Container fluid className={`${styles.info} px-0 px-xl-5 my-0 my-xl-5`}>

            <Row>
                <Col xs={12} xl={6}>
                    <InfoSection head={title} 
                                 subtitle={subtitle}
                                 services={services}
                                 laButtonLabel={laButtonLabel}
                                 laButtonLink={laButtonLink}
                                 playBtnLink={playBtnLink}/>
                </Col>
                <Col xs={12} xl={6} className='my-5 my-xl-0'>
                    <MsgSection image={image}/>
                </Col>
            </Row>
        
        </Container>
    )
 
}