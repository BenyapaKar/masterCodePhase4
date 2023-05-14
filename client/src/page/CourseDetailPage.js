import { NavLink ,Link} from "react-router-dom";
import { useLoaderData } from 'react-router-dom'
const CourseDetailPage = () => {
	const product1 = useLoaderData()
	return (
		<>
			<div className="item">
				{product1 ? (
					<>
						<div className="img-detail">
						 	<img src={product1.fullImg} height="300" width="100%" alt="Image" />
						</div>
						<h2 style={{margin: "0 7rem"}}>เนื้อหาในคอร์ส</h2><br></br>
						<h1 style={{margin: "0 7rem"}}>{product1.id} : {product1.title}</h1>
						<div className="container2">
							{product1.content.title1 ? (<h4>Chapter 1 : {product1.content.title1}</h4>) : (<></>)}
							{product1.content.title2 ? (<h4>Chapter 2 : {product1.content.title2}</h4>) : (<></>)}
							{product1.content.title3 ? (<h4>Chapter 3 : {product1.content.title3}</h4>) : (<></>)}
							{product1.content.title4 ? (<h4>Chapter 4 : {product1.content.title4}</h4>) : (<></>)}
							{product1.content.title5 ? (<h4>Chapter 5 : {product1.content.title5}</h4>) : (<></>)}
							{product1.content.title6 ? (<h4>Chapter 6 : {product1.content.title6}</h4>) : (<></>)}
							{product1.content.title7 ? (<h4>Chapter 7 : {product1.content.title7}</h4>) : (<></>)}
							{product1.content.title8 ? (<h4>Chapter 8 : {product1.content.title8}</h4>) : (<></>)}
						</div>
						<div className="container">
							<div class="fixed-btn">
							<Link to={`/${product1.id}/lesson`}>
								เริ่มเรียนเลย
							</Link>
								{/* <NavLink to="/lesson">เริ่มเรียนเลย</NavLink>&nbsp; */}
							</div>
						</div>
						<br></br><br></br><br></br><br></br>
					</>
				) : (
					<div>No such course!</div>
				)}
			</div>
		</>
	)
}
export default CourseDetailPage


export const loader1 = async ({ params }) => {
	const { id } = params
	const res = await fetch('/products1/' + id)
	let product = await res.json()
	if (!res.ok) {
		throw Error(product.error)
	}
	return product //res.json()
}
