
$(document).ready(function() { 
	$("#screen_dialer").show();
	$("#screen_contact_list").hide();
	$("#screen_add_contact").hide(); 
	$("#button_dialer").css('background-color', '#cae2f9');
});

$("#button_dialer").click(function() {
	$("#screen_dialer").show();
	$("#screen_contact_list").hide();
	$("#screen_add_contact").hide();
	$(this).css('background-color', '#cae2f9');
	$('#button_contact_list').css('background-color', '#0a3157');
  	$('#button_add_contact').css('background-color', '#0a3157');
});

$("#button_contact_list").click(function() {
	$("#screen_contact_list").show();
	$("#screen_dialer").hide();
	$("#screen_add_contact").hide();
	$(this).css('background-color', '#cae2f9');
	$('#button_dialer').css('background-color', '#0a3157');
  	$('#button_add_contact').css('background-color', '#0a3157');
});

$("#button_add_contact").click(function() {
	$("#screen_add_contact").show();
	$("#screen_dialer").hide();
	$("#screen_contact_list").hide();
	$(this).css('background-color', '#cae2f9');
	$('#button_dialer').css('background-color', '#0a3157');
  	$('#button_contact_list').css('background-color', '#0a3157');
});

$("#clear_button").click(function() {
	$("#first_name").val("");
	$("#last_name").val("");
	$("#phone_number").val("");
	$("#email").val("");
});

$("#button1").click(function() {
	$("#dialer_input_bar").val("1");
});

$("#button2").click(function() {
	$("#dialer_input_bar").val("2");
});

$("#button3").click(function() {
	$("#dialer_input_bar").val("3");
});

$("#button4").click(function() {
	$("#dialer_input_bar").val("4");
});

$("#button5").click(function() {
	$("#dialer_input_bar").val("5");
});

$("#button6").click(function() {
	$("#dialer_input_bar").val("6");
});

$("#button7").click(function() {
	$("#dialer_input_bar").val("7");
});

$("#button8").click(function() {
	$("#dialer_input_bar").val("8");
});

$("#button9").click(function() {
	$("#dialer_input_bar").val("9");
});

$("#button0").click(function() {
	$("#dialer_input_bar").val("0");
});

$("#button_star").click(function() {
	$("#dialer_input_bar").val("*");
});

$("#button_hash").click(function() {
	$("#dialer_input_bar").val("#");
});

$("#button_clear").click(function() {
	$("#dialer_input_bar").val("");
});





