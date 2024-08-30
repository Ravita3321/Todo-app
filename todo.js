let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = " ";
})
let delBtn = document.querySelectorAll(".delete");
for(delBtn of delBtn){
    delBtn.addEventListener("click", function(){
        let par = this.parentElement;
        console.log(par);
        par.remove();
    });
    //bubling or permanent delete the element
    ul.addEventListener("click", function(event){
        if(event.target.nodeName == "BUTTON")
        {
            let ListItem = event.target.parentElement;
            ListItem.remove();
            console.log("deleted");
        }
    });
}