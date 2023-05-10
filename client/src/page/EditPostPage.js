import { Form, redirect, useNavigate, useLoaderData } from 'react-router-dom'
// import { createProduct } from '../newProductsData'

export async function editAction({ request, params }) {
	const formData = await request.formData()
	let product = Object.fromEntries(formData)
	product = { id: params.id, ...product }
	console.log("product", product)
	const id = product.id
	console.log("id", id)

	fetch(`/products/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(product)
	})
		.then(response => response.json())
		.then(product => {
			console.log(product);
		})
		.catch(error => {
			console.log(error);
		});
	return redirect(`/post/${id}`)
}

  

export default function EditProduct() {
	const navigate = useNavigate()
	const product = useLoaderData()
	
	return (
		<Form replace method="put" className="product-form">
			<label>
				<span>ชื่อหัวข้อ*</span>
				<input placeholder="ชื่อหัวข้อ" type="text" name="title" required />
			</label>
			<label>
				<span>เนื้อหาบทความ*</span>
				<textarea name="content" rows={6} />
			</label>
			<label>
				<span>ชื่อผู้แต่ง*</span>
				<input placeholder="ชื่อผู้แต่ง" type="text" name="author" required />
			</label>
			<label>
				<span>วันที่เขียน*</span>
				<input placeholder="วว/ดด/ปป(ค.ศ.)" type="text" name="date" required />
			</label>
			<label>
				<span>ลิ้งค์รูปภาพประกอบ*</span>
				<input placeholder="ลิ้งค์รูปภาพ" type="text" name="imageUrl" required />
			</label>
			<p>


				<br></br>
				<div className="editbutton">
					<button type="submit">แก้ไข</button>
					<button
						type="button"
						onClick={() => {
							navigate(-1)
						}}
					>
						ยกเลิก
					</button>
				</div>
				<br></br>
			</p>
		</Form>
	)
}



