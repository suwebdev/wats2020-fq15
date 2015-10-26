$(document).on('ready', function() {

	$('.add-favorite').on('click', function(event) {
		
		// Grab poem information
		var poemTitle = $(event.target).parent().parent().find('.media-heading').text();
		var poemAuthor = $(event.target).parent().parent().find('.author').text();
		var poemURL = $(event.target).parent().parent().data('url');

		// Print object values to make sure they are correct
		console.log(poemTitle);
		console.log(poemAuthor);
		console.log(poemURL);

		// Create poem object to save to localstorage
		var fav = {
			'title': poemTitle,
			'author': poemAuthor,
			'url': poemURL
		};

		localStorage.setItem('fav1', JSON.stringify(fav));
		console.log(JSON.parse(localStorage.getItem('fav1')));
	});
});
