import { useState } from 'react'
import './App.css'
import GemMain from './components/main-gem-coin/gemCoin'
import AboutUs from './components/aboutUs/aboutUs'
import HowToBuy from './components/toBuy/toBuy'
import Tokenomics from './components/tokenomics/tokenomics'
import Roadmap from './components/roadmap/roadmap'
import Faq from './components/faq/faq'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GemMain/>
<AboutUs/>
<HowToBuy/>
<Tokenomics/>
<Roadmap/>
<Faq/>
    </>
  )
}

export default App
