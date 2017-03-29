app.factory('suggestions', [function() {
	var demoSuggestions = {
		posts: [
			{
				title: 'Free pizza at meetings',
				upvotes: 0,
				comments: []
			},
			{
				title: 'Free manga',
				upvotes: 0,
				comments: []
			},
			{
				title: 'More Tea',
				upvotes: 0,
				comments: []
			},
			{
				title: 'Dimmer Lights',
				upvotes: 0,
				comments: []
			},
			{
				title: 'Kitten petting',
				upvotes: 0,
				comments: []
			}
		]
	};
	return demoSuggestions;
}])