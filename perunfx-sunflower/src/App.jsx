import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropComp from './PropComp'
import LifeCycleComp from './LifeCycleComp'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        {/* <PropComp prop={101} propFunc={()=> alert('hey there')} /> */}
        <PropComp prop={1001} propFunc={() => console.log('testing prop function')} />
        {/* <LifeCycleComp/> */}
      </div>
  )
}

export default App
