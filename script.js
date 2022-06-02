let inputTag = document.querySelector("input");
let ulTag = document.querySelector("ul");
let spanTag = document.querySelector("span");
let count=0;

inputTag.addEventListener('keydown',function(e){
    let key =e.key;

    if(key=='Enter'){
        
        let value = inputTag.value;
        inputTag.value=""; 
        if(value!=""){
            count++;
            let liTag= document.createElement("li");
            // liTag.innerText = value;
            spanTag.innerText =  count;
            liTag.innerHTML = `<div>${value}</div>
                                <div class="delete"><i class="fa fa-trash"></i></div>`

            handleRemoval(liTag);
            ulTag.appendChild(liTag);
        }
        
    }
})

function handleRemoval(liTag){
    let deleteDiv = liTag.querySelector(".delete");
    deleteDiv.addEventListener("click",function(){
        count=count-1;
        spanTag.innerText = count;
        liTag.remove();
    })
}