$(function () {
  var currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");
  var displayTime = document.querySelector("#currentDay");
  displayTime.textContent = currentTime;
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  });

  function hourMarks() {
    var hourNow = dayjs().hour();
    $(".time-block").each(function () {
      var blockHourNumber = parseInt($(this).attr("id").split("-")[1]);
      console.log("current hour" + hourNow)
     if (blockHourNumber === hourNow) {
      $(this).addClass("present");
      $(this).removeClass("past"); 
    }else if (blockHourNumber < hourNow) {
        $(this).addClass("past");
      } else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      }
    });
  }
  hourMarks();


function displayText() {
  $(".time-block").each(function () {
    var blockHour = $(this).attr("id");
    $(this).children(".description").val(localStorage.getItem(blockHour));
  });
}
displayText();

});