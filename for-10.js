// // my tasks by for loop
var myEverydayTasks = ['1.Module unlock at 8', '2.Practicing after having watched videos', '3.Taking notes while watching videos', '4.At the end of the module,practice myself', '5.If i cannot understand anything,join support session','1.Module unlock at 8', '2.Practicing after having watched videos', '3.Taking notes while watching videos', '4.At the end of the module,practice myself', '5.If i cannot understand anything,join support session'];
for(var i = 0; i < myEverydayTasks.length; i++){
    var myEverydayTask = myEverydayTasks[i];
    console.log(myEverydayTask);
    if(i>=(myEverydayTasks.length/2)){
        break;
    }
    
}
