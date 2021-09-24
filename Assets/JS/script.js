// display todays date
var displayToday = document.querySelector("#currentDay");

var today= moment();
displayToday.textContent= today.format("dddd, MMMM do");

//Change page as time changes
//grabs current hour
var hour = today.format("HH");

//grabs all the data attribute elements
var blocks = $('[data-time]')

for (var i =0; i<blocks.length; i++) {
    
    //grabs specific block
    var oneBlock = blocks[i];
    var val = oneBlock.getAttribute('data-time')
    
    //checks if that time block is in the past
if (val < hour) {
   
    //changes background color
    oneBlock.style.backgroundColor='#350002'
}

// checks if we are in time block
else if (val == hour) {

    // changes background color
    oneBlock.style.backgroundColor='#fd7b02';
    
    //change text color
    document.querySelectorAll("h5")[i].style.color = "white";
}
};

//save event function
//grabs all buttons
var saveButtons = document.querySelectorAll(".saveBtn")

//loop for all buttons
for (i of saveButtons) {
    i.addEventListener('click', function(event) {

        //grabs the text from the container of button clicked
        var text = event.target.siblings().eq(2).text;

        //gets time tag from the container
        var timeBlock = event.target.parent().getAttribute('data-time')

        //pushes values to object

        storedEvents.task.push(text);
        storedEvents.time.push(timeBlock);

        //save local storage
        localStorage.setItem("storedEvents",JSON.stringify(storedEvents));
        
    });
  }
     //set local storage on page
     //set up object either from scratch or local storage
     var storedEvents = JSON.parse(localStorage.getItem("storedEvents")) || {
    task: [],
    time: [],
  };
    /*if there was data to pulled from local storage
    if (storedEvents !== undefined)  { 

        for each item in the storedEvent.time array, find the text area with the matching id and change its textContent to the value of the storedEvents.task array for the same index
  }*/
 


/*
To Do
Debug local storage set up: not tranversing correctly

Need to grab local storage and set task back based on data attributes
error with correctly grabbing items


    

    

*/



