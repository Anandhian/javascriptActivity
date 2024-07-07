var today=new Date()
var day=today.getDate()
var daylist=["s","m","t","w","th","f","sa"]
console.log(daylist[day])
var hour=today.getHours()

var min=today.getMinutes()
var sec=today.getSeconds()


var prepand=(hour>=12)?"pm":"am";
console.log(hour+": "+min+": "+sec+" "+prepand)
hour=(hour>=12)?hour-12:hour;
