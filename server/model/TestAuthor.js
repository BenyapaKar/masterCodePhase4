import Post from './PostDB.js'
import Authors from './AuthorDB.js'
import mongooseDbConnect from '../config/dbConnect.js'

mongooseDbConnect()

const insertAnAuthor = async () => {
	try {
		const posts = await Post.find({
			id: { $in: ['1344', '3444'] },
		}).exec()
		
		if (posts && posts?.length > 0 ) {
			const now = Date.now()

			var anAuthor = new Authors({
				authorNo: now.toString(),
				authorName: {
					name: 'เบญญาภา',
				},
				postItems: [
					{postTitle: posts[0].title ,postRef: posts[0]._id },
					{postTitle: posts[1].title ,postRef: posts[1]._id },
				],
			})

			const result = await anAuthor.save()
			if (result) {
				const Authors = await Authors.find({}) // search without condition
					.populate('postItems.postRef')
					.exec()
				if (Authors) {
					console.log(JSON.stringify(Authors, null, '\t'))
					console.log('done!!')
					process.kill(process.pid, 'SIGINT')
				}
			}
		} else {
			console.log('Not found posts!')
			process.kill(process.pid, 'SIGINT')
		}
	} catch (err) {
		throw err
	}
}

insertAnAuthor()
