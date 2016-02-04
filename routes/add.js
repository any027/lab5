var data = require("../data.json");

exports.addFriend = function(req, res) {
	// Your code goes here
	console.log(data);
	res.render('add',data);
	name = req.query.name; 
	description = req.query.description;
	
	newFriend = {
		"name": name,
		"description": description,
		"imageURL": "http://lorempixel.com/500/500/people/"			
	};
	
	data["friends"].push(newFriend);
}