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

    //Function that display the correct color of textarea based on the past, present, and future hours
    function determineHour() {

        //Get the current hour of the day 
        var currentHour = moment().hour();

        //For each time-block, match the dataset attribute to the current hour to display the correct background color
        $(".time-block").each(function() {

            //Use the dataset attribute in html and get the number of each timeblock from 9 - 17
            var dataNumberAttribute = parseInt($(this).attr("data-number"));

            //Determine what is the current hour with get data number
            if (dataNumberAttribute < currentHour) {

                //Add the class past to display the hours that has past
                $(this).addClass("past");

            } else if (dataNumberAttribute === currentHour) {

                //Add the class present to display the current hour that is now
                $(this).addClass("present");

            } else {

                //Add the class future to display the future hour coming up
                $(this).addClass("future");
            }
        });
    }

    //Call the function deteremine hour
    determineHour();
});