const btnelement = document.querySelector('button');
const spanelement= document.getElementById('updated content');
btnelement.onclick=function(){
    const yourname=prompt("please enter your name.");
    spanelement.textContent=yourname;}
