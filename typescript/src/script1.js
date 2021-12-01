var IncrementCount=(function(){
var count=0;

return function(){
    count++;
    return count;
}

})()