$("#open-navbar-menu").click(function(){
    $(".menu-components").show();

});


$("#close-menu-drop").click(function() {
    $(".menu-components").hide();
});



$("#close-modal-btn").click(function() {
    $(".modal").hide();
    $('#comment-section').css('display', 'none');
});



$("#other").click(function() {
    $(".modal").show();
    $("#income-type").text("Other");

});


$("#bank").click(function() {
    $(".modal").show();
    $("#income-type").text("Bank Interest");

});


$("#ebay").click(function() {
    $(".modal").show();
    $("#income-type").text("Ebay");

});


$("#salary").click(function() {
    $(".modal").show();
    $("#income-type").text("Salary");

});



$('input[name="addComment"]').change(function() {
    if ($('#commentYes').is(':checked')) {
        $('#comment-section').css('display', 'flex');
        
    } else {
        $('#comment-section').css('display', 'none');
    }

});


