import { useLoaderData } from 'react-router-dom'

const PostDetailPage = () => {
	const product = useLoaderData()
	return (
		<>
			<div className="item">
				{product ? (
					<>

						<div className="img-detail">
						 <img src={product.imageUrl} width="400" alt="Image" />
						</div>
						<h2>{product.title}</h2>
						<div className="id">
							#{product.id}
						</div>
						<div className="author">
							<span>author:</span> {product.author}
						</div>
						<div className="punblished">
							<span>Punblished:</span> {product.date}
						</div>
						<div className="content">
							{product.content}
						</div>
						
					</>
				) : (
					<div>No such post!</div>
				)}
			</div>
		</>
	)
}
export default PostDetailPage


export const loader = async ({ params }) => {
	const { id } = params
	const res = await fetch('/products/' + id)
	let product = await res.json()
	if (!res.ok) {
		throw Error(product.error)
	}
	return product //res.json()
}
