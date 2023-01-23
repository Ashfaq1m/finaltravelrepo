cardtit=document.getElementById("titlecard");
carddes=document.getElementById("desccard");

function getvals(){
    //get exisiting arr
    let titlearr=[]
    let descarr=[]
    titlearr.push(cardtit.value);
    descarr.push(carddes.value);
    localStorage.setItem("title",JSON.stringify(titlearr));
    localStorage.setItem("description",JSON.stringify(descarr));
    
    if(localStorage.getItem('title')!=null){
        titlearr=JSON.parse(localStorage.getItem("title"));
        descarr=JSON.parse(localStorage.getItem("description"));
    }
}
var psh=document.getElementById("push");
psh.addEventListener("click",function(){
    if(cardtit!=null && carddes!=null)
        getvals();
})
