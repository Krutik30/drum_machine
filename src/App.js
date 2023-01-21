import React from "react";

function App(){
  const [volume , setVolume] = React.useState(1);
  const [recording , setRecording] = React.useState("");
  const [speed, setSpeed] = React.useState(0.5);

  const playRecording = () => {

  }

  return (
    <div className="bg-info min-vh-100 text-white">
      <div className="text-center">
        <h2>Drum Machine</h2>
        {
          
        }
        <br />
        <h4>Volume</h4>
        <input 
          type={"range"}
          step ="0.01"
          onChange={(e) => setVolume(e.target.value)}
          value={volume}
          max="1"
          min="0"
          className="w-50"
          />
          <h3>{recording}</h3>
          {
            recording &&
            <>
              <button onClick={playRecording} className="btn btn-success">Play</button>
              <button onClick={() => setRecording("")} className="btn btn-danger"></button>
              <br />
              <h4>Speed</h4>
              <input 
                type="range"
                step={0.01}
                onChange={(e) => setSpeed(e.target.value)}
                value={speed}
                max="1.2"
                min={0.1}
                className="w-50"
              />
            </>
          }
      </div>
    </div>
  )
}

function Pad({clip , volume , setRecording}) {
  const [active , setActive] = React.useState(false);

  
}

export default App;