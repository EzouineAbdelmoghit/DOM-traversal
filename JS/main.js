let ChangeBtn =document.getElementById("Btn")
let i=0;
let e = Array.from(ChangeBtn.parentElement.previousElementSibling.children)
console.log(e);

ChangeBtn.addEventListener("click",function(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor)
    // console.log(ChangeBtn.parentElement.previousElementSibling.children[i]);
    let item=ChangeBtn.parentElement.previousElementSibling.children[i]
    if(i > e.length-1){
            i=0
            e.forEach(element => {
            element.style="background-color:white"
            // console.log(element);
        });
    }
    else{
        item.style.backgroundColor="#"+randomColor
        ++i
        // console.log(i);
    }
})