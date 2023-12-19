function update(event){
    //selecting input
    var user_inpt=document.getElementById("input-text")
    //selecting div
    var divu=document.querySelector(".res")
    var item=document.createElement("div")
    item.innerHTML=`<p class="para">${user_inpt.value}</p><button class="deletebutton" onclick="deletefunc(event)">x</button>`
    divu.append(item)
    user_inpt.value=''  
}
function deletefunc(event){
    event.target.parentElement.remove()
}