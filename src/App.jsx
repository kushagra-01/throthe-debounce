import { useState } from "react";
import Debounce from "./debounce";
import Throthle from "./throtthle";



export default function App() {
  
  const [text,settext]=useState("ascending")

  const handle=(e)=>{
if(text=="ascending"){
  settext("descending")
}
else{
  settext("ascending")
}
  }

  return (
    <div className="App">
     <Debounce/>
     <Throthle/>
     <button onClick={((e)=>{handle(e.target.value)})}>{text}</button>
    </div>
  );
}
