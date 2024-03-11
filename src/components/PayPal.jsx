import { useContext } from 'react'
import { AmountContext, CurrencyContext } from '../App'

const PayPal = () => {
    const currency = useContext(CurrencyContext)
    const amount = useContext(AmountContext)
    // console.log(currency);
    // console.log(amount);

    return (
        <div>PayPal</div>
    )
}

export default PayPal