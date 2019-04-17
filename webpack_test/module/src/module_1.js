var info_1="info_1_in_module_1";
var info_default="info_default_in_module_1";
//conflict with module.export
/* export default info_default; 
export{
    info_1 //export with name
}
var info_module_export="info_module_export_in_module_1"; */
var info_module_export="info_module_export_in_module_1";
module.exports=info_module_export;// equal with  export default info_default; 