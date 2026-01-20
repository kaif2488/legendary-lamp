import { useState } from 'react'
import './App.css'
import { property } from './components/property'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><p>
    <property></property></p>
    </>
  )
}

export default App
