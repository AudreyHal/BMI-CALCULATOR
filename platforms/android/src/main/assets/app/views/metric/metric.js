var frame=require("ui/frame");
var page;
var name;
var model=null;

exports.loaded=function(args){
  page= args.object;
}

function done(){
   var age= page.getViewById('age').text;
   var mass= page.getViewById('mass').text;
   var height= page.getViewById('height').text;
   height12= height*height;
   height22=height12/10000;
   var bmi=mass/height22;
   var us1=bmi; 
   var us=us1.toFixed(2);
 
if (!age|| !height||!mass )
{console.log("empty");
 page.getViewById('msg').text ="Please do not leave any field empty";}
else{
frame.topmost().navigate({ moduleName:"views/result/result",
context:{model:us}});
}}
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
   frame.topmost().navigate("views/us-unit/us-unit");
}