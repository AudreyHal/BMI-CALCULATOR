var frameModule=require("ui/frame");

exports.loaded=function(args){
    page= args.object;
   var model= page.navigationContext;
   page.bindingContext=model;
  }
  
  