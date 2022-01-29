document.getElementById("btn-add").addEventListener("click",ajouter)
afficher()
function ajouter()
{
    var value=document.getElementById("text").textContent.trim()
    if(value!=""){
        localStorage.setItem(key(),value)
      window.location.href=""
    }
    
}
function key()
{
    return localStorage.length+1
}
function afficher()
{
  
    for(var i=1;i<=localStorage.length;i++)
    {
        document.getElementById("cnt").innerHTML+="<tr><td>"+i+"</td><td>"+localStorage.getItem(i)+"</td><td><i onclick='deletecar(this)' class='fas fa-trash'></i></td?</tr>"
    }
}
function deletecar(el)
{
    var X=el.parentElement.parentElement.children[0].textContent
    if(confirm("would you remove this car"))
    {
    localStorage.removeItem(X);
    window.location.href=""
    }

}