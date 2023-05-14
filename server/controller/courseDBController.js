import Courses from '../model/CourseDB.js'

// Retrieve and return all Courses from the const Courses.
export const list = (req, res) => {
	Courses.find()
		.then((result) => res.json(result))
		.catch((err) => res.status(500).send({ errors: 'Server Error' }))
}

// add new Courses// add new Courses
export const create = (req, res) => {
	// console.log(JSON.stringify(req.body));
	let course = new Courses(req.body)
	course
		.save()
		.then(() => res.json(course))
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

// Find a single course with an id
export const get = (req, res) => {
	const id = req.params.id
	Courses.findOne({ id: id })
		.then((course) => {
			if (!course) {
				return res.status(404).send({
					errors: 'Course not found with id ' + id,
				})
			}
			res.json(course) // default status = 200
		})
		.catch((err) => {
			return res.status(400).send({
				errors: 'Error retrieving Course with id ' + id,
			})
		})
}

// Update a course identified by the id in the request
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
			if (course) {
				return res.json(course);
			},
		}
	)
		.then((course) => {
			if (!course) {
				return res.status(404).send({
					errors: 'Course not found with id ' + req.params.id,
				})
			}
			res.json(course)
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

	Courses.deleteOne({ id: id })
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





