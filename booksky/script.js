var popupoverlay = document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.querySelector(".add-button")
addpopupbutton.addEventListener("click",function(){
    popupoverlay.Style.display="block"
    popupbox.style.display="block"
   
})

var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.Style.display="none"
    popupbox.Style.display="none"
})


var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput= document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")

addbook.addEventListener("class",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML='<h2>${booktitleinput.value}</h2><h5>${bookauthorinput.value}</h5><p>${bookdescriptioninput.value}</p><button>Delete</button>'
    container.append(div)
    popupoverlay.Style.display="none"
    popupbox.Style.display="none"
})
function deletebook(event)
{
    event.target.parentElement.remove()
}