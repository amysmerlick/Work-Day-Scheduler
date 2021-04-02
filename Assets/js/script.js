var displayDate = $('#displayDate');
var displayTime = $('#displayTime');

$(document).ready(() => {
    //set interval so time updates every 1 second(1000ms)
    setInterval(() => {
        let todayDate = moment().format('dddd, MMM Do YYYY');
        let timeNow = moment().format('LT');
        //set innerHTML to the
        displayDate.html(todayDate);
        displayTime.html(timeNow);
    }, 1000);
    $(".saveBtn").on("click", function () {
        var userInput = $(this).siblings("textarea").val()
        var hour = $(this).siblings("textarea").attr("id")
        console.log(hour);
        console.log(userInput);
        localStorage.setItem(hour, userInput);

    })

    $('textarea').each(function (index, row) {
        console.log(row);
        var myId = $(row).attr('id');
        let timeNow = moment().format('H')
        console.log(typeof myId, typeof timeNow);
        console.log(myId, timeNow);
        var rowTime = parseInt(myId);
        var nowTime = parseInt(timeNow);

        if (nowTime > rowTime) {
            $(row).addClass('past');
        } else if (nowTime < rowTime) {
            $(row).addClass('future');
        } else if (nowTime === rowTime) {
            $(row).addClass('present');
        }
    });


    $("#9").val(localStorage.getItem("9"))
    $("#10").val(localStorage.getItem("10"))
    $("#11").val(localStorage.getItem("11"))
    $("#12").val(localStorage.getItem("12"))
    $("#13").val(localStorage.getItem("13"))
    $("#14").val(localStorage.getItem("14"))
    $("#15").val(localStorage.getItem("15"))
    $("#16").val(localStorage.getItem("16"))
    $("#17").val(localStorage.getItem("17"))
});


