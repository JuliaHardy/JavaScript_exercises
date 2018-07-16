const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    secondsDegres =((seconds /60) *360)+90;/*beacouse of transform-origin = 90%*/
    minutesDegres =((minutes/ 60)*360)+90;
    hoursDegres =((hours/ 60)*360)+90;
    
    secondHand.style.transform =`rotate(${secondsDegres}deg)`;
    minHand.style.transform =`rotate(${minutesDegres}deg)`;
    hourHand.style.transform =`rotate(${hoursDegres}deg)`;
    
}

setInterval(setDate, 1000);