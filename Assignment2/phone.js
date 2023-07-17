
$(document).ready(function() { 
	$("#screen_dialer").show();
	$("#screen_contact_list").hide();
	$("#screen_add_contact").hide();
	$('#screen_gestures').hide();
	$("#button_dialer").css('background-color', '#cae2f9');
});

$("#button_dialer").click(function() {
	$("#screen_dialer").show();
	$("#screen_contact_list").hide();
	$("#screen_add_contact").hide();
	$('#screen_gestures').hide();
	$(this).css('background-color', '#cae2f9');
	$('#button_contact_list').css('background-color', '#0a3157');
  	$('#button_add_contact').css('background-color', '#0a3157');
  	$('#button_gestures').css('background-color', '#0a3157');
});

$("#button_contact_list").click(function() {
	$("#screen_contact_list").show();
	$("#screen_dialer").hide();
	$("#screen_add_contact").hide();
	$('#screen_gestures').hide();
	$(this).css('background-color', '#cae2f9');
	$('#button_dialer').css('background-color', '#0a3157');
  	$('#button_add_contact').css('background-color', '#0a3157');
  	$('#button_gestures').css('background-color', '#0a3157');
});

$("#button_add_contact").click(function() {
	$("#screen_add_contact").show();
	$("#screen_dialer").hide();
	$("#screen_contact_list").hide();
	$('#screen_gestures').hide();
	$(this).css('background-color', '#cae2f9');
	$('#button_dialer').css('background-color', '#0a3157');
  	$('#button_contact_list').css('background-color', '#0a3157');
  	$('#button_gestures').css('background-color', '#0a3157');
});

$("#button_gestures").click(function() {
	$("#screen_gestures").show();
	$("#screen_dialer").hide();
	$("#screen_contact_list").hide();
	$('#screen_add_contact').hide();
	$(this).css('background-color', '#cae2f9');
	$('#button_dialer').css('background-color', '#0a3157');
  	$('#button_contact_list').css('background-color', '#0a3157');
  	$('#button_add_contact').css('background-color', '#0a3157');
});

$("#clear_button").click(function() {
	$("#first_name").val("");
	$("#last_name").val("");
	$("#phone_number").val("");
	$("#email").val("");
});

var count = 0;
$('.dialer-screen-buttons').on('click', function () {
  var num = $(this).clone().children().remove().end().text();
  if (count < 13) {
    $('#dialer_input_bar').val($('#dialer_input_bar').val()+num.trim());
    count++;
  }
});

$('#button_clear').click(function() {
	$('#dialer_input_bar').val("");
});

var isDown = false;
var downX = 0;
var downY = 0;
var upX = 0;
var upY = 0;
var timer;

$('#gesture_area').mousedown(function(event){
    isDown = false;
    timer = setTimeout(function(){
        isDown = true;
        $('#gesture_output').val("Mouse Down");
        downX = event.pageX;
        downY = event.pageY;
    }, 50);
}).mouseup(function(event){
    upX = event.pageX;
    upY = event.pageY;
    if(isDown === false){
        //openModule();
            console.log('CLICK');
    }
    else if (upX > downX){
        $('#gesture_output').val("Swipe Right");
        $("#screen_dialer").show();
	    $("#screen_contact_list").hide();
	    $("#screen_add_contact").hide();
	    $('#screen_gestures').hide();
	    $('#button_dialer').css('background-color', '#cae2f9');
	    $('#button_contact_list').css('background-color', '#0a3157');
  	    $('#button_add_contact').css('background-color', '#0a3157');
  	    $('#button_gestures').css('background-color', '#0a3157');
    }
    else if (upX < downX){
        $('#gesture_output').val("Swipe Left");
        $("#screen_add_contact").show();
	    $("#screen_dialer").hide();
	    $("#screen_contact_list").hide();
	    $('#screen_gestures').hide();
	    $('#button_add_contact').css('background-color', '#cae2f9');
	    $('#button_dialer').css('background-color', '#0a3157');
  	    $('#button_contact_list').css('background-color', '#0a3157');
  	    $('#button_gestures').css('background-color', '#0a3157');
    }
    else if (upY > downY){
        $('#gesture_output').val("Swipe Bottom");
    }
    else if (upY < downY){
        $('#gesture_output').val("Swipe Top");
    }
    else if (upX == downX){
           $('#gesture_output').val("Mouse Up");
    }
    clearTimeout(timer);
});






