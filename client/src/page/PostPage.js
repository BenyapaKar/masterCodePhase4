import {
	Link,
	useLoaderData,
	useSearchParams,
	useSubmit,
	redirect,
} from 'react-router-dom'


const PostPage = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const q = searchParams.get('q')
	console.log(q)
	const submit = useSubmit()

	const resetSearch = (e) => {
		const param = searchParams.get('q')
		if (param) {
			searchParams.delete('q')
			setSearchParams(searchParams)
		}
	}

	const products = useLoaderData()
	const list = products.map((e) => (
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
			{products.length ? (
				<ul className="list-item">{list}</ul>
			) : (
				'No product available'
			)}
		</>
	)
}

export default PostPage


export const productsLoader = async () => {
	// const res = await getProducts();
	const res = await fetch('/products')
	if (!res.ok) {
		throw Error('Could not fetch the products')
	}
	return res.json()
}

const genId = () => Math.random().toString(36).substring(2, 9)

export async function action() {
	const productId = genId()
	return redirect(`/products/${productId}/new`)
}
