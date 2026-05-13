function openModal(id){
document.getElementById(id).style.display='flex';
}

function closeModal(id){
document.getElementById(id).style.display='none';
}

window.onclick=function(event){

const white=document.getElementById('whiteModal');
const blue=document.getElementById('blueModal');

if(event.target==white){
white.style.display='none';
}

if(event.target==blue){
blue.style.display='none';
}

}
