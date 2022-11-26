const box = document.getElementById("box");

box.addEventListener("mouseover", function () {
    const boxHeight = this.offsetHeight;  
    const boxWidth = this.offsetWidth;  
     //console.log("boxHeight", boxHeight);
     //console.log("boxWidth", boxWidth);
    let position = getNewPosition(boxWidth, boxHeight);
    box.style.top = position.y + "px";
    box.style.left = position.x + "px";
});

box.addEventListener("mouseup", function () {
    const boxHeight = this.offsetHeight;  
    const boxWidth = this.offsetWidth;  
    // console.log("boxHeight", boxHeight);
    // console.log("boxWidth", boxWidth);
    let position = getNewPosition(boxWidth, boxHeight);
    box.style.top = position.y + "px";
    box.style.left = position.x + "px";
});

function getNewPosition(boxWidth, boxHeight) {
    let newposX = Math.floor((Math.random() * innerWidth) + 1 - boxWidth);
    let newposY = Math.floor((Math.random() * innerHeight) + 1 - boxHeight);
    if(newposX < 0) {
        newposX = 0;
    }
    if(newposY < 0) {
        newposY = 0;
    }
    
    return {x: newposX, y: newposY};
}