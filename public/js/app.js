var loginTemplate
var signupTemplate
var overviewTemplate

$(function() {
	console.log('Cha-Ching Noise!');

	loginTemplate = Handlebars.compile($('#template-log-in').html());
	signUpTemplate = Handlebars.compile($('#template-sign-up').html());
	overviewTemplate = Handlebars.compile($('#template-overview-page').html());

	fetchAndRenderSession();

	$('body').on('click', '#button-log-in', login);
	$('body').on('click', '#button-log-out', logout);
	$('body').on('click', '#button-sign-up', signUp);	
	$('body').on('click', '#create-owner', createOwner);
	$('body').on('click', '#go-back', goBack);

});

var fetchAndRenderSession = function() {
	$.get('/current_owner').done(function(owner) {
		if (owner) {
			$('#container').html(overviewTemplate(owner));
		} else {
			$('#container').html(loginTemplate());
		}
	}).fail(function(jqXHR) {
		if (jqXHR.status === 404) {
			$('#container').html('This is an error. You did wrong.');
		}
	});
};