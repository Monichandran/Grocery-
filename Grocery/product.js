

var productcontainer=document.getElementById("grocery");
var Search=document.getElementById("search");
var productlist=productcontainer.querySelectorAll("div");//this means selecting all div of products div

Search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase();
    for(i=0;i<productlist.length; i++)
    {
        var productname=productlist[i].querySelector("h3").textContent
///this was selecting the products div section and particularly select p tag and the text  
      if(productname.toUpperCase().indexOf(enteredValue)< 0){
        productlist[i].style.display="none";
      }
      else{
        productlist[i].style.display="block";
      }
    }
})