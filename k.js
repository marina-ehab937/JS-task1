
function power(x,y){
    
    if(y<=0){
        return 1;
    }
    for(var i=1;i<y; i++){
         x=x*x;
        i++;
    }
    return x;
   
}
var nc=Number(prompt("enter how many numbers do u want"));
for(var i=1;i<nc;i++){
 var num=Number(prompt("enter the num"));
    
var PofN=Number(prompt("enter the powe of num"));
i++;

}
var result=power(num,PofN);
console.log("the power"+PofN+"of number"+num +"is"+result);