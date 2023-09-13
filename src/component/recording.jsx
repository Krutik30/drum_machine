import { useState } from "react";

const [recording , setRecording] = React.useState("");

const playRecording = () => {
    let index = 0;
    let recordArray = recording.split("");
    const interval = setInterval(() => {
      const audioTag = document.getElementById(recordArray[index]);
      audioTag.volume = volume;
      audioTag.currentTime = 0;
      audioTag.play();
      index++;
    }, speed * 600);
    setTimeout(
      () => clearInterval(interval),
      600 * speed * recordArray.length - 1
    );
  };