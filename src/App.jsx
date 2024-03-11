import { createContext } from "react"
import Payment from "./components/Payment"

export const CurrencyContext = createContext("USD")
// console.log(CurrencyContext);

function App() {
  return (
    <> 
      <CurrencyContext.Provider>
        <div className="container">
          <Payment />
        </div>
      </CurrencyContext.Provider>
    </>
  )
}

export default App
