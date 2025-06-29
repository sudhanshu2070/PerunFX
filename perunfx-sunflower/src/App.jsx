import { useState } from 'react'
import './App.css'
import PropComp from './Components/PropComp';
import LifeCycleComp from './Components/LifeCycleComp';
import FileUpload from './Components/FileUpload';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        {/* <PropComp prop={101} propFunc={()=> alert('hey there')} /> */}
        <PropComp prop={1001} propFunc={() => console.log('testing prop function')} />
        {/* <LifeCycleComp/> */}
        <FileUpload />
      </div>
  )
}

export default App
