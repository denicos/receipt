import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Copy your Recipt</h1>
      <div className='container'>
        <div className='empty'>

        </div>

        <div className="card">

          <p>Recipt No. #Rf387rr1</p>
          <h1>$75.00</h1>
          <p>Paid 15 Jan, 2024</p>

          <hr />
          <div>
            
          </div>
          <button style={{ color: 'white', background: 'rgb(25, 97, 169)'}}>Copy</button>
        </div>
      </div>

    </>
  )
}

export default App
