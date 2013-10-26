$(document).ready(function() {
    // Set weekday string in the upper left corner
    var weekdays = [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday",
    ];
    var date = new Date();
    var day = weekdays[date.getDay()];

    $("#weekday").text(day);

    // Make sure headers and arrows are updated on hover
    $("#section_basecamp").hover(function() {
        $("#header_default, #header_basecamp, #arrow_basecamp").toggle();
    });

    $("#section_highrise").hover(function() {
        $("#header_default, #header_highrise, #arrow_highrise").toggle();
    });

    $("#section_campfire").hover(function() {
        $("#header_default, #header_campfire, #arrow_campfire").toggle();
    });
});
