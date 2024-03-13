$(document).ready(function() {
    $("#submit").click(function(){
        let newTask = $("#input-task").val();
        $("#list").append("<li>" + newTask + "</li")
        $("#input-task").val("");
        
    });
    $("#list").on("click", "li", function(){
        $(this).remove();
    })
});