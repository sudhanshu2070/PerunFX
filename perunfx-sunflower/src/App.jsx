import { useState } from 'react'
import './App.css'
import PropComp from './Components/PropComp';
import LifeCycleComp from './Components/LifeCycleComp';
import FileUpload from './Components/FileUpload';
import GridGame from './Components/GridGame';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        {/* <PropComp prop={101} propFunc={()=> alert('hey there')} /> */}
        <PropComp prop={1001} propFunc={() => console.log('testing prop function')} />
        {/* <LifeCycleComp/> */}
        {/* <FileUpload /> */}
        <GridGame />
      </div>
  )
}

export default App
