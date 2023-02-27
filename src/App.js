import { useState } from "react";
import Api from "./Api";




function App() {
  const [show,setShow] = useState(false)
  const showApi = ()=>{
    setShow(!show)
  }
  return (
    <div className="App" style={{padding:30}}>
        <button onClick={showApi}>Hiện Post</button>
        {show && <Api/>}
        <ul>
          <li>asdasd</li>
          <li>asdasd</li>
          <li>asdasd</li>
          <li>asdasd</li>
          <li>asdasd</li>
        </ul>
    </div>
  );
}

export default App;
