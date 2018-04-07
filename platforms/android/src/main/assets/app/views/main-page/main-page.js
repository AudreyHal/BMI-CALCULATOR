var frame= require("ui/frame")


exports.loaded=function(){
    
}
exports.us=function(){
   frame.topmost().navigate("views/us-unit/us-unit");
}

exports.metric=function(){
    frame.topmost().navigate("views/metric/metric");
 }
 exports.history=function(args){ 
    frame.topmost().navigate("views/history/history");
    }