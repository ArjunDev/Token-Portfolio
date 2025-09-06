import { useState } from 'react'
import Home from '../src/home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[rgba(35,35,35,1)] min-h-screen min-w-screen flex justify-center items-start'>
      <Home/>
    </div>
  )
}

export default App
