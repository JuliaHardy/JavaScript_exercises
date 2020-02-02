const music = document.querySelector('.music');
            
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults =true;
let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

function change_color(color){
    words.style.background = color;
}

recognition.addEventListener('result', e =>{
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
    .join('')
    
    
    p.textContent = transcript;
    if(e.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p);
    }
    if(transcript.includes('listen music')){
        music.currentTime = 0;
        music.play();
    }
    if(transcript.includes('stop music')){
            music.pause();
            currentTime = 0;
    }
    
    if(transcript.includes('Red' || 'red')){
        change_color('red');
    }
    if(transcript.includes('Pink' || 'pink')){
        change_color('pink');
    }
    if(transcript.includes('Green' || 'green')){
        change_color('green');
    }
    
    console.log(transcript);
    
});

recognition.addEventListener('end', recognition.start);

recognition.start();
