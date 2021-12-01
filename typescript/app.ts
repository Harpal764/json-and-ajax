//let str:string="welcome to chetu !";

/*
console.log(str.slice(0,7))
console.log(str.substring(0,7))
console.log(str.substr(11,5))
*/
//console.log(str.split(""))
/*
console.log(str.toUpperCase())
console.log(str.toLowerCase())
*/

/*
console.log(str.startsWith("we"))
console.log(str.endsWith("x"))
*/
//console.log(str.indexOf("l"))

//console.log(str.strike())
/*
console.log(Math.pow(10,3))
console.log(Math.ceil(10.4))
console.log(Math.floor(10.4))
console.log(Math.round(10.4))
console.log(Math.random()*100*100)
console.log(Math.abs(-10))
console.log(Math.sqrt(10))
console.log(Math.PI)
*/

// setInterval(()=>{
// let today=new Date();
// document.body.innerHTML=(today.toLocaleTimeString().toString())
// },1000)
//setInterval(rbc,3000);

// function rbc(){
    //let x = (Math.floor(Math.random()*256));
 //   let y = (Math.floor(Math.random()*256));
   // let z = (Math.floor(Math.random()*256));
   // let bcs = "rgb("+x+","+y+","+z+")";
   // document.body.style.background = bcs;
//}

// function reversestr(str:string){
//     let rev:string[]=[];
//     for(let i=str.length-1; i>=0; i--){
//         rev.push(str[i])
//     }

//    let revstr=rev.join("")
//    if(str==revstr){
//        return true
//    }
//    else{
//        return false;
//    }
// }

// console.log(reversestr("abba"));
/*
var myabbr_Name = function(str1){
    var split_names = str1.trim().split(" ");
    if(split_names.length>1){
        return (split_names[0].charAt(0)+ "." + split_names[1].charAt(0)+ "."+ split_names[split_names.length-1]);
        
    }
    return split_names[0];
}

setTimeout(()=>{
document.write(myabbr_Name("rakesh kumar singh"));
},10000)

let test=function()
{

return 
10

}

var  r=test();()
{

return 
10

}

var  r=test();
*/

class BaseEmployee{
    public id:number;
    public name:string;
    protected salary:number=140000;
    public gender:string;
}

class Employee extends BaseEmployee{
    constructor(id:number,name:string,gender:string){
       super();
        this.id=id;
        this.name=name;
        this.gender=gender;
    }

    public calculateSalary(commision:number){
        return this.salary/12+commision;
    }
}

let emp=new Employee(101,"deepak","male");
console.log(emp)
































