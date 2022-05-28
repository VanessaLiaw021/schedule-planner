//When the page load, the document is ready to run the function 
$(document).ready(function() {

    //Function that get today date using moment.js
    function currentDate() {

        //Get the today date using moment.js
        var todayDate = moment().format('dddd, MMM Do YYYY');

        //Display the date onto the html page
        $("#currentDay").html(todayDate);
    }

    //Call the function current Date
    currentDate();
});