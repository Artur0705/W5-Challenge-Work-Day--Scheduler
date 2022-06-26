// Variable's start
var workHours = [
  "09am",
  "10am",
  "11am",
  "12pm",
  "01pm",
  "02pm",
  "03pm",
  "04pm",
  "05pm",
];
var today = moment();
var hourFormat = "hha";
var currentHour = today.format(hourFormat);
var currentDay = today.format("dddd, MMMM Do");
var futureWorkHours = workHours.slice(
  workHours.indexOf(currentHour) + 1,
  workHours.length
);
// Variable's end

// Set current Day
$("#currentDay").text(currentDay);

// Creating a loop to check work hours status and values

for (var i = 0; i <= workHours.length; i++) {
  var hour = workHours[i];
  var hourValue = localStorage.getItem(hour);
  var textarea = $("#" + hour + "-textarea");

  if (hourValue) {
    textarea.val(hourValue);
  }

  var isFuture =
    futureWorkHours.includes(hour) && workHours.includes(currentHour);
  var isPresent = hour === currentHour;

  if (isFuture) {
    textarea.addClass("future");
  } else if (isPresent) {
    textarea.addClass("present");
  } else {
    textarea.addClass("past");
  }
}

// Create a function to save a value
function onSave(hour) {
  var hourValue = $("#" + hour + "-textarea").val();

  if (hourValue.trim()) {
    localStorage.setItem(hour, hourValue);

    if (!$("#messageBox").length) {
      var messageBox = $("<div id='messageBox'>Saved to local storage</div>");
      $("#container").prepend(messageBox);
    }
  }
}
