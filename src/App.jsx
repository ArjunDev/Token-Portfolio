import { useState } from 'react'
import Home from '../src/home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[rgba(35,35,35,1)] flex justify-center items-start w-full h-full'>
      <Home/>
    </div>
  )
}

export default App
