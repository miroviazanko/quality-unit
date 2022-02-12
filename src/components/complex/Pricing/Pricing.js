import styles from './Pricing.module.scss'

import { useSelector, useDispatch } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LaButton from '../../basic/LaButton/LaButton';
import PricingBlock from '../Pricing-block/PricingBlock';



export default function Pricing() {
 
    const title = useSelector(state => state.pricingSection.title)
    const text = useSelector(state => state.pricingSection.text)

    const blocks = useSelector(state => state.pricingSection.blocks)

    const blocksEl = blocks.map( (block, i) => {
        
        return (
            <Col xs={12} sm={6} lg={4} className='justify-content-center mt-5 mt-lg-0' key={i}>
                <PricingBlock image={block.imgUrl} 
                            title={block.title}
                            text={block.text}
                            price={block.price}/>
            </Col>
        )
    })

    return (
        <div className={`${styles.pricing} py-5`}>
            <Container>
                <Row>
                    <Col xs={12} sm={12} lg={4}>
                        <h6 className='text-laorange '>Best price</h6>
                        <h2>{title}</h2>
                        <p>{text}</p>
                        <LaButton label='Pricing' link='www.link.com'/>
                    </Col>
                    
                        {blocksEl}
                    
                    
                </Row>
            </Container>
        </div>
    )
 
}