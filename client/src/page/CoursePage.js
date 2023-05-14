import {
	Link,
	useLoaderData,
	useSearchParams,
	useSubmit,
	redirect,
	Form
} from 'react-router-dom'


const CoursePage = () => {

	const products1 = useLoaderData()
	const list = products1.map((e) => (
		<Link key={e.id} to={e.id}>
			<div className="styleCard">
				<li title={e.title}>
				<div className="img-post">
					<img src={e.imageUrl} alt="Image" />
				</div>
				<div class="post-title">
					{e.title}
				</div>
				</li>
			</div>
		</Link>
	))

	return (
		<>
			<hr />
			{products1.length ? (
				<ul className="list-item">{list}</ul>
			) : (
				'No product available'
			)}
			
		</>
	)
}

export default CoursePage


export const productsLoader1 = async () => {
	// const res = await getProducts();
	const res = await fetch('/products1')
	if (!res.ok) {
		throw Error('Could not fetch the products')
	}
	return res.json()
}

const genId = () => Math.random().toString(36).substring(2, 9)

export async function action1() {
	const productId = genId()
	return redirect(`/products1/${productId}/new`)
}
