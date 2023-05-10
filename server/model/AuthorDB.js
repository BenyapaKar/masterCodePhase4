import * as mongooseDef from 'mongoose'
let mongoose = mongooseDef.default

const authorSchema = new mongoose.Schema({
	authorNo: String,
	createdDate: { type: String, default: new Date(Date.now()).toLocaleString() },
	authorName: {
		name: { type: String, default: 'Guest' },
	},

	postItems: [
		{
			postTile: String,
			postRef: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Post',
			},
			

		},
	]
})

let AuthorDetail = mongoose.model('Authors', authorSchema, 'Authors')

export default AuthorDetail
