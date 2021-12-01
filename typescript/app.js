//let str:string="welcome to chetu !";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var BaseEmployee = /** @class */ (function () {
    function BaseEmployee() {
        this.salary = 140000;
    }
    return BaseEmployee;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, gender) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.gender = gender;
        return _this;
    }
    Employee.prototype.calculateSalary = function (commision) {
        return this.salary / 12 + commision;
    };
    return Employee;
}(BaseEmployee));
var emp = new Employee(101, "deepak", "male");
console.log(emp);
