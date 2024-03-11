import { createContext, useState } from "react"
import Payment from "./components/Payment"

export const CurrencyContext = createContext()
// console.log(CurrencyContext);

export const AmountContext = createContext()

function App() {
  const [currency, setCurrency] = useState('USD')
  const [amount, setAmount] = useState(0)

  const updateCurrency = () => {
    setCurrency("EURO")
  }
  // console.log(currency);

  const updateAmount = (value) => {
    setAmount(value)
  }
  // console.log(amount);

  return (
    <>
      <CurrencyContext.Provider value={{ currency, updateCurrency }}>
        <AmountContext.Provider value={{ amount, updateAmount }}>
          <div className="container">
            <Payment />

            <input type="text" onInput={(e) => updateAmount(e.target.value)} />

            <button onClick={updateCurrency}>
              Click
            </button>
          </div>
        </AmountContext.Provider>
      </CurrencyContext.Provider>
    </>
  )
}

export default App
