import { useState } from "react";
import Api from "./Api";
import Content from "./Content";




function App() {
  const [show,setShow] = useState(false)
  const showApi = ()=>{
    setShow(!show)
  }
  return (
    <div className="App" style={{padding:30}}>
        <button onClick={showApi}>Hiện Post</button>
        {show && <Api/>}
    </div>
  );
}

export default App;
