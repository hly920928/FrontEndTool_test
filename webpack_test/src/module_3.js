function fun1(){
    console.log("fun1");
}
function fun2(){
    console.log("fun2");
}
function fun3(){
    console.log("fun3");
}
export{fun1};//don't export unwanted function ,using uglifyjs then webpack can remove unneeded function