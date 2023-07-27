
$(document).ready(function() { 
	$("#screen_dialer").show();
	$("#screen_contact_list").hide();
	$("#screen_add_contact").hide();
	$('#screen_about').hide();
	$('#switchcss').show();
	$('#switchback').hide();
	$("#button_dialer").css('background-color', '#cae2f9');
	$("#button_dialer").css('color', '#2E2E2E');
});

$("#button_dialer").click(function() {
	$("#screen_dialer").show();
	$("#screen_contact_list").hide();
	$("#screen_add_contact").hide();
	$('#screen_about').hide();
	$(this).css('background-color', '#cae2f9');
	$(this).css('color', '#2E2E2E');
	$('#button_contact_list').css('background-color', 'black');
	$('#button_contact_list').css('color', 'white');
  	$('#button_add_contact').css('background-color', 'black');
  	$('#button_add_contact').css('color', 'white');
  	$('#about').css('background-color', 'black');
  	$('#about').css('color', 'white');
});

$("#button_contact_list").click(function() {
	$("#screen_contact_list").show();
	$("#screen_dialer").hide();
	$("#screen_add_contact").hide();
	$('#screen_about').hide();
	$(this).css('background-color', '#cae2f9');
	$(this).css('color', '#2E2E2E');
	$('#button_dialer').css('background-color', 'black');
	$('#button_dialer').css('color', 'white');
  	$('#button_add_contact').css('background-color', 'black');
  	$('#button_add_contact').css('color', 'white');
  	$('#about').css('background-color', 'black');
  	$('#about').css('color', 'white');
});

$("#button_add_contact").click(function() {
	$("#screen_add_contact").show();
	$("#screen_dialer").hide();
	$("#screen_contact_list").hide();
	$('#screen_about').hide();
	$(this).css('background-color', '#cae2f9');
	$(this).css('color', '#2E2E2E');
	$('#button_dialer').css('background-color', 'black');
	$('#button_dialer').css('color', 'white');
  	$('#button_contact_list').css('background-color', 'black');
  	$('#button_contact_list').css('color', 'white');
  	$('#about').css('background-color', 'black');
  	$('#about').css('color', 'white');
});

$("#about").click(function() {
	$('#screen_about').show();
	$("#screen_dialer").hide();
	$("#screen_contact_list").hide();
	$('#screen_add_contact').hide();
	$(this).css('background-color', '#cae2f9');
	$(this).css('color', '#2E2E2E');
	$('#button_dialer').css('background-color', 'black');
	$('#button_dialer').css('color', 'white');
  	$('#button_contact_list').css('background-color', 'black');
  	$('#button_contact_list').css('color', 'white');
  	$('#button_add_contact').css('background-color', 'black');
  	$('#button_add_contact').css('color', 'white');
});

$("#switchcss").click(function() {
	$("#switchback").show();
	$("#switchcss").hide();
});

$("#switchback").click(function() {
	$("#switchback").hide();
	$("#switchcss").show();
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

function switchtoLV() {
            var theme = document.getElementsByTagName('link')[1];
            if (theme.getAttribute('href') == 'phone.css') {
                theme.setAttribute('href', 'phone-large.css');
            } else {
                theme.setAttribute('href', 'phone.css');
            }
        }

function switchBack() {
            var theme = document.getElementsByTagName('link')[1];
            if (theme.getAttribute('href') == 'phone-large.css') {
                theme.setAttribute('href', 'phone.css');
            } else {
                theme.setAttribute('href', 'phone-large.css');
            }
        }










