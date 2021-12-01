
window.addEventListener("load",LoadCustomer)

function LoadCustomer(){
    var http=new XMLHttpRequest();
    http.open("GET","https://jsonplaceholder.typicode.com/photos/")
    http.send();
    http.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)
        {
        var data=JSON.parse(this.response)
        console.log(data)
        BindPhotos(data)
        }
    }
}

function BindPhotos(data){

 var temp=``;
 
 data.forEach(d=>{
temp+=`<div class="col-3"><div class="card" style="width: 18rem;">
 <img src="${d.url}" class="card-img-top" alt="...">
 <div class="card-body">
   <h5 class="card-title">${d.title}</h5>
   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <a href="#" class="btn btn-primary">Go somewhere</a>
 </div>
</div></div>`
})  

document.querySelector(".row").innerHTML=temp;
}