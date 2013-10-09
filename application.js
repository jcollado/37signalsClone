$(document).ready(function() {
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
