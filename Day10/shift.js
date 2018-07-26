const boxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
    let inBetween = false;
    if(e.shiftKey && this.checked){
        boxes.forEach(box =>{
            console.log(box);
            if(box === this || box === lastChecked){
                inBetween = !inBetween;
                console.log('starting');
            }
            
            if(inBetween){
                box.checked = true;
            }
        });}
    lastChecked = this;
    }
    
    

boxes.forEach(box => box.addEventListener('click', handleCheck));