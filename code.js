let container = document.getElementById('container');
let count = 40;
for (let i = 0; i < 40; i++){
    let rorschachBox = document.createElement('div')
        rorschachBox.className='box';
        container.appendChild(rorschachBox);
}
setInterval(function(){
    let rorschach = document.getElementsByClassName('box');
    for (let i = 0; i< rorschach.length; i++){
        rorschach[i].style.left=Math.floor(Math.random()*90) + 'vw';
        rorschach[i].style.top=Math.floor(Math.random()*90) + 'vh';
    }
},2000)
