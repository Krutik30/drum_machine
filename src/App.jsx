/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from "react";
import audioClips from "./component/audio";
import audioClips2 from "./component/audio2";
import Pad from "./component/pad";
import './App.css'


function App(){
  const [checked , setChecked] = useState(false);

  function handleChange(){
    setChecked(!checked);
  }

  return (
    <div className="Drum-Machine">
        <div className="butn">
          {(checked ? audioClips : audioClips2).map((prop,id) => {
            return <Pad key={id} prop={prop} />
          })}
        </div>
        <button onClick={handleChange} className="btn btn-primary w-25">{checked ?"Jadu":"Rohit"}</button>
    </div>
  )
}


export default App;