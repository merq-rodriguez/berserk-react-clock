import React, { useEffect, useRef } from 'react';

function ClockComponent({
  gradient,  
  locales = ['es-ES'], 
  optionsLocaleDate, 
  optionLocaleTime, 
  color = '#59df7a', 
  dateColor = '#09b8be' 
}){

  const canvas = useRef(null);
  const width = 500;
  const height = 500;

  function hasGradient(){
    return gradient;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      var context = canvas.current.getContext("2d");
      context.save();
      context.strokeStyle = color;
      context.lineWidth = 17;
      context.lineCap = 'round';
      context.shadowBlur = 7;
      context.shadowColor = color;
      renderTime(context)
    }, 40);    
    return () => clearInterval(interval);
  }, [])

  function degToRoad(degree){
    var factor = Math.PI / 180;
    return factor * degree;
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function renderTime(context) {
    let now  = new Date();
    let today = capitalizeFirstLetter(now.toLocaleDateString(locales, optionsLocaleDate));
    let newToday = today.split(",");
    let weekday = newToday[0];
    let newDate = newToday[1];
    let time = now.toLocaleTimeString(locales, optionLocaleTime);
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let milliseconds = now.getMilliseconds();
    let newSeconds = seconds + (milliseconds / 1000);

    //background
    if (hasGradient()){
      let gradient = context.createRadialGradient(250, 250, 1, 250, 250, 250);
      gradient.addColorStop(0, '#09303a');
      gradient.addColorStop(1, 'black');
      context.fillStyle = gradient;
    }

    context.fillRect(0, 0, width, height);
    
    if(!hasGradient()){
      context.clearRect(0,0, width, height);
    }

    //Hours
    context.beginPath();
    context.arc(250, 250, 200, degToRoad(270), degToRoad((hours * 15) - 90));
    context.stroke();

    //Minutes
    context.beginPath();
    context.arc(250, 250, 170, degToRoad(270), degToRoad((minutes * 6) - 90));
    context.stroke();

    //Seconds
    context.beginPath();
    context.arc(250, 250, 150, degToRoad(270), degToRoad((newSeconds * 6) - 90));
    context.stroke();

    //Weekday
    context.fillStyle = dateColor;
    context.font = '22px Arial';
    context.fillText(weekday, 150, 230);
    
    //Date
    context.fillStyle = dateColor;
    context.font = '18px Arial';
    context.fillText(newDate, 145, 260);

    //Time
    context.fillStyle = dateColor;
    context.font = '15px Arial';
    context.fillText(time, 150, 290);
  }

  return (
    <canvas 
      width={width} 
      height={height}
      ref={canvas}
      >
    </canvas>
  );
}

export default ClockComponent;