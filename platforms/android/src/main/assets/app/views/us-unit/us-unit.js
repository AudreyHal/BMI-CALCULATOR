var frame=require("ui/frame");
var page;
var name;
var model=null;

exports.loaded=function(args){
  page= args.object;

}






function done(){
 var mass= page.getViewById('mass').text;
  var height= page.getViewById('height').text;
  
  
   height2= height*height;
   var bmi=mass/height2;
   var us=703*bmi;
   var model=us;
      
console.log(us);


frame.topmost().navigate({ moduleName:"views/result/result",
context:{model:us}});

}
exports.done= done;