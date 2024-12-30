import { useState } from 'react'
import './App.css'
import Header from './Header'
import Menu from './Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Menu />
    </>
  )
}

export default App
