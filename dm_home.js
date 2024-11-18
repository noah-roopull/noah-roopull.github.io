const cons=document.getElementById('console');
cons.setAttribute('style','white-space:pre');
var info="Hello, world!\n\n";
info+="My name is Noah Ruppel.| Welcome to my home page.\n\n";
info+="I'm a freshman at GGC,| and I plan on working in software development.\n\n";
info+="Use the navigation menu at the top to take a look at my Digital Media portfolio.";
var ind=0;
function slowType() {
  if (ind<info.length) {
    const c=info.charAt(ind);
    ind++;
    switch (c) {
      case "|":
        setTimeout(slowType,200);
        break;
      case "\n":
        cons.innerHTML+=c;
        setTimeout(slowType,200);
        break
      default:
        cons.innerHTML+=c;
        setTimeout(slowType,30);
        break
    }
  }
}
const canvas=document.createElement("canvas");
document.body.appendChild(canvas)
var ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
canvas.style.position='absolute';
canvas.style.top=0;
canvas.style.left=0;
canvas.style.zIndex='-1';

var alpha="0123456789ABCDEF";
alpha=alpha.split('');
var fontsize=12;
var numcols=canvas.width/fontsize;
var cols=[];
for (var i=0;i<numcols;i++) {
  cols[i]=1;
}

function draw() {
  ctx.fillStyle='rgba(0,0,0,0.2)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle='#0f0';
  ctx.font="12px Courier New"
  for (var i=0;i<cols.length;i++) {
    var t=alpha[Math.floor(Math.random()*alpha.length)];
    ctx.fillText(t,i*fontsize,cols[i]*fontsize);
    cols[i]++;
    if (cols[i]*fontsize>canvas.height&&Math.random()<0.05) {
      cols[i]=0;
    }
  }
}

window.addEventListener('resize',()=>{
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  numcols=canvas.width/fontsize;
  cols=[];
  for (var i=0;i<numcols;i++) {
    cols[i]=1;
  }
});
setInterval(draw,40);
slowType();
