import React from "react";
import { useState, useEffect } from "react";

function Pad({prop}){

    const [active , setActive] = React.useState(false);

    React.useEffect(() => {
        document.addEventListener("keydown", handleKey);
        return () => {
          document.removeEventListener("keydown", handleKey);
        };
      }, []);

    function handleKey(event){
        if(event.keyCode === prop.keyCode){
            playSound();
        }
    }

    const playSound = () => {
        const audioTag = document.getElementById(prop.keyTrigger);
        setActive(true);
        setTimeout(() => setActive(false), 200);
        audioTag.volume = 1;
        audioTag.currentTime = 0;
        audioTag.play();
      };

    return(
        
        <div className="pads" onClick={playSound}>
            <audio onClick={handleKey} className="clip" id={prop.keyTrigger} src={prop.url} />
            {prop.keyTrigger}
        </div>
    )
}

export default Pad;