import Lesson from '../model/LessonDB.js'

// Retrieve and return all Lesson from the const Lesson.
export const list = (req, res) => {
	Lesson.find()
		.then((result) => res.json(result))
		.catch((err) => res.status(500).send({ errors: 'Server Error' }))
}

// add new Lesson
export const create = (req, res) => {
	// console.log(JSON.stringify(req.body));
	let lesson = new Lesson(req.body)
	lesson
		.save()
		.then(() => res.json(lesson))
		.catch((err) => {
			if (err.name === 'MongoServerError' && err.code === 11000) {
				let errors = {
					error:
						'A duplicate key error on field: ' + Object.keys(err.keyPattern)[0],
				}
				return res.status(400).send(errors)
			} else if (err.name === 'ValidationError') {
				let errors = {}
				Object.keys(err.errors).forEach((key) => {
					errors[key] = err.errors[key].message
				})
				return res.status(400).send(errors)
			}
			res
				.status(500)
				.send({ errors: 'Something went wrong ' + err.name + ' ' + err.code })
		})
}

// Find a single Lesson with an id
export const get = (req, res) => {
	const id = req.params.id
	Lesson.findOne({ id: id })
		.then((lesson) => {
			if (!lesson) {
				return res.status(404).send({
					errors: 'Course not found with id ' + id,
				})
			}
			res.json(lesson) // default status = 200
		})
		.catch((err) => {
			return res.status(400).send({
				errors: 'Error retrieving Course with id ' + id,
			})
		})
}

// Update a Lesson identified by the id in the request
export const put = (req, res) => {
	// Validate Request
	const data = req.body || {}
	console.log(data)
	
	if (!data || data.id != req.params.id)
		return res.status(422).send({ errors: 'id must be alphanumeric.' })
	
	// Find course and update it with the request body
	Courses.findOneAndUpdate(
		{ id: req.params.id },
		{ $set: data },
		{
			upsert: false, // update only (if not found, NOT insert)
			// { upsert: true, // insert new if not foud
			returnOriginal: false, // return the new record if false otherwise the
			if (lesson) {
				return res.json(lesson);
			},
		}
	)
		.then((lesson) => {
			if (!lesson) {
				return res.status(404).send({
					errors: 'Lesson not found with id ' + req.params.id,
				})
			}
			res.json(lesson)
		})
		.catch((err) => {
			if (err.kind === 'ObjectId') {
				return res.status(404).send({
					errors: 'Object not found with id ' + req.params.id,
				})
			}
			return res.status(500).send({
				errors: 'Error updating Course with id ' + req.params.id,
			})
		})
}


// export const remove = (req, res) => {
// 	const { id } = req.params;

// 	Courses.deleteOne({ id: id })
// 		.then((r) => {
// 			if (r.acknowledged && r.deletedCount >= 1) {
// 				return res.status(200).send({ success: true });
// 			} else {
// 				return res.status(200).send({ success: "Record doesn't exist or already deleted" });
// 			}
// 		})
// 		.catch((err) => {
// 			return res.status(404).send({ errors: err.name });
// 		});

// 	res.send('Item deleted successfully');
// };

export const remove = (req, res) => {
	const { id } = req.params;

	Lesson.deleteOne({ id: id })
		.then((r) => {
			if (r.acknowledged && r.deletedCount >= 1) {
				return res.status(200).send({ success: true });
			} else {
				return res.status(200).send({ success: "Record doesn't exist or already deleted" });
			}
		})
		.catch((err) => {
			return res.status(404).send({ errors: err.name });
		});
};





