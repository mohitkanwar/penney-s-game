function launchCoinFlipper(){
showtossing();
 setTimeout(function(){
 
 var isHead= Math.random()<.5;
if(isHead){
showHead();
}
else{
showTail();
}
 checkCompetitionResults();
 },getRandomTime() * 1000);

}

function showHead(){
$("#coin").removeClass("tossing");
$("#coin").removeClass("flipping");
$("#coin").removeClass("tail");
$("#coin").addClass("head");
showResults("H");
}
function showTail(){
$("#coin").removeClass("tossing");
$("#coin").removeClass("flipping");
$("#coin").removeClass("head");
$("#coin").addClass("tail");
showResults("T");
}

function showtossing(){
$("#coin").removeClass("flipping");
$("#coin").removeClass("tail");
$("#coin").removeClass("head");
$("#coin").addClass("tossing");


}

function showResults(msg){
if(!$("#results").text()==""){
$("#results").append(",");
}
$("#results").append(msg);
}
 function getRandomTime(){
        return  Math.floor((Math.random() * 2) + 1); 
 }
function startCompetition(){
setTimeout(function(){
        
        
        if($("#winner").text()==""){
                launchCoinFlipper();
                startCompetition();
        }
        },3000);
}
function checkCompetitionResults(){
var s = $("#results").text();

if(s.indexOf($("#myInput").val()) > -1){

$("#winner").text("I Won");

}
else if(s.indexOf($("#userInput").val()) > -1){
$("#winner").text("You Won");
}
 
}

function mySelection(){
$("#winner").text("");
$("#results").text("");
var userinput=$("#userInput").val();
var str_array = userinput.split(',');

var myString=not(str_array[1]);
myString=myString+","+str_array[0]+","+str_array[1];
$("#myInput").val(myString);
}
function not(state){
if(state=="H"){
return "T";
}
if(state=="T"){
return "H";
}
}

