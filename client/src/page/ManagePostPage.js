import {Link,
	useLoaderData,
	useSearchParams,
	useSubmit,
	redirect,
	Form} from "react-router-dom";

const ManagePost = () => {
    
    const products = useLoaderData()

	
	const handleDelete = (productId) => {
		const proId = {
			"id": productId
		}
		fetch(`/products/${productId}`, {
		  method: 'DELETE',
		  body:JSON.stringify(proId),
		  headers: new Headers({ 'Content-Type': 'application/json' }),
		})
		  .then(response => {
			if (!response.ok) {
			  throw new Error('Network response was not ok');
			}
			console.log('Item deleted successfully');
			redirect(`/managePost`)
		  })
		  .catch(error => {
			console.error('There was a problem with the delete request:', error);
		  });
	  };
	  
	const list = products.map((e) => (
		 
		<div key={e.id} className="styleCard" >
			<Link to={`/managePost/${e.id}/edit`}>
				<div className="img-post">
					<img src={e.imageUrl} alt="Image" />
				</div>
				<div className="post-title">
					{e.title}
				</div>
				<div className="deletebutton">
				<button type="button" onClick={() => {if (window.confirm('Are you sure to delete this product?')) { handleDelete(e.id) }}}>ลบ</button>
				</div>

			</Link>

		</div>
	))
	

	return (
		<>
            <div className="addbutton">
            <Form method="post">
                <button type="submit">เพิ่มบทความ</button>
            </Form>
            </div>
			<hr />
			{products.length ? (
				<ul className="list-item">{list}</ul>
			) : (
				'No product available'
			)}
			
		</>
	)
};

export default ManagePost; 

export const postLoader = async () => {
	// const res = await getProducts();
	const res = await fetch('/products')
	if (!res.ok) {
		throw Error('Could not fetch the products')
	}
	return res.json()
}

const genId = () => Math.random().toString(36).substring(2, 9)

export async function addPost() {
	const productId = genId()
	return redirect(`/managePost/${productId}/new`)
}


