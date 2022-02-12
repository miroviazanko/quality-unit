import styles from './PricingBlock.module.scss'

import LaButton from '../../basic/LaButton/LaButton'
import icon from '../../../assets/pricing-icon-ticket-2 1.svg'

export default function PricingBlock(props) {
 
    const imageSrc = props.image;
    const title = props.title;
    const text = props.text;
    const price = props.price;

    return (
        <div className={`${styles.pricingBlock} h-100`} >

            <img src={icon} alt="pic"/>
            <h5 className='my-3'>{title}</h5>
            <p>{text}</p>
            <p className='price-text'>{price}</p>
            <LaButton label="Try It"/>

        </div>
    )
 
}