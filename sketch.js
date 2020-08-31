var morningwakeup ;
var classs ;
var dinner;
var homework;
var lunch;
var sleep;
var school;
function preload() {
 classs= loadSound('class.m4a');
 morningwakeup = loadSound('eight.m4a');
dinner = loadSound('dinner.m4a')
homework = loadSound('homework.m4a')
lunch = loadSound('lunch.m4a')
sleep = loadSound('sleepepepepe.m4a')
 school = loadSound('school.m4a')
}
 
 var hour, minute
function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background('lightblue');  
 textSize(40);
text(hour+' : '+minute,600,70)


   getTime();
 if(hour==8){
   text('its 8 am, please wake up ',200,140)
 morningwakeup.play();
 morningwakeup.setVolume(0.4);
 } 
 if(hour==8&&minute==50){
   text('its time for school, get ready',200,140)
   school.play();
   school.setVolume(0.4);
 }
 if(hour==13){
   text('its 1 pm, please eat lunch ',200,140)
   lunch.play();
   lunch.setVolume(0.4);
 } 
 if(hour==16){
   text('its 4 pm, time to do your homework! ',200,140)
homework.play();
homework.setVolume(0.4);
 } 
if(hour==18){
  text('its 6 pm, time for class ',200,140)
classs.play();
classs.setVolume(0.4);

} 
if(hour==7 && minute == 30){
  text('its 7:30 pm,  time for dinner ',200,140)
dinner.play();
dinner.setVolume(0.4);
} 
 
 if(hour==22){
    text('its 10 pm, time to go to bed ',200,140)
sleep.play();
sleep.setVolume();
 } 
}
async function getTime(){
var api = await fetch('http://worldtimeapi.org/api/timezone/Asia/kolkata')
 var apijson = await api.json()
 var datetime  = apijson.datetime   
  hour = datetime.slice(11,13)
  minute = datetime.slice(14,16)
console.log (hour );
 
 
}






