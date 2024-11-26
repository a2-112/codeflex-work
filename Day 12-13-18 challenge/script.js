

function genRandomColor(){
    const text="0123456789ABCDEF"
    let color = "#"
    for (let i=0; i<6; i++){
        color += text[Math.floor(Math.random()* 16)];
    }
    return color;
}
document.getElementById("btn").addEventListener("click",function(){
    document.body.style.backgroundColor =genRandomColor()
})
