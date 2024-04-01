var myNodeList = document.getElementsByTagName("li");
var TodoUl = document.getElementById("myUl");
function send() {
    let ShortText =  document.getElementById("TodoText").value
    if(ShortText == ''){
        alert ("Please input form")
    }else{
        const newItem = document.createElement("li");
        newItem.textContent = ShortText;
        TodoUl.appendChild(newItem)
        var Closer  = document.createElement("span")
        Closer.classList.add('close');
        Closer.textContent = 'x';
        newItem.appendChild(Closer)
        newItem.addEventListener("click",function(){
            newItem.classList.toggle('checked');
        })
        Closer.addEventListener("click",function(){
            newItem.remove();
        })
    }
}