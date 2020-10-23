var currentDay = $("#currentDay");
let m = moment();
currentDay.text(m.format("[Today is] dddd[,] LL"));
var container = $(".container")

var hours = ["8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"];

var values = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

for (var i = 0; i < hours.length; i++) {
    //Create row for each hour of the day
    var hourRow = $("<div>");
    //Assign row class
    hourRow.attr("class", "row");
    //Create column for the hour to display in
    var hourCol = $("<div>");
    //Assign column class
    hourCol.attr("class", "col-2");
    hourCol.attr("id", values[i])
    //Append column to row
    hourRow.append(hourCol);
    //Set text of column to hour of the day
    hourCol.text(hours[i]);
    //Append the row to the container
    container.append(hourRow);
    //Create column for user input, the plan for that hour of the day
    var planCol = $("<div>");
    //Assign class to middle column
    planCol.attr("class", "col-9");
    
    //if statement goes here? if (input.attr("data-time") ==== saveBtn.attr("data-time")) {create text area?}
    
    //Create text area for user input
    var input = $("<textarea>");
    //Assign class to text area
    input.attr("class", "inputBox");
    //Assign data to text area
    input.attr("data-time", hours[i]);
    //Assign placeholder text for text area
    input.attr("placeholder", "Event");
    //Text area will occupy 100% of the middle column
    input.attr("cols", "100");
    //Append text area to middle column
    planCol.append(input);
    //Append plan column to the row (which is already appended to container)
    hourRow.append(planCol);
    //Create column for save button
    var saveBtnCol = $("<div>");
    //Assign class to last column of row
    saveBtnCol.attr("class", "col-1");
    //Append column to row
    hourRow.append(saveBtnCol);
    //Create save button
    var saveBtn = $("<button>");
    //Assign attributes to button to apply CSS
    saveBtn.attr("type", "button");
    saveBtn.attr("class", "saveBtn btn btn-success");
    saveBtn.attr("data-time", hours[i]);
    saveBtn.attr("onclick", "updateEvent()");
    //Set text content of save button
    saveBtn.text("Save");
    //Append save button to last column (which is already appended to the row)
    saveBtnCol.append(saveBtn);

    //Calls the function that changes the color for the hour column to indicate current hour of the day
    color(hourCol);
}; 


function updateEvent (){
    var dataTime = $(this).attr("data-time");
    $(`.inputBox[data-time="${dataTime}"`);
    var userInput = $(".inputBox").val() || {};
    localStorage.setItem("data", JSON.parse(userInput));
    localStorage.getItem("data", JSON.stringify(userInput));
}

    
//Function that changes the color of the hour column based on the current hour of the day
function color(element) {
    //Variable set by moment.js current hour of the day integer
    var currentHour = moment().format('H');
    //Variable that pulls the value of the id of a certain element (hourCol) and parses to integer
    var timeVal = parseInt(element.attr('id'));
    //if/else statements to compare timeVal and currentHour integers
    if (timeVal < currentHour) {
        element.css("background-color", "red");
    }
    else if (timeVal > currentHour) {
        element.css("background-color", "green");
    }
    else {
        element.css("background-color", "yellow");
    }
};