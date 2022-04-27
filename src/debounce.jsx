import { useState } from "react";


export default function Debounce() {
  const [db, setdb] = useState("")

  return (
    <div className="App">
      <input
        placeholder="type something it will come after 5sec"
        onInput={(el) => {
          setTimeout(() => {
            setdb(el.target.value);
            console.log(el.target.value);
          }, 5000);
        }}
        type="text"
      />

      <h3>{db}</h3>
    </div>
  );
}
