import { useState } from 'react'
import './App.css'
import GemMain from './components/main-gem-coin/gemCoin'
import AboutUs from './components/aboutUs/aboutUs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GemMain/>
<AboutUs/>
    </>
  )
}

export default App
