var frame=require("ui/frame");
var fileSystem = require("file-system");
var ObservableArray=require ("data/observable-array").ObservableArray;
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
  var height= page.getViewById('height').text;
  
 
 

  
  height22= height*height;
  console.log(height22);
   var bmi=mass/height22;
   var us1=bmi; 
   var us=us1.toFixed(2);
      
console.log(us);


var id=2;
var saved=[{ id:"1", value:"ddd"}];
saved.push({id:id , value:us});

file.writeText(JSON.stringify(saved));
id++;

frame.topmost().navigate({ moduleName:"views/result/result",
context:{model:us}});

}
exports.done= done;

function selected(){
  var btn=page.getViewById('btn');
  var btn2=page.getViewById('btn2');
  btn.className="active";
  btn2.className="inactive";
  
}
exports.selected=selected;

function selected2(){
  var btn=page.getViewById('btn');
  var btn2=page.getViewById('btn2');
  btn2.className="active";
  btn.className="inactive";
  
}
exports.selected2=selected2;



exports.us=function(){
 /* var u=page.getViewById('us');
  var m=page.getViewById('metric');
  u.className="active";
  m.className="inactive";*/
  
  frame.topmost().navigate("views/us-unit/us-unit");
}