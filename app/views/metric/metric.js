var frame=require("ui/frame");
var fileSystem = require("file-system");
var page;
var name;
var model=null;

exports.loaded=function(args){
  page= args.object;


}






function done(){
    var fileName="myFile.json";
    var file=fileSystem.knownFolders.documents().getFile(fileName);
 var mass= page.getViewById('mass').text;
  var height1= page.getViewById('height1').text;
  var height2= page.getViewById('height2').text;

 var height= (height1 *12) + height2;


  
   height2= height*height;
   var bmi=mass/height2;
   var us=703*bmi;
   var model=us;
      
console.log(us);
var  saved=[];
saved.push(us);
file.writeText(JSON.stringify(saved));
frame.topmost().navigate({ moduleName:"views/result/result",
context:{model:us}});

}
exports.done= done;