import { Form, redirect, useNavigate } from 'react-router-dom'
// import { createProduct } from '../newProductsData'

async function createProduct(newProduct) {
	try {
		let response = await fetch('/products', {
			method: 'POST',
			body: JSON.stringify(newProduct),
			headers: new Headers({ 'Content-Type': 'application/json' }),
		}).then((res) => {
			if (!res.ok) {
				throw Error({ error: `Could not add new product ${newProduct.name}` })
			}
			return res.json()
		})
		return response
	} catch (error) {
		console.error('Error:', error)
	}
}

export async function newAction({ request, params }) {
	const formData = await request.formData()

	let product = Object.fromEntries(formData)
	if (!product) {
		throw new Error('Error in inserting new product ')
	}
	product = { id: params.id, ...product }
	const { id } = await createProduct(product)
	return redirect(`/post/${id}`)
}

export default function NewProduct() {
	const navigate = useNavigate()
	return (
		<Form replace method="post" className="product-form">
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
				<div className='addbutton'>
				<button type="submit">บันทึก </button>
				</div>
				<div className='editbutton'>
				<button
					type="button"
					onClick={() => {
						navigate(-1)
					}}
				>
					ยกเลิก
				</button>
				</div>
			</p>
		</Form>
	)
}
