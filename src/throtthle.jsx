import { useState } from "react";


export default function Throthle() {
  const [db, setdb] = useState("")

  return (
    <div className="App">
      <input
        placeholder="type something it will come after 5sec"
        onInput={(el) => {
  
            setdb(el.target.value.length) 
          
        
        }}
        type="text"
      />

      <h3>{db}</h3>
    </div>
  );
}
