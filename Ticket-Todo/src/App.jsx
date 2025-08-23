import { useState } from 'react'
import TicketForm from './Components/TicketForm'
import HomePage from './Components/HomePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomePage />
    </>
  )
}

export default App
