var currentDay = $("#currentDay");
let m = moment();
currentDay.text(m.format("[Today is] dddd[,] MMM Mo[,] YYYY"));
var container = $(".container")

var hours = ["8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "500pm"];

for (var i = 0; i < hours.length; i++) {
    //Create row for each hour of the day
    var hourRow = $("<div>");
    //Assign row class
    hourRow.attr("class", "row");
    //Create column for the hour to display in
    var hourCol = $("<div>");
    //Assign column class
    hourCol.attr("class", "col-2");
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
    //Just to test
    planCol.text("Test");
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
    //Set text content of save button
    saveBtn.text("Save");
    //Append save button to last column (which is already appended to the row)
    saveBtnCol.append(saveBtn);
}; 



{/* <div class="container">
      <button type="button" class="saveBtn btn btn-success">Save</button>
    </div> */}