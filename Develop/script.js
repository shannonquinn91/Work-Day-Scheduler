var currentDay = $("#currentDay");
let m = moment();
currentDay.text(m.format("[Today is] dddd[,] MMM Mo[,] YYYY"));
var container = $(".container")

var hours = ["8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "500pm"];

for (var i = 0; i < hours.length; i++) {
    var hourRow = $("<div>");
    hourRow.attr("class", "row");
    var hourCol = $("<div>");
    hourCol.attr("class", "col-2");
    hourRow.append(hourCol);
    hourCol.text(hours[i]);
    container.append(hourRow);
}; 

