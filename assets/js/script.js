// Showing current date using moment
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
var today = moment().format("H")
var hourFormat = "hha";
var currentHour = today.format(hourFormat);
var currentDay = today.format("dddd, MMMM Do");

$("#currentDay").text(currentDay);

for (var i = 0; i <= workHours.length; i++) {
  var hour = workHours[i];
  var hourValue = localStorage.getItem(hour);
  var textarea = $("#" + hour + "-textarea");

  if (hourValue) {
    textarea.val(hourValue);
  }

  var futureWorkHours = workHours.slice(workHours.indexOf(currentHour) + 1, workHours.length)
  var isFuture = futureWorkHours.includes(hour)
  var isPresent = hour === currentHour;

  if (isFuture) {
    textarea.attr("class", "future");
  } else if (isPresent) {
    textarea.attr("class", "present");
  } else {
    textarea.attr("class", "past");
  }
}

function onSave(hour) {
  var hourValue = $("#" + hour + "-textarea").val();
  localStorage.setItem(hour, hourValue);

//   if(!$("#messageBox")) {
//     var messageBox = "<div id='messageBox'>Saved to local storage</div>" 
//     $("#container").append(messageBox)
//   }
// }
