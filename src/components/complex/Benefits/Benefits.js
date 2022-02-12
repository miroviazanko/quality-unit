import styles from './Benefits.module.scss'

import { useSelector, useDispatch } from 'react-redux';

import img1 from '../../../assets/Graph.png';
import img2 from '../../../assets/Elements.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Benefit from '../Benefit/Benefit';
import LaButton from '../../basic/LaButton/LaButton';


export default function Benefits() {
 
    const title = useSelector(state => state.benefits.title);
    const text = useSelector(state => state.benefits.text);
    const banners = useSelector(state => state.benefits.banners);


    const bannersEl = banners.map( (banner, i) => {
        
        return (
            <Benefit title={banner.title} text={banner.text} amount={banner.amount} key={i}/>
        )
    
    })

    return (
        <Container className='my-5 p-3 p-md-5'>

            <Row>
                <Col xs={12} xl={6}>
                    <h6 className='text-laorange'>Pioneering software</h6>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <div className={styles.benefitsImgWrap}>
                        <img src={img1} alt="pic" className={styles.img1}/>
                        <img src={img2} alt="pic" className={styles.img2}/>
                    </div>
                </Col>
                <Col xs={12} xl={6} className={`${styles.benefitBanners} p-3 p-md-5 my-5 m-xl-0`}>
                    
                    {bannersEl}
                    <LaButton label="Make your business goals a reality"/>

                </Col>
            </Row>

        </Container>
    )
 
}