let box=document.querySelectorAll(".box");
let colors=['red','green','black','blue','violet',
'yellow','pink','orange','brown']

box.forEach(box=>{
    box.onmouseenter=()=>{
    box.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];
    }
    box.onmouseleave=()=>{
        setTimeout(()=>{
            box.style.backgroundColor="#646464";
        },1000);
        
    }
})