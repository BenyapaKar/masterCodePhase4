import * as mongooseDef from 'mongoose'
let mongoose = mongooseDef.default

var lessonSchema = mongoose.Schema({
	content: { 
		chapter1: String,
		chapter2: String,
		chapter3: String,
	    chapter4: String,
		chapter5: String, 
		chapter6: String, 
		chapter7: String, 
		chapter8: String
	},
	id: { type: String, unique: true, required: true },
	courseId: String,
	videoUrl: { 
		video1: String,
		video2: String,
		video3: String,
	    video4: String,
		video5: String, 
		video6: String, 
		video7: String, 
		video8: String
	},
	title: String,
})

// compile the schema into a model, or a class that we can do things on.
let Lesson = mongoose.model('Lesson', lessonSchema, 'lesson')

export default Lesson
