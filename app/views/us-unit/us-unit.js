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
 /*var mass= page.getViewById('mass').text;
  var height1= page.getViewById('height1').text;
  var height2= page.getViewById('height2').text;*/
  var height1="5";
  var height2="5";
  var mass="200";

 var height12= height1 * 12;
 var height=+height12 + +height2;
 console.log(height);


  
  height22= height*height;
  console.log(height22);
   var bmi=mass/height22;
   var us1=703*bmi; 
   var us=us1.toFixed(2);
      
console.log(us);
var  saved=[];
saved.push(us);
file.writeText(JSON.stringify(saved));
frame.topmost().navigate({ moduleName:"views/result/result",
context:{model:us}});

}
exports.done= done;