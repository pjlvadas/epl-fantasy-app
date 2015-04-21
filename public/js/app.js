var loginTemplate
var signupTemplate
var overviewTemplate

$(function() {
	console.log('WHAT A HIT');

	loginTemplate = Handlebars.compile($('#template-owner-log-in').html());
	signUpTemplate = Handlebars.compile($('#template-owner-sign-up').html());
	overviewTemplate = Handlebars.compile($('#template-normal-overview').html());

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

var signUp = function() {
	$('#container').empty();
	$('#container').html(signUpTemplate());

};

var createOwner = function() {
	var username  = $('#new-username').val();
	var password  = $('#new-password').val();
	var firstName = $('#new-first-name').val();
	var lastName  = $('#new-last-name').val();

	$.post('/users', {
		username: username,
		password: password,
		owner_first_name: firstName,
		owner_last_name: lastName,
	}).done(function(user) {
		fetchAndRenderSession();
	}).error(function (response, disaster) {
		var err = response.responseJSON;
		alert(err.err + ' : ' + err,msg);
	});
};

var goBack = function() {
	$('#container').empty();
	fetchAndRenderSession();
};

var login = function() {
	var username  = $('#username-log-in').val();
	var password  = $('#password-log-in').val();

	$.post('/sessions', {
		username: username,
		password: password
	})
	.done(function() {
		$('#container').empty();
		fetchAndRenderSession();
		// fetchAndRenderLeagues();
		// fetchAndRenderTeams();		
	})
	.fail(function (response) {
		var err = response.responseJSON;
		alert(err.err + ' : ' + err.msg)
	});
};

var logout = function() {
	$.ajax({
		url: '/sessions',
		method: 'DELETE',
	}).done(function() {
		fetchAndRenderSession();
	});
};