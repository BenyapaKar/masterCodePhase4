import * as mongooseDef from 'mongoose'
let mongoose = mongooseDef.default

var courseSchema = mongoose.Schema({
	content: { title1: String, title2: String, title3: String, title4: String, title5: String, title6: String, title7: String, title8: String},
	id: { type: String, unique: true, required: true },
	author: String,
	date: String,
	title: String,
	imageUrl: String,
	fullImg: String
})

// compile the schema into a model, or a class that we can do things on.
let Courses = mongoose.model('Course', courseSchema, 'course')

export default Courses
