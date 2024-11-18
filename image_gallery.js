const modal=document.getElementById('modal');
const modalImage=document.getElementById('modal-content');
const modalCaption=document.getElementById('modal-caption');
const modalClose=document.getElementById('modal-close');

const imgs=document.querySelectorAll('img');

imgs.forEach(function(img) {
  img.onclick=function() {
    modal.style.transform='translateY(0px)';
    modalImage.src=this.src;
    modalCaption.innerHTML=this.alt;
  };
});

function hideModal() {
  modal.style.transform='translateY(100%)';
}

modalClose.onclick=hideModal;
modal.onclick=hideModal;