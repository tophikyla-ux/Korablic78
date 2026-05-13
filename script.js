function openModal(id){
  document.getElementById(id).style.display = "flex";
}
function closeModal(id){
  document.getElementById(id).style.display = "none";
}
window.onclick = function(event){
  const whiteModal = document.getElementById('whiteModal');
  const blueModal = document.getElementById('blueModal');
  if(event.target === whiteModal){
    whiteModal.style.display = "none";
  }
  if(event.target === blueModal){
    blueModal.style.display = "none";
  }
}
