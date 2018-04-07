var frameModule=require("ui/frame");
var ObservableArray=require ("data/observable-array").ObservableArray;
var fileSystem = require("file-system");

exports.loaded=function(args){
    page= args.object;
    var fileName="myFile.json";
    var file=fileSystem.knownFolders.documents().getFile(fileName);
    //var saved=file.readTextSync();
    
    
    var saved= file.readTextSync();
    console.log("Read from the file" + saved);
   /* var data=new ObservableArray(saved);
    for (i=0; i<data.length;i++){

  
        console.log(data.getItem(i).value);
      }*/
    }

