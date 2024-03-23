import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleCalc from './SimpleCalc';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="SimpleCalc">
      <h1>Simple Calculator</h1>
      <SimpleCalc />
    </div>
  )
}

export default App
