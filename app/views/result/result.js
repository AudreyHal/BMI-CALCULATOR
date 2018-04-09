var frame=require("ui/frame");
var fileSystem = require("file-system");

exports.loaded=function(args){
    page= args.object;
   var model= page.navigationContext;
   page.bindingContext=model;
   var ids=page.getViewById('model').text;
 if (ids<18.5){page.getViewById('status').text ="UNDERWEIGHT";}
 else if (ids>=18.5 && ids<25  ){page.getViewById('status').text ="NORMAL3";}
 else if (ids>=25 && ids<30  ){page.getViewById('status').text ="OVERWEIGHT";}
 else if (ids>=30 && ids<35  ){page.getViewById('status').text ="OBESE";}
 else if (ids>=35 ){page.getViewById('status').text ="MORBIDLY OBESE";}


 if (ids<18.5){page.getViewById('status2').text ="Oops! You really need to take better care of yourself. You should consider increasing your calorie intake";}
 else if (ids>=18.5 && ids<25  ){page.getViewById('status2').text ="Congratulations!! You are in good shape";}
 else if (ids>=25 && ids<30  ){page.getViewById('status2').text ="You most likely have too much weight in relation tro your height. ";}
 else if (ids>=30 && ids<35  ){page.getViewById('status2').text ="DANGER! You are Obese and at a much higher risk of developing chronic diseases and shortening your lifespan";}
 else if (ids>=35 ){page.getViewById('status2').text ="DANGER!!! You are in a state proven to cause dangerous health issues ";}
 


 
 console.log(ids);
  }
  
 