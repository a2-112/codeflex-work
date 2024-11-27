
    const listItem =[
        "Table Challenge",
        "Flex Challenge",
        "Grid Challenge",
        "Randomcolor Challenge",
        "Form Challenge",
        "Image Challenge",
        "Task Challenge"
    ];
    let data = 
document.getElementById("list");
listItem.forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item;
    data.appendChild(li);
})

 