require("jquery");
require(".\\module_1.js");
require(".\\module_2.js");
require(".\\pack_css.css");
import {fun1}from ".\\module_3.js";
document.querySelector("#p1").innerHTML="p1_changed";
$("#p4").text("using_jquery");
fun1();
//LazyLoading test
document.querySelector("#btn_Chunk_1").addEventListener("click",function(){
   require.ensure(
    [],//rely module,will be load before callback
   function(require){
    var func=require(".\\LazyLoading_Chunk_1.js").chunk_1_func_exportName;
    func();
   },
   "Chunk_1_webpacked"
   );


});
document.querySelector("#btn_Chunk_2").addEventListener("click",function(){
    require.ensure(
     [],//rely module,will be load before callback
    function(require){
     var func=require(".\\LazyLoading_Chunk_2.js").default;
     func();
    },
    "Chunk_2_webpacked"
    );
 
 
 });