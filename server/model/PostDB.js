import * as mongooseDef from 'mongoose'
let mongoose = mongooseDef.default

var postSchema = mongoose.Schema({
	content: String,
	id: { type: String, unique: true, required: true },
	author: String,
	date: String,
	title: String,
	imageUrl: String,
})

// compile the schema into a model, or a class that we can do things on.
let Posts = mongoose.model('Post', postSchema, 'post')

export default Posts
