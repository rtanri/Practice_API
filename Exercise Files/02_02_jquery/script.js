$.ajax ({
	url: 'https://hplussport.com/api/products',
	success: function(response) {
		console.log(response)
		console.log(typeof response)
	}
})